import { Button } from "@/components/ui/button";
import { DotPattern } from "./DotPattern";
import { ArrowRight } from "lucide-react";
import { TextReplacer } from "./TextReplacer";

export const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Dot patterns */}
      <DotPattern position="left" className="top-20 w-64 h-80" />
      <DotPattern position="right" className="top-20 w-64 h-80" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <TextReplacer
            contentKey="hero-title"
            defaultValue="El único agente experto que entrega narrativas sociales basadas en atención"
            as="h1"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in text-balance"
          />
          
          <div className="mt-6 md:mt-8 animate-fade-in-delay-1">
            <TextReplacer
              contentKey="hero-description"
              defaultValue="Agentes expertos se combinan con motores de conocimiento para transformar cómo trabajan los equipos de marketing, redes sociales e insights del consumidor—entregando tendencias en tiempo real, descubriendo creadores y revelando señales culturales que impulsan decisiones más inteligentes y ahorran tiempo."
              as="p"
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-balance"
              multiline
            />
          </div>

          <div className="mt-8 md:mt-10 animate-fade-in-delay-2">
            <Button variant="gradient" size="xl">
              <TextReplacer
                contentKey="hero-button"
                defaultValue="Conoce Más"
                as="span"
                className="inline"
              />
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
