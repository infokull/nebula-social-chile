import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { LogIn, LogOut, X } from "lucide-react";
import { z } from "zod";

// Schema validation for login form
const loginSchema = z.object({
  email: z.string().trim().email({ message: "Email inválido" }).max(255, { message: "Email muy largo" }),
  password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }).max(128, { message: "Contraseña muy larga" })
});

interface AdminLoginProps {
  onClose?: () => void;
}

export const AdminLogin = ({ onClose }: AdminLoginProps) => {
  const { user, signIn, signOut, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    
    // Validate with zod schema
    const result = loginSchema.safeParse({ email, password });
    if (!result.success) {
      const fieldErrors: { email?: string; password?: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as 'email' | 'password';
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    const { error } = await signIn(result.data.email, result.data.password);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Sesión iniciada");
      onClose?.();
    }

    setIsSubmitting(false);
  };

  if (loading) {
    return <div className="p-4 text-center text-muted-foreground">Cargando...</div>;
  }

  if (user) {
    return (
      <div className="p-4 bg-card rounded-lg border border-border">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            Conectado como: <strong>{user.email}</strong>
          </span>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="w-4 h-4 mr-2" />
            Cerrar sesión
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-card rounded-lg border border-border max-w-sm mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">
          Acceso Administrador
        </h3>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={errors.email ? "border-destructive" : ""}
          />
          {errors.email && (
            <p className="text-xs text-destructive mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={errors.password ? "border-destructive" : ""}
          />
          {errors.password && (
            <p className="text-xs text-destructive mt-1">{errors.password}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          <LogIn className="w-4 h-4 mr-2" />
          {isSubmitting ? "Procesando..." : "Entrar"}
        </Button>
      </form>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        Solo administradores autorizados pueden acceder.
      </p>
    </div>
  );
};
