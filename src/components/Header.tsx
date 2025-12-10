import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { AdminButton } from "./AdminButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-serif text-xl text-foreground">Nebula Social</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Características
            </a>
            <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Soluciones
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Nosotros
            </a>
            <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
          </nav>

          {/* CTA Button & Admin */}
          <div className="hidden md:flex items-center gap-4">
            <AdminButton />
            <Button variant="navy" size="default">
              Contáctanos
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
                Características
              </a>
              <a href="#solutions" className="text-sm text-muted-foreground hover:text-foreground">
                Soluciones
              </a>
              <a href="#about" className="text-sm text-muted-foreground hover:text-foreground">
                Nosotros
              </a>
              <a href="#blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </a>
              <div className="pt-2 border-t border-border mt-2">
                <AdminButton />
              </div>
              <Button variant="navy" size="default" className="w-full mt-2">
                Contáctanos
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
