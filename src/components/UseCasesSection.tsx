import { TextReplacer } from "./TextReplacer";
import { Users, Crown, Megaphone, Compass, RefreshCw, Atom, UserSearch, SearchCheck } from "lucide-react";

const useCases = [
  { key: "usecase-1", default: "Construcción de Audiencias", icon: Users },
  { key: "usecase-2", default: "Reputación de Marca", icon: Crown },
  { key: "usecase-3", default: "Marketing de Marca", icon: Megaphone },
  { key: "usecase-4", default: "Estrategia de Contenido", icon: Compass },
  { key: "usecase-5", default: "Percepción del Cliente", icon: RefreshCw },
  { key: "usecase-6", default: "Inteligencia Social", icon: Atom },
  { key: "usecase-7", default: "Insights del Consumidor", icon: UserSearch },
  { key: "usecase-8", default: "Investigación Competitiva", icon: SearchCheck },
];

export const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <TextReplacer
          contentKey="usecases-title"
          defaultValue="Motores de Conocimiento y Agentes Expertos para el Trabajo Más Importante del Marketing"
          as="h2"
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {useCases.map((useCase) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={useCase.key}
                className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <IconComponent className="w-10 h-10 text-primary mb-4" strokeWidth={1.5} />
                <TextReplacer
                  contentKey={useCase.key}
                  defaultValue={useCase.default}
                  as="span"
                  className="text-sm md:text-base text-foreground text-center font-medium"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
