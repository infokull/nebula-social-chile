import { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useAdmin } from "@/hooks/useAdmin";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut, Settings } from "lucide-react";
import { AdminLogin } from "./AdminLogin";

export const AdminButton = () => {
  const { user, signOut } = useAuth();
  const { isAdmin } = useAdmin();
  const [showLogin, setShowLogin] = useState(false);

  if (user) {
    return (
      <div className="flex items-center gap-2">
        {isAdmin && (
          <span className="text-xs text-coral font-medium px-2 py-1 bg-coral/10 rounded-full">
            Admin
          </span>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="text-muted-foreground hover:text-foreground"
        >
          <LogOut className="w-4 h-4 mr-1" />
          Salir
        </Button>
      </div>
    );
  }

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setShowLogin(true)}
        className="text-muted-foreground hover:text-foreground"
      >
        <LogIn className="w-4 h-4 mr-1" />
        Admin
      </Button>

      {showLogin && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <AdminLogin onClose={() => setShowLogin(false)} />
        </div>
      )}
    </>
  );
};
