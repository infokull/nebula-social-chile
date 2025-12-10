-- Remove the conflicting "Authenticated users can..." storage policies
-- Keep only the "Only admins can..." policies for proper access control

DROP POLICY IF EXISTS "Authenticated users can upload site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can update site images" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated users can delete site images" ON storage.objects;