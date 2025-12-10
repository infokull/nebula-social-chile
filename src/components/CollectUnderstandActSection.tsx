import { useState } from "react";
import { cn } from "@/lib/utils";
import { ImageReplacer } from "./ImageReplacer";
import { TextReplacer } from "./TextReplacer";

const tabs = [
  {
    id: "collect",
    labelKey: "tab-collect-label",
    labelDefault: "Recolectar Todos los Datos",
    titleKey: "tab-collect-title",
    titleDefault: "Recolectar Todos Los Datos",
    statKey: "tab-collect-stat",
    statDefault: "94%",
    statLabelKey: "tab-collect-stat-label",
    statLabelDefault: "reducción promedio en tiempo de scroll en redes sociales",
    descKey: "tab-collect-desc",
    descDefault: "Los equipos reducen el tiempo de scroll en redes sociales en un 94% en promedio, ahorrando miles de horas desplazándose y viendo videos.",
    subtextKey: "tab-collect-subtext",
    subtextDefault: "Nuestros agentes expertos están siempre activos, observando e interpretando miles de horas de video cada día - para que tú no tengas que hacerlo.",
  },
  {
    id: "understand",
    labelKey: "tab-understand-label",
    labelDefault: "Entender Quién y Qué Importa",
    titleKey: "tab-understand-title",
    titleDefault: "Entender Quién y Qué Son Importantes",
    statKey: "tab-understand-stat",
    statDefault: "6.7x",
    statLabelKey: "tab-understand-stat-label",
    statLabelDefault: "más rápido identificando creadores y narrativas relevantes",
    descKey: "tab-understand-desc",
    descDefault: "Identificación 6.7x más rápida de creadores y narrativas relevantes basada en un enfoque de red primero que entiende quién y qué están ganando atención.",
    subtextKey: "",
    subtextDefault: "",
  },
  {
    id: "act",
    labelKey: "tab-act-label",
    labelDefault: "Actuar sobre Tendencias Narrativas",
    titleKey: "tab-act-title",
    titleDefault: "Actuar sobre Tendencias Basadas en Narrativas",
    statKey: "tab-act-stat",
    statDefault: "11.2x",
    statLabelKey: "tab-act-stat-label",
    statLabelDefault: "más rápido hacia insights accionables",
    descKey: "tab-act-desc",
    descDefault: "Comparado con soluciones legacy basadas en palabras clave, el Grafo de Conocimiento de Nebula entrega su análisis a través de narrativas basadas en atención—haciéndolo 11.2x más rápido hacia insights accionables y 72% más probable de entregar mejores resultados.",
    subtextKey: "tab-act-subtext",
    subtextDefault: "Kepler es tu asistente estratégico en tiempo real que aprovecha estos insights narrativos para responder cualquier pregunta y ayudarte a enfocarte en lo que realmente importa.",
  },
];

export const CollectUnderstandActSection = () => {
  const [activeTab, setActiveTab] = useState("collect");
  const activeContent = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="section-container">
        <TextReplacer
          contentKey="collect-section-title"
          defaultValue="Recolectar. Entender. Actuar."
          as="h2"
          className="font-serif text-3xl md:text-4xl text-center text-foreground mb-12"
        />

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
              <TextReplacer
                contentKey={tab.labelKey}
                defaultValue={tab.labelDefault}
                as="span"
                className="inline"
              />
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            {/* Collect Tab */}
            {activeTab === "collect" && (
              <ImageReplacer
                imageKey="tab-collect"
                className="bg-navy rounded-2xl w-full"
                aspectRatio="auto"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full aspect-[3/4]">
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
                className="bg-navy rounded-2xl w-full"
                aspectRatio="auto"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full aspect-[3/4]">
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
                className="bg-navy rounded-2xl w-full"
                aspectRatio="auto"
                defaultContent={
                  <div className="bg-navy rounded-2xl p-6 flex items-center justify-center w-full aspect-[3/4]">
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
            <TextReplacer
              contentKey={activeContent.titleKey}
              defaultValue={activeContent.titleDefault}
              as="h3"
              className="font-serif text-2xl md:text-3xl text-foreground mb-4"
            />
            
            <div className="mb-6">
              <TextReplacer
                contentKey={activeContent.statKey}
                defaultValue={activeContent.statDefault}
                as="span"
                className="text-5xl md:text-6xl font-bold gradient-text"
              />
              <div className="mt-2">
                <TextReplacer
                  contentKey={activeContent.statLabelKey}
                  defaultValue={activeContent.statLabelDefault}
                  as="p"
                  className="text-muted-foreground"
                />
              </div>
            </div>

            <TextReplacer
              contentKey={activeContent.descKey}
              defaultValue={activeContent.descDefault}
              as="p"
              className="text-muted-foreground text-lg leading-relaxed"
              multiline
            />
            
            {activeContent.subtextKey && (
              <div className="mt-4">
                <TextReplacer
                  contentKey={activeContent.subtextKey}
                  defaultValue={activeContent.subtextDefault}
                  as="p"
                  className="text-muted-foreground text-lg leading-relaxed"
                  multiline
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
