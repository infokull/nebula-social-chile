-- Ensure the bucket is truly public (some storage setups require this)
UPDATE storage.buckets SET public = true WHERE id = 'site-images';

-- Recreate the public read policy to ensure it's permissive (not restrictive)
DROP POLICY IF EXISTS "Public can view site images" ON storage.objects;

CREATE POLICY "Public can view site images"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'site-images');