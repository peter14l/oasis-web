-- SQL to set up the App Versions table in Supabase

-- 1. Create the app_versions table
CREATE TABLE IF NOT EXISTS app_versions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  version TEXT NOT NULL,
  download_url TEXT NOT NULL,
  release_notes TEXT,
  is_required BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'released' CHECK (status IN ('released', 'beta', 'deprecated')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create index for performance
CREATE INDEX IF NOT EXISTS idx_app_versions_status ON app_versions(status);

-- 3. Enable RLS
ALTER TABLE app_versions ENABLE ROW LEVEL SECURITY;

-- 4. Allow public read for update checking
CREATE POLICY "Allow public read app_versions" ON app_versions
  FOR SELECT USING (true);

-- 5. Storage Setup
-- Run these in the Supabase Dashboard or via API to create the bucket
-- Name: versions
-- Public: Yes

-- Policy for public read in 'versions' bucket:
-- CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING ( bucket_id = 'versions' );

-- Filename convention recommendation:
-- oasis-v[version].apk (e.g., oasis-v4.3.1.apk)

-- Sample insert for the current version:
-- INSERT INTO app_versions (version, download_url, release_notes, is_required)
-- VALUES ('4.3.1', 'https://[YOUR_PROJECT_ID].supabase.co/storage/v1/object/public/versions/oasis-v4.3.1.apk', 'Initial public release of Oasis.', false);
