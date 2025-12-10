import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { LogIn, LogOut, X } from "lucide-react";

interface AdminLoginProps {
  onClose?: () => void;
}

export const AdminLogin = ({ onClose }: AdminLoginProps) => {
  const { user, signIn, signUp, signOut, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = isSignUp 
      ? await signUp(email, password)
      : await signIn(email, password);

    if (error) {
      toast.error(error.message);
    } else {
      toast.success(isSignUp ? "Cuenta creada. Ya puedes subir imágenes." : "Sesión iniciada");
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
          {isSignUp ? "Crear cuenta de administrador" : "Iniciar sesión"}
        </h3>
        {onClose && (
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          <LogIn className="w-4 h-4 mr-2" />
          {isSubmitting ? "Procesando..." : (isSignUp ? "Crear cuenta" : "Entrar")}
        </Button>
      </form>

      <p className="mt-4 text-xs text-muted-foreground text-center">
        Solo administradores autorizados pueden acceder.
      </p>
    </div>
  );
};
