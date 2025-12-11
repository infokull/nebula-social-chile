import { Eye } from "lucide-react";
import { ImageReplacer } from "./ImageReplacer";
import { VideoReplacer } from "./VideoReplacer";
import { TextReplacer } from "./TextReplacer";

export const PlatformSection = () => {
  return (
    <section className="py-10 md:py-16 bg-muted/30">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-coral" />
            </div>
            
            <TextReplacer
              contentKey="platform-title"
              defaultValue="Construido para las plataformas de redes sociales complejas, abrumadoras y rápidamente cambiantes de hoy"
              as="h2"
              className="font-serif text-3xl md:text-4xl text-foreground leading-tight"
            />
            
            <div className="mt-6">
              <TextReplacer
                contentKey="platform-desc-1"
                defaultValue="Los agentes expertos de Nebula Social analizan continuamente publicaciones, comentarios, hashtags, sonidos y frases clave de tu red curada, creando un Grafo de Conocimiento que organiza millones de relaciones en tiempo casi real."
                as="p"
                className="text-muted-foreground text-lg leading-relaxed"
                multiline
              />
            </div>
            
            <div className="mt-4">
              <TextReplacer
                contentKey="platform-desc-2"
                defaultValue="Nuestro Motor de Conocimiento luego integra todo, para entregar insights narrativos accionables basados en atención que puedes actuar y monitorear a lo largo del tiempo."
                as="p"
                className="text-muted-foreground text-lg leading-relaxed"
                multiline
              />
            </div>
          </div>

          {/* Screenshots mockup */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-coral/20 to-orange-300/20 rounded-3xl transform rotate-3" />
            <ImageReplacer
              imageKey="platform-main"
              className="relative shadow-2xl"
              defaultContent={
                <div className="bg-navy rounded-2xl p-4 w-full h-full">
                  <div className="aspect-video bg-navy/80 rounded-lg overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      {/* Simulated dashboard */}
                      <div className="w-full h-full p-4 space-y-3">
                        <div className="flex gap-2">
                          <div className="h-3 w-20 bg-purple/40 rounded" />
                          <div className="h-3 w-16 bg-coral/40 rounded" />
                        </div>
                        <div className="grid grid-cols-3 gap-2 h-20">
                          <div className="bg-purple/20 rounded-lg" />
                          <div className="bg-coral/20 rounded-lg" />
                          <div className="bg-orange-400/20 rounded-lg" />
                        </div>
                        <div className="h-32 bg-gradient-to-br from-purple/30 to-coral/30 rounded-lg flex items-center justify-center">
                          <div className="w-24 h-24 border-4 border-coral/40 rounded-full flex items-center justify-center">
                            <div className="w-16 h-16 bg-purple/40 rounded-full" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            
            {/* Secondary video */}
            <div className="absolute -bottom-8 -left-8 w-48">
              <VideoReplacer
                videoKey="platform-video"
                className="shadow-xl"
                defaultContent={
                  <div className="bg-navy rounded-xl p-2 w-full h-full">
                    <div className="aspect-video bg-navy/80 rounded-lg p-2 flex items-center justify-center">
                      <div className="space-y-1 w-full">
                        <div className="h-2 w-full bg-coral/30 rounded" />
                        <div className="h-2 w-3/4 bg-purple/30 rounded" />
                        <div className="h-2 w-1/2 bg-orange-400/30 rounded" />
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
