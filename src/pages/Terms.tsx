import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TextReplacer } from "@/components/TextReplacer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="section-container">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <TextReplacer
              contentKey="terms-title"
              defaultValue="Términos de Uso"
              as="h1"
              className="font-serif text-4xl md:text-5xl text-foreground mb-4"
            />
            
            <TextReplacer
              contentKey="terms-updated"
              defaultValue="Última modificación: 20/10/21"
              as="p"
              className="text-muted-foreground italic mb-8"
            />

            <TextReplacer
              contentKey="terms-section-1-title"
              defaultValue="Aceptación de los Términos de Uso"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-1-content"
              defaultValue="Estos términos de uso se establecen entre Usted y Nebula Social Chile ('Empresa', 'nosotros' o 'nos'). Los siguientes términos y condiciones, junto con cualquier documento que incorporen expresamente por referencia (colectivamente, estos 'Términos de Uso'), rigen su acceso y uso de nuestro sitio web en nebulasocial.cl, incluido cualquier contenido, funcionalidad y servicios ofrecidos en o a través del mismo, ya sea como invitado o usuario registrado.

Estos Términos de Uso serán efectivos a partir de la fecha en que cree su cuenta con nosotros. POR FAVOR LEA LOS TÉRMINOS DE USO CUIDADOSAMENTE. AL USAR EL SITIO WEB, USTED ACEPTA ESTAR OBLIGADO Y CUMPLIR CON LOS TÉRMINOS ESTABLECIDOS AQUÍ Y NUESTRA POLÍTICA DE PRIVACIDAD. SI NO DESEA ESTAR OBLIGADO POR LOS TÉRMINOS DE USO O LA POLÍTICA DE PRIVACIDAD, NO PUEDE USAR EL SITIO WEB."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-2-title"
              defaultValue="Su Relación con Nebula Social"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-2-content"
              defaultValue="AL USAR EL SITIO WEB, Y AL ACEPTAR ESTOS TÉRMINOS DE USO, USTED ACEPTA Y RECONOCE QUE usted y la Empresa están en una relación comercial directa, y la relación entre las partes bajo estos Términos de Uso es únicamente la de partes contratantes independientes. Usted y la Empresa acuerdan expresamente que (1) este no es un acuerdo de empleo y no crea una relación laboral entre usted y la Empresa; y (2) no se pretende ni se crea ninguna empresa conjunta, relación franquiciador-franquiciado, sociedad o relación de agencia por estos Términos de Uso."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-3-title"
              defaultValue="Usuarios Mayores de 18 Años"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-3-content"
              defaultValue="Al usar el Sitio Web, usted declara y garantiza que es mayor de edad legal para formar un contrato vinculante con la Empresa y cumple con todos los requisitos de elegibilidad anteriores. Nuestros Servicios no están destinados a nadie menor de 18 años. Nadie menor de 18 años puede proporcionar información personal a través de nuestros Servicios. No recopilamos a sabiendas información personal de niños menores de 18 años."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-4-title"
              defaultValue="Cambios a los Términos de Uso"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-4-content"
              defaultValue="Podemos revisar y actualizar estos Términos de Uso de vez en cuando a nuestra sola discreción y sin previo aviso, excepto que le notificaremos de cualquier cambio material en los Términos de Uso. Todos los cambios son efectivos inmediatamente cuando los publicamos.

Su uso continuado del Sitio Web después de la publicación de los Términos de Uso revisados significa que acepta y está de acuerdo con los cambios. Se espera que revise esta página de vez en cuando para estar al tanto de cualquier cambio, ya que son vinculantes para usted."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-5-title"
              defaultValue="Acceso al Sitio Web y Seguridad de la Cuenta"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-5-content"
              defaultValue="Nos reservamos el derecho de retirar o modificar el Sitio Web, y cualquier servicio o material que proporcionemos en el Sitio Web, a nuestra sola discreción sin previo aviso. No seremos responsables si por alguna razón todo o parte del Sitio Web no está disponible en cualquier momento o por cualquier período.

Usted es responsable de: (i) hacer todos los arreglos necesarios para tener acceso al Sitio Web; y (ii) asegurar que todas las personas que accedan al Sitio Web a través de su conexión a Internet estén al tanto de estos Términos de Uso y los cumplan."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-6-title"
              defaultValue="Derechos de Propiedad Intelectual"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-6-content"
              defaultValue="El Sitio Web y todo su contenido, características y funcionalidad (incluyendo, entre otros, toda la información, software, texto, displays, imágenes, video y audio, y el diseño, selección y arreglo de los mismos), son propiedad de la Empresa, sus licenciantes u otros proveedores de dicho material y están protegidos por las leyes de derechos de autor, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad de Chile e internacionales.

Estos Términos de Uso le permiten usar el Sitio Web solo para su uso individual y no comercial. No debe reproducir, distribuir, modificar, crear trabajos derivados, exhibir públicamente, ejecutar públicamente, republicar, descargar, almacenar o transmitir ninguno de los materiales en nuestro Sitio Web."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-7-title"
              defaultValue="Usos Prohibidos"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-7-content"
              defaultValue="Solo puede usar el Sitio Web para fines lícitos y de acuerdo con estos Términos de Uso. Acepta no usar el Sitio Web:

• De cualquier manera que viole cualquier ley o regulación federal, estatal, local o internacional aplicable.
• Con el propósito de explotar, dañar o intentar explotar o dañar a terceros de cualquier manera.
• Para transmitir, o procurar el envío de, cualquier material publicitario o promocional sin nuestro consentimiento previo por escrito.
• Para hacerse pasar o intentar hacerse pasar por la Empresa, un empleado de la Empresa, otro usuario o cualquier otra persona o entidad.
• Para participar en cualquier otra conducta que restrinja o inhiba el uso o disfrute del Sitio Web por cualquier persona."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-8-title"
              defaultValue="Descargo de Garantías"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-8-content"
              defaultValue="SU USO DEL SITIO WEB, SU CONTENIDO Y CUALQUIER SERVICIO O ARTÍCULO OBTENIDO A TRAVÉS DEL SITIO WEB ES BAJO SU PROPIO RIESGO. EL SITIO WEB, SU CONTENIDO Y CUALQUIER SERVICIO O ARTÍCULO OBTENIDO A TRAVÉS DEL SITIO WEB SE PROPORCIONAN 'TAL CUAL' Y 'SEGÚN DISPONIBILIDAD', SIN GARANTÍAS DE NINGÚN TIPO, YA SEAN EXPRESAS O IMPLÍCITAS.

LA EMPRESA POR LA PRESENTE RENUNCIA A TODAS LAS GARANTÍAS DE CUALQUIER TIPO, YA SEAN EXPRESAS O IMPLÍCITAS, ESTATUTARIAS O DE OTRO TIPO, INCLUYENDO PERO NO LIMITADO A CUALQUIER GARANTÍA DE COMERCIABILIDAD, NO INFRACCIÓN Y APTITUD PARA UN PROPÓSITO PARTICULAR."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-9-title"
              defaultValue="Limitación de Responsabilidad"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-9-content"
              defaultValue="EN LA MÁXIMA MEDIDA PERMITIDA POR LA LEY, LA EMPRESA Y NUESTROS ACCIONISTAS, EMPLEADOS, AFILIADOS, LICENCIANTES, AGENTES Y PROVEEDORES NO SERÁN RESPONSABLES DE NINGÚN DAÑO INDIRECTO, INCIDENTAL, ESPECIAL, CONSECUENTE, PUNITIVO O MÚLTIPLE, O CUALQUIER PÉRDIDA DE GANANCIAS O INGRESOS, YA SEA INCURRIDA DIRECTA O INDIRECTAMENTE, O CUALQUIER PÉRDIDA DE DATOS, USO, BUENA VOLUNTAD U OTRAS PÉRDIDAS INTANGIBLES."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-section-10-title"
              defaultValue="Ley Aplicable y Jurisdicción"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-section-10-content"
              defaultValue="Todos los asuntos relacionados con el Sitio Web y estos Términos de Uso y cualquier disputa o reclamo que surja de ellos o esté relacionado con ellos, se regirán e interpretarán de acuerdo con las leyes internas de la República de Chile.

Cualquier demanda, acción o procedimiento legal que surja de, o esté relacionado con, estos Términos de Uso o el Sitio Web se instituirá exclusivamente en los tribunales competentes de Santiago de Chile."
              as="p"
              className="text-muted-foreground mb-6"
              multiline
            />

            <TextReplacer
              contentKey="terms-contact-title"
              defaultValue="Sus Comentarios e Inquietudes"
              as="h2"
              className="font-serif text-2xl text-foreground mt-8 mb-4"
            />
            <TextReplacer
              contentKey="terms-contact-content"
              defaultValue="El Sitio Web es operado por Nebula Social Chile. Los comentarios, solicitudes de soporte técnico y otras comunicaciones relacionadas con el Sitio Web deben dirigirse a:

• Email: soporte@kull.cl"
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

export default Terms;
