"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=900&q=80",
    caption: "Recepcija ordinacije",
    span: "col-span-2 row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    caption: "Ordinacija",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    caption: "Moderna oprema",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=600&q=80",
    caption: "Tretman",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    caption: "Konzultacija",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1609840113589-b30e58eba19c?w=600&q=80",
    caption: "Detalj",
    span: "col-span-1 row-span-1",
  },
  {
    url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    caption: "Tim stručnjaka",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((prev) =>
          prev !== null ? (prev + 1) % galleryImages.length : null
        );
      if (e.key === "ArrowLeft")
        setLightbox((prev) =>
          prev !== null
            ? (prev - 1 + galleryImages.length) % galleryImages.length
            : null
        );
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightbox]);

  return (
    <section id="gallery" className="py-32 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
          <div className="reveal">
            <p className="section-label mb-4">Galerija</p>
            <h2
              className="heading-serif text-[var(--charcoal)]"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Naša ordinacija 
            </h2>
          </div>
          <p className="reveal delay-200 text-gray-500 max-w-xs leading-relaxed">
            Moderno opremljeni prostori osmišljeni za vaš maksimalan komfor i
            opuštenu atmosferu.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`reveal delay-${Math.min(i * 100, 500)} img-zoom cursor-pointer overflow-hidden group ${img.span}`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[var(--green-dark)]/0 group-hover:bg-[var(--green-dark)]/30 transition-all flex items-end p-4">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual tour CTA */}
        <div
          id="virtual"
          className="mt-16 reveal bg-[var(--green-primary)] text-white p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <p className="text-green-200 text-xs uppercase tracking-widest mb-3">
              Virtualna šetnja
            </p>
            <h3
              className="heading-serif text-3xl md:text-4xl mb-2"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Obiđite ordinaciju 360°<br />iz udobnosti doma
            </h3>
            <p className="text-white/70 text-sm mt-2">
              Upoznajte naše prostore i osjetite se dobrodošlo još prije prvog posjeta.
            </p>
          </div>
          <a
            href="https://hrala.com.hr/virtualna-setnja/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-white flex-shrink-0"
          >
            Pokrenite šetnju →
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-6 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (prev) =>
                  prev !== null
                    ? (prev - 1 + galleryImages.length) % galleryImages.length
                    : null
              );
            }}
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={galleryImages[lightbox].url}
            alt={galleryImages[lightbox].caption}
            className="max-w-[90vw] max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-6 text-white/70 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((prev) =>
                prev !== null ? (prev + 1) % galleryImages.length : null
              );
            }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-6 text-white/50 text-sm">
            {lightbox + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
