import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photoSections = [
  {
    title: "Undergraduate Convocation",
    date: "January 2020",
    images: [
      "/files/img/1undergraduate2020/undergraduate1.jpg",
      "/files/img/1undergraduate2020/undergraduate2.jpg",
    ],
  },
  {
    title: "Run for Fun",
    date: "",
    images: [
      "files/img/2run/1runjan26.jpeg",
      "files/img/2run/2rundec24.jpeg",
      "files/img/2run/3runnov24.jpeg",
      "files/img/2run/4runoct24.jpeg",
      "files/img/2run/5runsep24.jpeg",
    ],
  },
  {
    title: "Kaalmegha Country Club & Resort",
    date: "February 2025",
    images: [
      "/files/img/3kalmegha2025/kalmegha1.jpg",
      "/files/img/3kalmegha2025/kalmegha2.jpg",
    ],
  },
  {
    title: "Saint Martin Tour",
    date: "January 2024",
    images: [
      "/files/img/4saintmartin2024/saintmartin1.jpg",
      "/files/img/4saintmartin2024/saintmartin2.jpg",
    ],
  },
  {
    title: "Cox's Bazar Sea Beach",
    date: "March 2023",
    images: ["/files/img/5coxsb23/coxs1.jpg"],
  },
  {
    title: "Kuakata Sea Beach Tour",
    date: "January 2021",
    images: [
      "/files/img/6kuakata21/kuakata1.jpg",
      "/files/img/6kuakata21/kuakata2.jpg",
    ],
  },
];

const PhotoGallery = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  const openLightbox = (images: string[], index: number) => {
    setLightbox({ images, index });
  };

  const closeLightbox = () => {
    setLightbox(null);
  };

  const nextImage = () => {
    if (lightbox) {
      setLightbox({
        ...lightbox,
        index: (lightbox.index + 1) % lightbox.images.length,
      });
    }
  };

  const prevImage = () => {
    if (lightbox) {
      setLightbox({
        ...lightbox,
        index: (lightbox.index - 1 + lightbox.images.length) % lightbox.images.length,
      });
    }
  };

  return (
    <section id="photos" className="py-20 bg-secondary/30">
      <div className="container max-w-4xl">
        <h2 className="section-heading">Photos</h2>

        <div className="grid gap-8">
          {photoSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {section.title}
                </h3>
                <span className="text-sm text-primary font-mono">
                  {section.date}
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {section.images.map((image, imageIndex) => (
                  <button
                    key={imageIndex}
                    onClick={() => openLightbox(section.images, imageIndex)}
                    className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
                  >
                    <img
                      src={image}
                      alt={`${section.title} - ${imageIndex + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Close"
          >
            <X size={32} />
          </button>

          {lightbox.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={40} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 text-foreground hover:text-primary transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={40} />
              </button>
            </>
          )}

          <img
            src={lightbox.images[lightbox.index]}
            alt="Lightbox"
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          {lightbox.images.length > 1 && (
            <div className="absolute bottom-4 flex gap-2">
              {lightbox.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setLightbox({ ...lightbox, index })}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === lightbox.index ? "bg-primary" : "bg-muted-foreground"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default PhotoGallery;
