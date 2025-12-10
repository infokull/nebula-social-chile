import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextReplacer } from "@/components/TextReplacer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <TextReplacer
              contentKey="privacy-title"
              defaultValue="Política de Privacidad"
              as="h1"
              className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            />
            
            <TextReplacer
              contentKey="privacy-updated"
              defaultValue="Última actualización: 08/05/24"
              as="p"
              className="text-muted-foreground italic mb-8"
            />

            <TextReplacer
              contentKey="privacy-intro"
              defaultValue="Nebula Social Chile ('nosotros', 'nos' o 'nuestro') opera el sitio web nebulasocial.cl (el 'Sitio Web') y proporciona Nebula Social™, entre otras (las 'Soluciones').

Esta Política de Privacidad describe nuestras políticas sobre la recopilación, uso y divulgación de información cuando utiliza nuestro Sitio Web y Soluciones, y le informa sobre sus derechos de privacidad y cómo la ley lo protege."
              as="p"
              className="text-muted-foreground whitespace-pre-line mb-8"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-1-title"
              defaultValue="1. Recopilación y Uso de Información"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-1-content"
              defaultValue="No recopilamos ninguna información personal sobre usted como visitante de nuestro Sitio Web o cuando utiliza nuestras Soluciones."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-2-title"
              defaultValue="2. Datos de Registro del Sitio Web"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-2-content"
              defaultValue="Cuando visita nuestro Sitio Web, nuestros servidores pueden registrar automáticamente los datos estándar proporcionados por su navegador web. Esto puede incluir la dirección de Protocolo de Internet (IP) de su dispositivo, el tipo y versión de su navegador, las páginas que visita en nuestro Sitio Web, la hora y fecha de su visita, el tiempo dedicado a esas páginas y otros datos de diagnóstico. Esta información se utiliza únicamente para mantener la seguridad y operación de nuestro Sitio Web y para nuestros propósitos internos de análisis e informes."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-3-title"
              defaultValue="3. Cookies"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-3-content"
              defaultValue="Nuestro Sitio Web no utiliza cookies para rastrear la actividad en nuestro Sitio Web ni para almacenar información personal.

Debido a que no recopilamos información personal, no hay usos de dichos datos en nuestras operaciones. Recopilamos información no identificable solo para mantener la seguridad y efectividad de nuestro Sitio Web y Soluciones."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-4-title"
              defaultValue="4. Seguridad de los Datos"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-4-content"
              defaultValue="La seguridad de sus datos es importante para nosotros, pero tenga en cuenta que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables para proteger cualquier dato que recopilemos, no podemos garantizar su seguridad absoluta."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-5-title"
              defaultValue="5. Proveedores de Servicios"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-5-content"
              defaultValue="Podemos emplear empresas e individuos de terceros para facilitar nuestro Sitio Web ('Proveedores de Servicios'), para proporcionar el Sitio Web en nuestro nombre, o para ayudarnos a analizar cómo se utiliza nuestro Sitio Web. Estos terceros tienen acceso a sus Datos de Registro solo para realizar estas tareas en nuestro nombre y están obligados a no divulgarlos ni utilizarlos para ningún otro propósito."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-6-title"
              defaultValue="6. Enlaces a Otros Sitios"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-6-content"
              defaultValue="Nuestro Sitio Web puede contener enlaces a otros sitios que no son operados por nosotros. Si hace clic en un enlace de terceros, será dirigido al sitio de ese tercero. Le recomendamos encarecidamente que revise la Política de Privacidad de cada sitio que visite.

No tenemos control ni asumimos responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios o servicios de terceros."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-section-7-title"
              defaultValue="7. Cambios a Esta Política de Privacidad"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-section-7-content"
              defaultValue="Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.

Le informaremos por correo electrónico y/o mediante un aviso destacado en nuestro Sitio Web, antes de que el cambio entre en vigencia y actualizaremos la 'fecha de vigencia' en la parte superior de esta Política de Privacidad.

Se le recomienda revisar esta Política de Privacidad periódicamente para ver cualquier cambio. Los cambios a esta Política de Privacidad son efectivos cuando se publican en esta página."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="privacy-contact-title"
              defaultValue="Contáctenos"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="privacy-contact-content"
              defaultValue="Si tiene alguna pregunta sobre esta Política de Privacidad, puede contactarnos:

• Por email: soporte@kull.cl
• Visitando nuestra página de contacto en el sitio web"
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
