import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import { getContent, setContent } from "@/lib/content";
import { Loader2, Mail, Settings } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "El nombre es muy largo"),
  email: z.string().trim().email("Email inválido").max(255, "El email es muy largo"),
  message: z.string().trim().min(1, "El mensaje es requerido").max(2000, "El mensaje es muy largo"),
});

interface ContactFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
  const { toast } = useToast();
  const { isAdmin } = useAdmin();
  const [isLoading, setIsLoading] = useState(false);
  const [showEmailConfig, setShowEmailConfig] = useState(false);
  const [configuredEmail, setConfiguredEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadConfiguredEmail = async () => {
      const email = await getContent("contact-form-email");
      if (email) {
        setConfiguredEmail(email);
        setNewEmail(email);
      }
    };
    if (open) {
      loadConfiguredEmail();
    }
  }, [open]);

  const handleSaveEmail = async () => {
    if (!newEmail || !z.string().email().safeParse(newEmail).success) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido",
        variant: "destructive",
      });
      return;
    }

    const result = await setContent("contact-form-email", newEmail);
    if (result.success) {
      setConfiguredEmail(newEmail);
      setShowEmailConfig(false);
      toast({
        title: "Email configurado",
        description: "El email de contacto ha sido actualizado",
      });
    } else {
      toast({
        title: "Error",
        description: result.error || "No se pudo guardar el email",
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (!configuredEmail) {
      toast({
        title: "Error de configuración",
        description: "El formulario de contacto no está configurado correctamente",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          toEmail: configuredEmail,
        },
      });

      if (error) throw error;

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      setFormData({ name: "", email: "", message: "" });
      onOpenChange(false);
    } catch (error) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Por favor intenta de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl flex items-center gap-2">
            <Mail className="w-6 h-6" />
            Contáctanos
          </DialogTitle>
          <DialogDescription>
            Completa el formulario y nos pondremos en contacto contigo pronto.
          </DialogDescription>
        </DialogHeader>

        {isAdmin && (
          <div className="mb-4">
            {showEmailConfig ? (
              <div className="flex gap-2 items-end">
                <div className="flex-1">
                  <Label htmlFor="config-email" className="text-sm text-muted-foreground">
                    Email de destino
                  </Label>
                  <Input
                    id="config-email"
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <Button onClick={handleSaveEmail} size="sm">
                  Guardar
                </Button>
                <Button onClick={() => setShowEmailConfig(false)} variant="outline" size="sm">
                  Cancelar
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => setShowEmailConfig(true)}
                variant="outline"
                size="sm"
                className="w-full"
              >
                <Settings className="w-4 h-4 mr-2" />
                Configurar email: {configuredEmail || "No configurado"}
              </Button>
            )}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Tu nombre"
              disabled={isLoading}
            />
            {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="tu@email.com"
              disabled={isLoading}
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="¿En qué podemos ayudarte?"
              rows={4}
              disabled={isLoading}
            />
            {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "Enviar mensaje"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
