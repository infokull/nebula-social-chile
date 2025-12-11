import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "./DotPattern";
import { TextReplacer } from "./TextReplacer";
import { useState } from "react";
import { ContactFormDialog } from "./ContactFormDialog";

export const CTASection = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative py-14 md:py-20 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/50" />
        
        {/* Dot patterns */}
        <DotPattern position="left" className="top-0 w-48 h-64 opacity-50" />
        <DotPattern position="right" className="bottom-0 w-48 h-64 opacity-50" />

        <div className="section-container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <TextReplacer
              contentKey="cta-title"
              defaultValue="¿Listo Para Comenzar Con Nebula Social?"
              as="h2"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8"
            />

            <Button variant="gradient" size="xl" onClick={() => setIsContactOpen(true)}>
              <TextReplacer
                contentKey="cta-button"
                defaultValue="Contáctanos"
                as="span"
                className="inline"
              />
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      <ContactFormDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
};
