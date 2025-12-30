-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ
);

-- Create index on created_at for faster sorting
CREATE INDEX IF NOT EXISTS idx_posts_created_at ON posts(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to read posts (anonymous blog)
CREATE POLICY "Allow public read access" ON posts
  FOR SELECT
  USING (true);

-- Create policy to allow anyone to insert posts (anonymous blog)
CREATE POLICY "Allow public insert access" ON posts
  FOR INSERT
  WITH CHECK (true);

-- Create policy to allow anyone to update posts (anonymous blog)
CREATE POLICY "Allow public update access" ON posts
  FOR UPDATE
  USING (true);

-- Create policy to allow anyone to delete posts (anonymous blog)
CREATE POLICY "Allow public delete access" ON posts
  FOR DELETE
  USING (true);
