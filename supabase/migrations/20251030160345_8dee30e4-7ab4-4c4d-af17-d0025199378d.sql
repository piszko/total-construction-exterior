-- Create storage bucket for project photos
INSERT INTO storage.buckets (id, name, public)
VALUES ('project-photos', 'project-photos', true)
ON CONFLICT (id) DO NOTHING;

-- Create policy to allow anyone to upload photos
CREATE POLICY "Anyone can upload project photos"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'project-photos');

-- Create policy to allow anyone to view photos
CREATE POLICY "Anyone can view project photos"
ON storage.objects
FOR SELECT
USING (bucket_id = 'project-photos');