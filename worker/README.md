# Dhanu Movies Telegram backend

This backend is designed for a **private Telegram channel that you control**. A Telegram bot must be an administrator of that channel so it can receive `channel_post` updates.

## Architecture

Private Telegram channel → Telegram Bot webhook → Cloudflare Worker → D1 catalog → Dhanu Movies frontend

The bot token is never sent to the browser.

## Free-tier deployment

Cloudflare Workers and D1 have free tiers suitable for an initial catalog/API. Current Workers Free limits include 100,000 requests/day; D1 Free includes 5 million rows read/day, 100,000 rows written/day and 5 GB total storage. Limits can change, so check Cloudflare before production use.

### 1. Create the D1 database

```bash
npx wrangler d1 create dhanu-movies
```

Copy the returned `database_id` into `worker/wrangler.toml`.

### 2. Create the schema

```bash
npx wrangler d1 execute dhanu-movies --remote --file=worker/schema.sql
```

### 3. Add secrets

Do NOT put these in GitHub:

```bash
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put WEBHOOK_SECRET
```

`WEBHOOK_SECRET` can be any long random string.

Set `TELEGRAM_CHANNEL_ID` in `wrangler.toml` to the numeric ID of your private channel (usually starts with `-100`).

### 4. Deploy

From the repository root:

```bash
cd worker
npx wrangler deploy
```

You will receive a Worker URL such as `https://dhanu-movies-api.<account>.workers.dev`.

### 5. Register the Telegram webhook

Replace the placeholders locally; never commit the token:

```bash
curl -X POST "https://api.telegram.org/bot<TOKEN>/setWebhook" \
  -d "url=https://YOUR-WORKER.workers.dev/telegram/webhook" \
  -d "secret_token=YOUR_WEBHOOK_SECRET"
```

The bot must be an administrator in the private channel.

### 6. Connect the frontend

The static frontend can remain on GitHub Pages. After the Worker is deployed, open the site and run once in the browser console:

```js
localStorage.setItem('dhanu_api_base','https://YOUR-WORKER.workers.dev');
location.reload();
```

The frontend then reads `/api/movies` from the Worker and requests media through `/media/<file_id>` so the bot token remains server-side.

## Telegram post format

A simple caption can be:

```text
Movie Title
A short description of the movie.
Genre: Action, Thriller
Year: 2026
```

The first line becomes the title. `Genre:` and `Year:` are parsed automatically. The file can be a video or document; photos can also be indexed.

## Important Telegram media limit

The standard Telegram Bot API currently allows bots to download files with `getFile` only up to 20 MB. This Worker therefore works best for metadata plus smaller authorized media. For larger movies, keep the catalog metadata in Telegram/D1 but use authorized object storage/CDN for actual video delivery, or run a suitable Telegram Bot API server.

## No login

This project intentionally has no user login in the current version. Watchlist state is stored locally in the visitor's browser. Server-side accounts can be added later if needed.
