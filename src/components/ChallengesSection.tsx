import { Database, Puzzle, Zap } from "lucide-react";
import { ImageReplacer } from "./ImageReplacer";
import { TextReplacer } from "./TextReplacer";

const challenges = [
  {
    icon: Database,
    titleKey: "challenge-1-title",
    titleDefault: "Sobrecarga de Datos",
    statKey: "challenge-1-stat",
    statDefault: "74%",
    descKey: "challenge-1-desc",
    descDefault: "de los empleados reportan sentirse abrumados por la cantidad de datos que manejan.",
  },
  {
    icon: Puzzle,
    titleKey: "challenge-2-title",
    titleDefault: "Complejidad de Plataformas",
    statKey: "challenge-2-stat",
    statDefault: "8 de 10",
    descKey: "challenge-2-desc",
    descDefault: "marketers dicen que la complejidad de las plataformas de redes sociales es su desafío #1 debido a cambios de algoritmos, comportamiento de usuarios, moderación de contenido y cumplimiento regulatorio.",
  },
  {
    icon: Zap,
    titleKey: "challenge-3-title",
    titleDefault: "Cambios Rápidos del Mercado",
    statKey: "challenge-3-stat",
    statDefault: "90%",
    descKey: "challenge-3-desc",
    descDefault: "de las empresas admiten que les cuesta mantenerse al día con los mercados cambiantes.",
  },
];

export const ChallengesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <TextReplacer
          contentKey="challenges-title-1"
          defaultValue="El Trabajo de Conocimiento es Difícil,"
          as="h2"
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4"
        />
        <TextReplacer
          contentKey="challenges-title-2"
          defaultValue="Entender las Redes Sociales es Más Difícil"
          as="h3"
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12 md:mb-16"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.titleKey}
              className="bg-card rounded-2xl overflow-hidden border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Imagen grande arriba */}
              <div className="w-full aspect-[4/3] bg-muted overflow-hidden">
                <ImageReplacer
                  imageKey={`challenge-${index + 1}`}
                  aspectRatio="auto"
                  className="w-full h-full rounded-none"
                  defaultContent={
                    <div className="w-full h-full bg-gradient-to-br from-muted to-muted/70 flex items-center justify-center">
                      <challenge.icon className="w-16 h-16 text-muted-foreground/40" />
                    </div>
                  }
                />
              </div>
              
              {/* Contenido debajo */}
              <div className="p-6 md:p-8">
                <TextReplacer
                  contentKey={challenge.titleKey}
                  defaultValue={challenge.titleDefault}
                  as="h4"
                  className="font-serif text-xl text-foreground mb-3"
                />
                
                <p className="text-muted-foreground leading-relaxed">
                  <TextReplacer
                    contentKey={challenge.statKey}
                    defaultValue={challenge.statDefault}
                    as="span"
                    className="font-semibold text-foreground"
                  />{" "}
                  <TextReplacer
                    contentKey={challenge.descKey}
                    defaultValue={challenge.descDefault}
                    as="span"
                    className="text-muted-foreground"
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
