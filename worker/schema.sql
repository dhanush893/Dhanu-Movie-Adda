CREATE TABLE IF NOT EXISTS movies (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  year INTEGER,
  genres TEXT,
  runtime TEXT,
  rating REAL,
  description TEXT,
  type TEXT DEFAULT 'movie',
  image_url TEXT,
  file_id TEXT,
  file_unique_id TEXT,
  thumb_file_id TEXT,
  file_name TEXT,
  mime_type TEXT,
  file_size INTEGER,
  telegram_chat_id TEXT,
  telegram_message_id INTEGER,
  created_at INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS idx_movies_created ON movies(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_movies_type ON movies(type);
CREATE INDEX IF NOT EXISTS idx_movies_title ON movies(title);
