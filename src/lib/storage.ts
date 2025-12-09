import { supabase } from "@/integrations/supabase/client";

const BUCKET_NAME = "site-images";

export const uploadImage = async (
  file: File,
  imageKey: string
): Promise<{ url: string | null; error: string | null }> => {
  try {
    // Get file extension
    const ext = file.name.split(".").pop();
    const fileName = `${imageKey}.${ext}`;

    // Upload to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(fileName, file, {
        upsert: true, // Replace if exists
      });

    if (uploadError) {
      return { url: null, error: uploadError.message };
    }

    // Get public URL
    const { data } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(fileName);

    return { url: data.publicUrl, error: null };
  } catch (err) {
    return { url: null, error: "Error al subir la imagen" };
  }
};

export const getImageUrl = (imageKey: string, extension: string = "png"): string => {
  const { data } = supabase.storage
    .from(BUCKET_NAME)
    .getPublicUrl(`${imageKey}.${extension}`);
  
  return data.publicUrl;
};

export const listImages = async (): Promise<string[]> => {
  const { data, error } = await supabase.storage
    .from(BUCKET_NAME)
    .list();

  if (error || !data) {
    return [];
  }

  return data.map((file) => {
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(file.name);
    return urlData.publicUrl;
  });
};
