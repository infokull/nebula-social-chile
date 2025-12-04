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
              <span className="font-serif text-xl">Nebula Social</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md">
              Transformando cómo los equipos de marketing y redes sociales trabajan con agentes expertos y motores de conocimiento impulsados por IA.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Características</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Soluciones</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Nosotros</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Carreras</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © 2024 Nebula Social Chile. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/50">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacidad</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
