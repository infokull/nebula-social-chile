-- Create public storage bucket for site images
INSERT INTO storage.buckets (id, name, public)
VALUES ('site-images', 'site-images', true);

-- Allow anyone to view images (public bucket)
CREATE POLICY "Public can view site images"
ON storage.objects
FOR SELECT
USING (bucket_id = 'site-images');

-- Allow authenticated users to upload images
CREATE POLICY "Authenticated users can upload site images"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'site-images' AND auth.role() = 'authenticated');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update site images"
ON storage.objects
FOR UPDATE
USING (bucket_id = 'site-images' AND auth.role() = 'authenticated');

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated users can delete site images"
ON storage.objects
FOR DELETE
USING (bucket_id = 'site-images' AND auth.role() = 'authenticated');