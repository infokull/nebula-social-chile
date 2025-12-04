const useCases = [
  "Construcción de Audiencias",
  "Reputación de Marca",
  "Marketing de Marca",
  "Estrategia de Contenido",
  "Percepción del Cliente",
  "Inteligencia Social",
  "Insights del Consumidor",
  "Investigación Competitiva",
];

export const UseCasesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
          Motores de Conocimiento y Agentes Expertos para el Trabajo Más Importante del Marketing
        </h2>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {useCases.map((useCase, index) => (
            <span
              key={useCase}
              className="px-5 py-2.5 rounded-full bg-muted text-foreground font-medium text-sm md:text-base border border-border hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {useCase}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
