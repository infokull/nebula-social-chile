import { ImageReplacer } from "./ImageReplacer";
import { TextReplacer } from "./TextReplacer";

const features = [
  {
    number: "1",
    titleKey: "feature-1-title",
    titleDefault: "Enfoque de Red Primero",
    descKey: "feature-1-desc",
    descDefault: "Nebula Social crea una red curada compuesta por los influencers, creadores, sonidos, hashtags y links que más importan.",
    bgColor: "bg-[hsl(270,60%,95%)]", // lavender
  },
  {
    number: "2",
    titleKey: "feature-2-title",
    titleDefault: "Tecnología de Visión de Video",
    descKey: "feature-2-desc",
    descDefault: "Analiza y entiende videos, imágenes, descripciones y comentarios para descubrir tonos emocionales y tendencias visuales, prediciendo no solo qué se volverá viral, sino por qué resuena en plataformas como TikTok e Instagram.",
    bgColor: "bg-[hsl(25,80%,93%)]", // peach
  },
  {
    number: "3",
    titleKey: "feature-3-title",
    titleDefault: "Insights Basados en Narrativas",
    descKey: "feature-3-desc",
    descDefault: "Obtén insights precisos y análisis de tendencias sobre opiniones de audiencias e influencers y por qué importa para tu marca, productos y campañas.",
    bgColor: "bg-[hsl(200,70%,92%)]", // light blue
  },
  {
    number: "4",
    titleKey: "feature-4-title",
    titleDefault: "Kepler - El Agente Experto Personalizado de Redes Sociales",
    descKey: "feature-4-desc",
    descDefault: "Explora insights y descubre nuevas ideas con un agente experto en redes sociales basado en personas. Kepler proporciona insights cualitativos y cuantitativos en lenguaje natural. Porque Kepler tiene memoria a largo plazo, se vuelve más inteligente con el tiempo incorporando lo que aprende.",
    bgColor: "bg-[hsl(150,50%,92%)]", // mint green
  },
];

export const FeaturesListSection = () => {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="section-container">
        <TextReplacer
          contentKey="features-title"
          defaultValue="Diseñado para Trabajo de Conocimiento, Construido para Redes Sociales"
          as="h2"
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12 md:mb-16"
        />

        <div className="space-y-6">
          {features.map((feature) => (
            <div
              key={feature.number}
              className={`grid md:grid-cols-12 gap-6 md:gap-8 items-center p-6 md:p-8 rounded-2xl ${feature.bgColor}`}
            >
              {/* Number */}
              <div className="md:col-span-1">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-navy text-primary-foreground font-bold text-lg">
                  {feature.number}
                </span>
              </div>

              {/* Content */}
              <div className="md:col-span-5">
                <TextReplacer
                  contentKey={feature.titleKey}
                  defaultValue={feature.titleDefault}
                  as="h3"
                  className="font-serif text-xl md:text-2xl text-foreground mb-2"
                />
                <TextReplacer
                  contentKey={feature.descKey}
                  defaultValue={feature.descDefault}
                  as="p"
                  className="text-muted-foreground leading-relaxed"
                  multiline
                />
              </div>

              {/* Image placeholder */}
              <div className="md:col-span-6">
                <ImageReplacer
                  imageKey={`feature-${feature.number}`}
                  className="border border-border rounded-xl overflow-hidden shadow-lg"
                  aspectRatio="auto"
                  defaultContent={
                    <div className="w-full aspect-video bg-gradient-to-br from-navy to-navy/80 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{feature.number}</span>
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
