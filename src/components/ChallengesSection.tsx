import { Database, Puzzle, Zap } from "lucide-react";

const challenges = [
  {
    icon: Database,
    title: "Sobrecarga de Datos",
    stat: "74%",
    description: "de los empleados reportan sentirse abrumados por la cantidad de datos que manejan.",
  },
  {
    icon: Puzzle,
    title: "Complejidad de Plataformas",
    stat: "8 de 10",
    description: "marketers dicen que la complejidad de las plataformas de redes sociales es su desafío #1 debido a cambios de algoritmos, comportamiento de usuarios, moderación de contenido y cumplimiento regulatorio.",
  },
  {
    icon: Zap,
    title: "Cambios Rápidos del Mercado",
    stat: "90%",
    description: "de las empresas admiten que les cuesta mantenerse al día con los mercados cambiantes.",
  },
];

export const ChallengesSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-4">
          El Trabajo de Conocimiento es Difícil,
        </h2>
        <h3 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12 md:mb-16">
          Entender las Redes Sociales es Más Difícil
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div
              key={challenge.title}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
                <img 
                  src={`https://cdn.prod.website-files.com/6115505d46eace49d6ae6aa2/683d842fbf126343a1abfe35_NS.sm${index + 1}.avif`}
                  alt={challenge.title}
                  className="w-12 h-12 object-cover rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `<div class="w-12 h-12 bg-purple/20 rounded-lg flex items-center justify-center"><challenge.icon class="w-6 h-6 text-purple" /></div>`;
                  }}
                />
              </div>
              
              <h4 className="font-serif text-xl text-foreground mb-3">
                {challenge.title}
              </h4>
              
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">{challenge.stat}</span>{" "}
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
