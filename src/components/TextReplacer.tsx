import { useState, useEffect, useRef } from "react";
import { useAdmin } from "@/hooks/useAdmin";
import { getContent, setContent } from "@/lib/content";
import { toast } from "sonner";
import { Pencil, Check, X } from "lucide-react";

interface TextReplacerProps {
  contentKey: string;
  defaultValue: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  multiline?: boolean;
}

export const TextReplacer = ({
  contentKey,
  defaultValue,
  as: Tag = "p",
  className = "",
  multiline = false,
}: TextReplacerProps) => {
  const { isAdmin } = useAdmin();
  const [content, setContentState] = useState(defaultValue);
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  useEffect(() => {
    const loadContent = async () => {
      const savedContent = await getContent(contentKey);
      if (savedContent) {
        setContentState(savedContent);
      }
      setIsLoading(false);
    };
    loadContent();
  }, [contentKey]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setEditValue(content);
    setIsEditing(true);
  };

  const handleSave = async () => {
    if (editValue.trim() === content) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);
    const { success, error } = await setContent(contentKey, editValue.trim());
    
    if (success) {
      setContentState(editValue.trim());
      toast.success("Texto actualizado");
    } else {
      toast.error(error || "Error al guardar");
    }
    
    setIsSaving(false);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditValue("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !multiline) {
      e.preventDefault();
      handleSave();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isLoading) {
    return <Tag className={className}>{defaultValue}</Tag>;
  }

  if (!isAdmin) {
    return <Tag className={className}>{content}</Tag>;
  }

  if (isEditing) {
    return (
      <div className="relative inline-flex items-start gap-2 w-full">
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${className} bg-background/80 border border-primary/50 rounded px-2 py-1 w-full resize-none min-h-[100px]`}
            disabled={isSaving}
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className={`${className} bg-background/80 border border-primary/50 rounded px-2 py-1 w-full`}
            disabled={isSaving}
          />
        )}
        <div className="flex gap-1 shrink-0">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="p-1.5 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            <Check className="w-4 h-4" />
          </button>
          <button
            onClick={handleCancel}
            disabled={isSaving}
            className="p-1.5 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative inline">
      <Tag
        className={`${className} cursor-pointer hover:outline hover:outline-2 hover:outline-primary/50 hover:outline-offset-2 rounded transition-all`}
        onClick={handleEdit}
      >
        {content}
        <Pencil className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
      </Tag>
    </div>
  );
};
