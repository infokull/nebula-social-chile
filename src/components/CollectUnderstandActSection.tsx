import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageReplacer } from "./ImageReplacer";

const tabs = [
  {
    id: "collect",
    label: "Recolectar Todos los Datos",
    title: "Recolectar Todos Los Datos",
    stat: "94%",
    statLabel: "reducción promedio en tiempo de scroll en redes sociales",
    description: "Los equipos reducen el tiempo de scroll en redes sociales en un 94% en promedio, ahorrando miles de horas desplazándose y viendo videos.",
    subtext: "Nuestros agentes expertos están siempre activos, observando e interpretando miles de horas de video cada día - para que tú no tengas que hacerlo.",
  },
  {
    id: "understand",
    label: "Entender Quién y Qué Importa",
    title: "Entender Quién y Qué Son Importantes",
    stat: "6.7x",
    statLabel: "más rápido identificando creadores y narrativas relevantes",
    description: "Identificación 6.7x más rápida de creadores y narrativas relevantes basada en un enfoque de red primero que entiende quién y qué están ganando atención.",
    subtext: "",
  },
  {
    id: "act",
    label: "Actuar sobre Tendencias Narrativas",
    title: "Actuar sobre Tendencias Basadas en Narrativas",
    stat: "11.2x",
    statLabel: "más rápido hacia insights accionables",
    description: "Comparado con soluciones legacy basadas en palabras clave, el Grafo de Conocimiento de Nebula entrega su análisis a través de narrativas basadas en atención—haciéndolo 11.2x más rápido hacia insights accionables y 72% más probable de entregar mejores resultados.",
    subtext: "Kepler es tu asistente estratégico en tiempo real que aprovecha estos insights narrativos para responder cualquier pregunta y ayudarte a enfocarte en lo que realmente importa.",
  },
];

export const CollectUnderstandActSection = () => {
  const [activeTab, setActiveTab] = useState("collect");
  const activeContent = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <h2 className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12">
          Recolectar. Entender. Actuar.
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 md:px-6 py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300",
                activeTab === tab.id
                  ? "bg-navy text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            {/* Collect Tab */}
            {activeTab === "collect" && (
              <ImageReplacer
                imageKey="tab-collect"
                className="bg-navy rounded-2xl min-h-[500px] lg:min-h-[600px]"
                aspectRatio="portrait"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full h-full min-h-[500px] lg:min-h-[600px]">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <div className="grid grid-cols-4 gap-2 w-full">
                        {Array.from({ length: 16 }).map((_, i) => (
                          <div
                            key={i}
                            className="aspect-square bg-gradient-to-br from-purple/40 to-coral/40 rounded-lg animate-pulse"
                            style={{ animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            )}

            {/* Understand Tab */}
            {activeTab === "understand" && (
              <ImageReplacer
                imageKey="tab-understand"
                className="bg-navy rounded-2xl min-h-[500px] lg:min-h-[600px]"
                aspectRatio="portrait"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full h-full min-h-[500px] lg:min-h-[600px]">
                    <div className="w-full h-full p-4 flex items-center justify-center">
                      <div className="relative w-48 h-48">
                        <div className="absolute inset-0 border-2 border-purple/40 rounded-full animate-pulse" />
                        <div className="absolute inset-4 border-2 border-coral/40 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                        <div className="absolute inset-8 border-2 border-orange-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                        <div className="absolute inset-16 bg-gradient-to-br from-purple to-coral rounded-full" />
                      </div>
                    </div>
                  </div>
                }
              />
            )}

            {/* Act Tab */}
            {activeTab === "act" && (
              <ImageReplacer
                imageKey="tab-act"
                className="bg-navy rounded-2xl min-h-[500px] lg:min-h-[600px]"
                aspectRatio="portrait"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full h-full min-h-[500px] lg:min-h-[600px]">
                    <div className="w-full h-full p-4 flex flex-col justify-center space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple rounded-full" />
                        <div className="flex-1 h-3 bg-purple/30 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-coral rounded-full" />
                        <div className="flex-1 h-3 bg-coral/30 rounded" />
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-400 rounded-full" />
                        <div className="flex-1 h-3 bg-orange-400/30 rounded" />
                      </div>
                    </div>
                  </div>
                }
              />
            )}
          </div>

          <div className="order-1 lg:order-2">
            <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
              {activeContent.title}
            </h3>
            
            <div className="mb-6">
              <span className="text-5xl md:text-6xl font-bold gradient-text">
                {activeContent.stat}
              </span>
              <p className="text-muted-foreground mt-2">{activeContent.statLabel}</p>
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {activeContent.description}
            </p>
            
            {activeContent.subtext && (
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                {activeContent.subtext}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
