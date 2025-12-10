import { supabase } from "@/integrations/supabase/client";

export const getContent = async (key: string): Promise<string | null> => {
  const { data, error } = await supabase
    .from("site_content")
    .select("content_value")
    .eq("content_key", key)
    .maybeSingle();

  if (error || !data) {
    return null;
  }

  return data.content_value;
};

export const setContent = async (
  key: string,
  value: string
): Promise<{ success: boolean; error: string | null }> => {
  const { error } = await supabase
    .from("site_content")
    .upsert(
      { content_key: key, content_value: value },
      { onConflict: "content_key" }
    );

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true, error: null };
};

export const getAllContent = async (): Promise<Record<string, string>> => {
  const { data, error } = await supabase
    .from("site_content")
    .select("content_key, content_value");

  if (error || !data) {
    return {};
  }

  return data.reduce((acc, item) => {
    acc[item.content_key] = item.content_value;
    return acc;
  }, {} as Record<string, string>);
};
