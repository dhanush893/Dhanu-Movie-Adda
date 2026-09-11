const cors={
  'Access-Control-Allow-Origin':'*',
  'Access-Control-Allow-Methods':'GET,POST,OPTIONS',
  'Access-Control-Allow-Headers':'Content-Type,X-Telegram-Bot-Api-Secret-Token,Range'
};
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers:{...cors,'Content-Type':'application/json'}});

export default {
  async fetch(request,env){
    if(request.method==='OPTIONS') return new Response(null,{headers:cors});
    const url=new URL(request.url);
    try{
      if(url.pathname==='/api/health') return json({ok:true,service:'dhanu-movies-api'});
      if(url.pathname==='/api/movies'&&request.method==='GET'){
        const {results}=await env.DB.prepare('SELECT id,title,year,genres,runtime,rating,description,type,image_url AS image,file_id AS fileId,thumb_file_id AS thumbFileId,created_at FROM movies ORDER BY created_at DESC LIMIT 500').all();
        return json(results.map(x=>({...x,genres:x.genres?JSON.parse(x.genres):[]})));
      }
      if(url.pathname.startsWith('/media/')&&request.method==='GET') return streamTelegramFile(decodeURIComponent(url.pathname.slice(7)),request,env);
      if(url.pathname==='/telegram/webhook'&&request.method==='POST') return webhook(request,env);
      return json({error:'Not found'},404);
    }catch(error){console.error(error);return json({error:'Server error'},500)}
  }
};

async function webhook(request,env){
  if(env.WEBHOOK_SECRET){
    const supplied=request.headers.get('X-Telegram-Bot-Api-Secret-Token');
    if(supplied!==env.WEBHOOK_SECRET) return json({error:'Unauthorized'},401);
  }
  const update=await request.json();
  const post=update.channel_post;
  if(!post) return json({ok:true,ignored:true});
  if(env.TELEGRAM_CHANNEL_ID && String(post.chat?.id)!==String(env.TELEGRAM_CHANNEL_ID)) return json({ok:true,ignored:true});
  const media=extractMedia(post);
  if(!media) return json({ok:true,ignored:true});
  const caption=post.caption||'';
  const lines=caption.split(/\n/).map(x=>x.trim()).filter(Boolean);
  const title=lines[0]||media.file_name||`Telegram #${post.message_id}`;
  const genres=lines.find(x=>/^genre\s*:/i.test(x))?.replace(/^genre\s*:/i,'').split(',').map(x=>x.trim()).filter(Boolean)||[];
  const year=Number((lines.find(x=>/^year\s*:/i.test(x))||'').replace(/^year\s*:/i,''))||new Date(post.date*1000).getFullYear();
  const type=/series|season|episode/i.test(caption)?'series':'movie';
  await env.DB.prepare(`INSERT INTO movies(id,title,year,genres,runtime,rating,description,type,image_url,file_id,file_unique_id,thumb_file_id,file_name,mime_type,file_size,telegram_chat_id,telegram_message_id,created_at)
  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
  ON CONFLICT(id) DO UPDATE SET title=excluded.title,year=excluded.year,genres=excluded.genres,runtime=excluded.runtime,rating=excluded.rating,description=excluded.description,type=excluded.type,image_url=excluded.image_url,file_id=excluded.file_id,thumb_file_id=excluded.thumb_file_id,file_name=excluded.file_name,mime_type=excluded.mime_type,file_size=excluded.file_size`).bind(
    `${post.chat.id}:${post.message_id}`,title,year,JSON.stringify(genres),null,null,lines.slice(1).filter(x=>!/^genre\s*:|^year\s*:/i.test(x)).join(' '),type,null,media.file_id,media.file_unique_id,media.thumb_file_id||null,media.file_name||null,media.mime_type||null,media.file_size||null,String(post.chat.id),post.message_id,post.date
  ).run();
  return json({ok:true,saved:true,id:`${post.chat.id}:${post.message_id}`});
}

function extractMedia(post){
  if(post.video) return post.video;
  if(post.document) return post.document;
  if(post.audio) return post.audio;
  if(post.photo?.length){const p=post.photo[post.photo.length-1];return {...p,mime_type:'image/jpeg'};}
  return null;
}

async function streamTelegramFile(fileId,request,env){
  if(!env.TELEGRAM_BOT_TOKEN) return json({error:'Telegram token is not configured'},503);
  const info=await fetch(`https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/getFile?file_id=${encodeURIComponent(fileId)}`).then(r=>r.json());
  if(!info.ok||!info.result?.file_path) return json({error:'Telegram file unavailable. Bot API download is limited to files up to 20 MB.'},404);
  const headers=new Headers();const range=request.headers.get('Range');if(range)headers.set('Range',range);
  const upstream=await fetch(`https://api.telegram.org/file/bot${env.TELEGRAM_BOT_TOKEN}/${info.result.file_path}`,{headers});
  const out=new Headers(cors);out.set('Content-Type',upstream.headers.get('Content-Type')||'application/octet-stream');out.set('Accept-Ranges','bytes');if(upstream.headers.get('Content-Length'))out.set('Content-Length',upstream.headers.get('Content-Length'));if(upstream.headers.get('Content-Range'))out.set('Content-Range',upstream.headers.get('Content-Range'));return new Response(upstream.body,{status:upstream.status,headers:out});
}