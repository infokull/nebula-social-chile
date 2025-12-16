import { Button } from "@/components/ui/button";
import { DotPattern } from "./DotPattern";
import { ArrowRight } from "lucide-react";
import { TextReplacer } from "./TextReplacer";
import { useState } from "react";
import { ContactFormDialog } from "./ContactFormDialog";

export const HeroSection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 overflow-hidden">
        {/* Left dots - higher up, more dots, overlapping with text */}
        <DotPattern position="left" className="hidden md:block left-4 lg:left-16 top-12 w-80 h-96 z-0" />
        {/* Right dots - lower down, fewer dots, closer to text */}
        <DotPattern position="right" className="hidden md:block right-4 lg:right-20 top-32 w-56 h-80 z-0" />

        <div className="section-container relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <TextReplacer
              contentKey="hero-title"
              defaultValue="El único agente experto que entrega narrativas sociales basadas en atención real de las audiencias"
              as="h1"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight animate-fade-in"
            />
            
            <div className="mt-6 md:mt-8 animate-fade-in-delay-1">
              <TextReplacer
                contentKey="hero-description"
                defaultValue="Agentes expertos se combinan con motores de conocimiento para transformar la forma en que trabajan los equipos de marketing, redes sociales y análisis de consumidores, proporcionando tendencias en tiempo real, descubriendo creadores y revelando señales culturales que permiten tomar decisiones más inteligentes y ahorrar tiempo."
                as="p"
                className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto"
                multiline
              />
            </div>

            <div className="mt-8 md:mt-10 animate-fade-in-delay-2">
              <Button variant="gradient" size="xl" onClick={() => setIsContactOpen(true)}>
                <TextReplacer
                  contentKey="hero-button"
                  defaultValue="Conoce Más"
                  as="span"
                  className="inline"
                />
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Mobile dot pattern - below CTA */}
            <div className="md:hidden relative h-32 mt-8">
              <DotPattern position="left" className="top-0 left-1/2 -translate-x-1/2 w-48 h-32" />
            </div>
          </div>
        </div>
      </section>

      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};
