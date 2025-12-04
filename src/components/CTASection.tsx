import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "./DotPattern";

export const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
      
      {/* Dot patterns */}
      <DotPattern position="left" className="top-0 w-48 h-64 opacity-50" />
      <DotPattern position="right" className="bottom-0 w-48 h-64 opacity-50" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8">
            ¿Listo Para Comenzar Con Nebula Social?
          </h2>

          <Button variant="gradient" size="xl">
            Contáctanos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};
