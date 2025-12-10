import { TextReplacer } from "./TextReplacer";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12 md:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary-foreground flex items-center justify-center">
                <span className="text-navy font-bold text-sm">N</span>
              </div>
              <TextReplacer
                contentKey="footer-brand"
                defaultValue="Nebula Social"
                as="span"
                className="font-serif text-xl text-primary-foreground"
              />
            </div>
            <TextReplacer
              contentKey="footer-description"
              defaultValue="Transformando cómo los equipos de marketing y redes sociales trabajan con agentes expertos y motores de conocimiento impulsados por IA."
              as="p"
              className="text-primary-foreground/70 text-sm leading-relaxed max-w-md"
              multiline
            />
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <TextReplacer
            contentKey="footer-copyright"
            defaultValue="© 2025 Nebula Social Chile. Todos los derechos reservados."
            as="p"
            className="text-sm text-primary-foreground/50"
          />
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <Link to="/" className="hover:text-primary-foreground transition-colors">
              <TextReplacer contentKey="footer-link-home" defaultValue="Inicio" as="span" className="text-primary-foreground/50 hover:text-primary-foreground" />
            </Link>
            <Link to="/privacidad" className="hover:text-primary-foreground transition-colors">
              <TextReplacer contentKey="footer-link-privacy" defaultValue="Privacidad" as="span" className="text-primary-foreground/50 hover:text-primary-foreground" />
            </Link>
            <Link to="/terminos" className="hover:text-primary-foreground transition-colors">
              <TextReplacer contentKey="footer-link-terms" defaultValue="Términos" as="span" className="text-primary-foreground/50 hover:text-primary-foreground" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
