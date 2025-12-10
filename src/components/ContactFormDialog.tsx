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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useAdmin } from "@/hooks/useAdmin";
import { getContent, setContent } from "@/lib/content";
import { Loader2, Settings } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "El nombre es requerido").max(100),
  lastName: z.string().trim().min(1, "El apellido es requerido").max(100),
  email: z.string().trim().email("Email inválido").max(255),
  phone: z.string().optional(),
  companyUrl: z.string().trim().min(1, "La página de empresa es requerida").max(500),
  jobTitle: z.string().trim().min(1, "El cargo es requerido").max(100),
  industry: z.string().optional(),
  solution: z.string().min(1, "Selecciona una solución"),
  linkedinUrl: z.string().optional(),
  hearAboutUs: z.string().optional(),
  message: z.string().trim().max(2000).optional(),
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
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyUrl: "",
    jobTitle: "",
    industry: "",
    solution: "",
    linkedinUrl: "",
    hearAboutUs: "",
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
      const messageBody = `
Nombre: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Teléfono: ${formData.phone || "No proporcionado"}
Página de empresa: ${formData.companyUrl}
Cargo: ${formData.jobTitle}
Industria: ${formData.industry || "No especificada"}
Solución de interés: ${formData.solution}
LinkedIn: ${formData.linkedinUrl || "No proporcionado"}
Cómo nos conoció: ${formData.hearAboutUs || "No especificado"}

Mensaje:
${formData.message || "Sin mensaje adicional"}
      `.trim();

      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          message: messageBody,
          toEmail: configuredEmail,
        },
      });

      if (error) throw error;

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyUrl: "",
        jobTitle: "",
        industry: "",
        solution: "",
        linkedinUrl: "",
        hearAboutUs: "",
        message: "",
      });
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
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-background via-background to-purple/5">
        <DialogHeader className="text-center pb-2">
          <DialogTitle className="font-serif text-3xl md:text-4xl text-navy italic">
            conectemos
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            Cuéntanos cómo podemos ayudarte. Nuestro equipo se pondrá en contacto contigo para agendar una llamada de descubrimiento en menos de 24 horas.
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
          {/* Row 1: First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName" className="text-sm text-navy">
                Nombre <span className="text-coral">*</span>
              </Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                placeholder="Tu nombre"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
              {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <Label htmlFor="lastName" className="text-sm text-navy">
                Apellido <span className="text-coral">*</span>
              </Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                placeholder="Tu apellido"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
              {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email" className="text-sm text-navy">
                Email <span className="text-coral">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm text-navy">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+56 9 1234 5678"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
            </div>
          </div>

          {/* Row 3: Company & Job Title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="companyUrl" className="text-sm text-navy">
                Página de empresa <span className="text-coral">*</span>
              </Label>
              <Input
                id="companyUrl"
                value={formData.companyUrl}
                onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                placeholder="https://tuempresa.com"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
              {errors.companyUrl && <p className="text-sm text-destructive mt-1">{errors.companyUrl}</p>}
            </div>
            <div>
              <Label htmlFor="jobTitle" className="text-sm text-navy">
                Cargo <span className="text-coral">*</span>
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobTitle}
                onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                placeholder="Tu cargo"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
              {errors.jobTitle && <p className="text-sm text-destructive mt-1">{errors.jobTitle}</p>}
            </div>
          </div>

          {/* Row 4: Industry & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="industry" className="text-sm text-navy">
                Industria
              </Label>
              <Input
                id="industry"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                placeholder="Tu industria"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
            </div>
            <div>
              <Label htmlFor="solution" className="text-sm text-navy">
                Solución de interés <span className="text-coral">*</span>
              </Label>
              <Select
                value={formData.solution}
                onValueChange={(value) => setFormData({ ...formData, solution: value })}
                disabled={isLoading}
              >
                <SelectTrigger className="mt-1 border-border/50 focus:border-purple">
                  <SelectValue placeholder="Selecciona una..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nebula-social">Nebula Social</SelectItem>
                  <SelectItem value="marketing-ia">Marketing IA</SelectItem>
                  <SelectItem value="analisis-redes">Análisis de Redes Sociales</SelectItem>
                  <SelectItem value="insights">Consumer Insights</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
              {errors.solution && <p className="text-sm text-destructive mt-1">{errors.solution}</p>}
            </div>
          </div>

          {/* Row 5: LinkedIn & How did you hear */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedinUrl" className="text-sm text-navy">
                URL de LinkedIn
              </Label>
              <Input
                id="linkedinUrl"
                value={formData.linkedinUrl}
                onChange={(e) => setFormData({ ...formData, linkedinUrl: e.target.value })}
                placeholder="https://linkedin.com/in/tu-perfil"
                disabled={isLoading}
                className="mt-1 border-border/50 focus:border-purple"
              />
            </div>
            <div>
              <Label htmlFor="hearAboutUs" className="text-sm text-navy">
                ¿Cómo nos conociste?
              </Label>
              <Select
                value={formData.hearAboutUs}
                onValueChange={(value) => setFormData({ ...formData, hearAboutUs: value })}
                disabled={isLoading}
              >
                <SelectTrigger className="mt-1 border-border/50 focus:border-purple">
                  <SelectValue placeholder="Selecciona una..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="google">Google</SelectItem>
                  <SelectItem value="linkedin">LinkedIn</SelectItem>
                  <SelectItem value="referido">Referido</SelectItem>
                  <SelectItem value="redes-sociales">Redes Sociales</SelectItem>
                  <SelectItem value="evento">Evento</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-sm text-navy">
              Mensaje
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Haznos una pregunta. Cuéntanos cómo podemos ayudarte. O simplemente saluda."
              rows={4}
              disabled={isLoading}
              className="mt-1 border-border/50 focus:border-purple resize-none"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-navy via-purple to-coral hover:opacity-90 text-white py-6 text-base font-medium" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Enviando...
              </>
            ) : (
              "ENVIAR"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
