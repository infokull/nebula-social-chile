import { TextReplacer } from "./TextReplacer";
import { VideoReplacer } from "./VideoReplacer";

export const AttentionVideoSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <TextReplacer
            contentKey="attention-video-title"
            defaultValue="Conoce Qué Está Capturando la Atención y Por Qué"
            as="h2"
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10"
          />
          
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <VideoReplacer
              videoKey="attention-main-video"
              className="w-full"
              defaultContent={
                <div className="aspect-video bg-navy flex items-center justify-center">
                  <div className="text-center text-primary-foreground/60">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <svg
                        className="w-10 h-10"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <p className="text-sm">Haz clic para subir un video</p>
                  </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
