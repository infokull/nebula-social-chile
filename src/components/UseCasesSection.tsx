import { TextReplacer } from "./TextReplacer";

const useCases = [
  { key: "usecase-1", default: "Construcción de Audiencias" },
  { key: "usecase-2", default: "Reputación de Marca" },
  { key: "usecase-3", default: "Marketing de Marca" },
  { key: "usecase-4", default: "Estrategia de Contenido" },
  { key: "usecase-5", default: "Percepción del Cliente" },
  { key: "usecase-6", default: "Inteligencia Social" },
  { key: "usecase-7", default: "Insights del Consumidor" },
  { key: "usecase-8", default: "Investigación Competitiva" },
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

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {useCases.map((useCase, index) => (
            <span
              key={useCase.key}
              className="px-5 py-2.5 rounded-full bg-muted text-foreground font-medium text-sm md:text-base border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <TextReplacer
                contentKey={useCase.key}
                defaultValue={useCase.default}
                as="span"
                className="inline"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
