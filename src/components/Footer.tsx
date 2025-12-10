import { TextReplacer } from "./TextReplacer";

export const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground py-12 md:py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
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

          {/* Links */}
          <div>
            <TextReplacer
              contentKey="footer-product-title"
              defaultValue="Producto"
              as="h4"
              className="font-semibold mb-4 text-primary-foreground"
            />
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-features" defaultValue="Características" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-solutions" defaultValue="Soluciones" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-pricing" defaultValue="Precios" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-demo" defaultValue="Demo" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
            </ul>
          </div>

          <div>
            <TextReplacer
              contentKey="footer-company-title"
              defaultValue="Empresa"
              as="h4"
              className="font-semibold mb-4 text-primary-foreground"
            />
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-about" defaultValue="Nosotros" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-blog" defaultValue="Blog" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-careers" defaultValue="Carreras" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">
                <TextReplacer contentKey="footer-link-contact" defaultValue="Contacto" as="span" className="text-primary-foreground/70 hover:text-primary-foreground" />
              </a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <TextReplacer
            contentKey="footer-copyright"
            defaultValue="© 2024 Nebula Social Chile. Todos los derechos reservados."
            as="p"
            className="text-sm text-primary-foreground/50"
          />
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              <TextReplacer contentKey="footer-link-privacy" defaultValue="Privacidad" as="span" className="text-primary-foreground/50 hover:text-primary-foreground" />
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              <TextReplacer contentKey="footer-link-terms" defaultValue="Términos" as="span" className="text-primary-foreground/50 hover:text-primary-foreground" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
