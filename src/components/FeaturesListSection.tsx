import { ImageReplacer } from "./ImageReplacer";

const features = [
  {
    number: "1",
    title: "Enfoque de Red Primero",
    description: "Nebula Social crea una red curada compuesta por los influencers, creadores, sonidos, hashtags y links que más importan.",
  },
  {
    number: "2",
    title: "Tecnología de Visión de Video",
    description: "Analiza y entiende videos, imágenes, descripciones y comentarios para descubrir tonos emocionales y tendencias visuales, prediciendo no solo qué se volverá viral, sino por qué resuena en plataformas como TikTok e Instagram.",
  },
  {
    number: "3",
    title: "Insights Basados en Narrativas",
    description: "Obtén insights precisos y análisis de tendencias sobre opiniones de audiencias e influencers y por qué importa para tu marca, productos y campañas.",
  },
  {
    number: "4",
    title: "Kepler - El Agente Experto Personalizado de Redes Sociales",
    description: "Explora insights y descubre nuevas ideas con un agente experto en redes sociales basado en personas. Kepler proporciona insights cualitativos y cuantitativos en lenguaje natural. Porque Kepler tiene memoria a largo plazo, se vuelve más inteligente con el tiempo incorporando lo que aprende.",
  },
];

export const FeaturesListSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12 md:mb-16">
          Diseñado para Trabajo de Conocimiento,<br />
          Construido para Redes Sociales
        </h2>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={feature.number}
              className="grid md:grid-cols-12 gap-6 md:gap-8 items-start"
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-primary-foreground font-bold text-lg">
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-5">
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image placeholder */}
              <div className="md:col-span-6">
                <ImageReplacer
                  imageKey={`feature-${feature.number}`}
                  className="border border-border"
                  defaultContent={
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-navy/5 rounded-lg border border-border/50 flex items-center justify-center">
                        <div className="text-center p-4">
                          <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-purple/20 to-coral/20 flex items-center justify-center">
                            <span className="text-2xl font-bold gradient-text">{feature.number}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
