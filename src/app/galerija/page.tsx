"use client";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type Category = "sve" | "ordinacija" | "tim" | "tretmani" | "osmijesi";

interface GalleryImage {
  url: string;
  caption: string;
  category: Exclude<Category, "sve">;
  aspect: string;
}

const images: GalleryImage[] = [
  // Ordinacija
  {
    url: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1200&q=85",
    caption: "Čekaonica i recepcija",
    category: "ordinacija",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&q=85",
    caption: "Ordinacija za tretmane",
    category: "ordinacija",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1200&q=85",
    caption: "RTG dijagnostička oprema",
    category: "ordinacija",
    aspect: "aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1609840113589-b30e58eba19c?w=1200&q=85",
    caption: "Dentalni instrumenti",
    category: "ordinacija",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&q=85",
    caption: "Moderna dentalna stolica",
    category: "ordinacija",
    aspect: "aspect-[3/4]",
  },
  // Tim
  {
    url: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1200&q=85",
    caption: "Konzultacija s pacijentom",
    category: "tim",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200&q=85",
    caption: "Dr. Elizabeta Šarčević",
    category: "tim",
    aspect: "aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=85",
    caption: "Dr. Vlatko Pavišić",
    category: "tim",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1200&q=85",
    caption: "Dr. Bruno Štimac",
    category: "tim",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=85",
    caption: "Andrea Vlahović – dentalna asistentica",
    category: "tim",
    aspect: "aspect-square",
  },
  // Tretmani
  {
    url: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=1200&q=85",
    caption: "Implantološki zahvat",
    category: "tretmani",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1200&q=85",
    caption: "Dentalni tretman",
    category: "tretmani",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=85",
    caption: "Oralna kirurgija",
    category: "tretmani",
    aspect: "aspect-square",
  },
  {
    url: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1200&q=85",
    caption: "Protetski radovi",
    category: "tretmani",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1601333155159-9bf0e00ea7ce?w=1200&q=85",
    caption: "Ortodontska terapija",
    category: "tretmani",
    aspect: "aspect-[3/4]",
  },
  // Osmijesi
  {
    url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1200&q=85",
    caption: "Rezultat estetske stomatologije",
    category: "osmijesi",
    aspect: "aspect-[4/3]",
  },
  {
    url: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200&q=85",
    caption: "Estetika lica — prirodni rezultati",
    category: "osmijesi",
    aspect: "aspect-[3/4]",
  },
  {
    url: "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?w=1200&q=85",
    caption: "Blistav osmijeh",
    category: "osmijesi",
    aspect: "aspect-square",
  },
];

const filters: { key: Category; label: string }[] = [
  { key: "sve", label: "Sve" },
  { key: "ordinacija", label: "Ordinacija" },
  { key: "tim", label: "Tim" },
  { key: "tretmani", label: "Tretmani" },
  { key: "osmijesi", label: "Osmijesi" },
];

export default function GalleryPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<Category>("sve");
  const [displayedFilter, setDisplayedFilter] = useState<Category>("sve");
  const [fading, setFading] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredImages =
    displayedFilter === "sve"
      ? images
      : images.filter((img) => img.category === displayedFilter);

  const counts = filters.reduce((acc, f) => {
    acc[f.key] =
      f.key === "sve"
        ? images.length
        : images.filter((img) => img.category === f.key).length;
    return acc;
  }, {} as Record<Category, number>);

  // Reveal animations
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    pageRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((p) => (p !== null ? (p + 1) % filteredImages.length : null));
      if (e.key === "ArrowLeft")
        setLightbox((p) =>
          p !== null ? (p - 1 + filteredImages.length) % filteredImages.length : null
        );
    };
    window.addEventListener("keydown", handle);
    return () => window.removeEventListener("keydown", handle);
  }, [lightbox, filteredImages.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  const handleFilterChange = (key: Category) => {
    if (key === activeFilter) return;
    setActiveFilter(key);
    setFading(true);
    setLightbox(null);
    setTimeout(() => {
      setDisplayedFilter(key);
      setFading(false);
    }, 180);
  };

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* ── Page banner ── */}
      <section className="bg-[var(--charcoal)] pt-44 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[var(--green-primary)] opacity-[0.07] blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--green-primary)] opacity-[0.04] blur-3xl -translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/30 mb-10">
            <a href="/" className="hover:text-white/60 transition-colors">
              Naslovnica
            </a>
            <span>/</span>
            <span className="text-[var(--green-primary)]">Galerija</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="section-label mb-5">Galerija</p>
              <h1
                className="heading-serif text-white mb-6"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Naša ordinacija &amp;<br />
                <span className="text-[var(--green-primary)] italic">vaši osmijesi</span>
              </h1>
              <p className="text-white/55 leading-relaxed max-w-lg">
                Zaviriite u prostore osmišljene za vaš komfor, upoznajte naš tim
                i pogledajte rezultate koji govore sami za sebe.
              </p>
            </div>

            {/* Image count */}
            <div className="border border-white/10 px-10 py-8 text-center flex-shrink-0">
              <div
                className="text-6xl font-light text-white leading-none mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {images.length}
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Fotografija
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filter tabs ── */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-40 shadow-[0_2px_20px_rgba(0,0,0,0.05)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-0.5 overflow-x-auto py-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => handleFilterChange(f.key)}
                className={`flex items-center gap-2 px-5 py-2.5 text-[11px] font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  activeFilter === f.key
                    ? "bg-[var(--green-primary)] text-white"
                    : "text-gray-400 hover:text-[var(--charcoal)] hover:bg-gray-50"
                }`}
              >
                {f.label}
                <span
                  className={`text-[10px] font-normal ${
                    activeFilter === f.key ? "text-white/60" : "text-gray-300"
                  }`}
                >
                  {counts[f.key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Masonry gallery ── */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`columns-1 sm:columns-2 lg:columns-3 gap-3 transition-opacity duration-200 ${
              fading ? "opacity-0" : "opacity-100"
            }`}
          >
            {filteredImages.map((img, i) => (
              <div
                key={img.url + img.category}
                className="break-inside-avoid mb-3 cursor-pointer group relative overflow-hidden"
                onClick={() => setLightbox(i)}
              >
                <div className={`${img.aspect} overflow-hidden relative bg-gray-100`}>
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[var(--charcoal)]/0 group-hover:bg-[var(--charcoal)]/50 transition-all duration-400 flex flex-col justify-end p-5">
                    <div className="translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">
                        {img.category}
                      </p>
                      <p className="text-white text-sm font-medium leading-snug">
                        {img.caption}
                      </p>
                    </div>
                  </div>
                  {/* Expand hint */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/0 group-hover:bg-white/15 flex items-center justify-center transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <p className="text-center text-gray-400 py-20 text-sm">
              Nema fotografija u ovoj kategoriji.
            </p>
          )}
        </div>
      </section>

      {/* ── Virtual tour CTA ── */}
      <section
        id="virtual"
        className="bg-[var(--green-primary)] scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="reveal max-w-xl">
              <p className="text-white/60 text-[10px] uppercase tracking-widest mb-4">
                Virtualna šetnja
              </p>
              <h2
                className="heading-serif text-white mb-4"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Obiđite ordinaciju 360°<br />
                <span className="italic">iz udobnosti doma</span>
              </h2>
              <p className="text-white/65 leading-relaxed">
                Upoznajte naše moderne prostore i osjetite se dobrodošlo još
                prije prvog posjeta. Virtualna šetnja dostupna je 24 sata
                dnevno.
              </p>
            </div>
            <div className="reveal delay-200 flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
              <a
                href="https://hrala.com.hr/virtualna-setnja/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-white"
              >
                Pokrenite 360° šetnju <ExternalLink size={14} />
              </a>
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-2 border border-white/30 text-white/80 hover:text-white hover:border-white/60 px-7 py-3.5 text-xs font-medium uppercase tracking-widest transition-all"
              >
                Zakažite posjet <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-[var(--charcoal)] py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-[var(--green-primary)] opacity-[0.06] blur-3xl translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-10 relative reveal">
          <div>
            <p className="section-label mb-4">Dogovorite termin</p>
            <h2
              className="heading-serif text-white"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Sviđa vam se što vidite?<br />
              <span className="text-[var(--green-primary)] italic">
                Dođite i sami.
              </span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link href="/kontakt" className="btn-primary">
              Kontaktirajte nas <ArrowRight size={15} />
            </Link>
            <Link
              href="/usluge"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-7 py-3.5 text-xs font-medium uppercase tracking-widest transition-all"
            >
              Pogledajte usluge
            </Link>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/96 flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
            onClick={() => setLightbox(null)}
            aria-label="Zatvori"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (p) => (p !== null ? (p - 1 + filteredImages.length) % filteredImages.length : null)
              );
            }}
            aria-label="Prethodna"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <div className="flex flex-col items-center gap-4 px-20" onClick={(e) => e.stopPropagation()}>
            <img
              src={filteredImages[lightbox].url}
              alt={filteredImages[lightbox].caption}
              className="max-w-[85vw] max-h-[78vh] object-contain"
            />
            <div className="text-center">
              <p className="text-white/80 text-sm">
                {filteredImages[lightbox].caption}
              </p>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-1">
                {filteredImages[lightbox].category}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((p) =>
                p !== null ? (p + 1) % filteredImages.length : null
              );
            }}
            aria-label="Sljedeća"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {filteredImages.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`transition-all duration-200 rounded-full ${
                  i === lightbox
                    ? "w-6 h-1.5 bg-[var(--green-primary)]"
                    : "w-1.5 h-1.5 bg-white/25 hover:bg-white/50"
                }`}
                aria-label={`Fotografija ${i + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
