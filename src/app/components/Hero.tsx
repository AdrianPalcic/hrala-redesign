"use client";
import { useState, useEffect } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const slides = [
  {
    tagline: "Dobrodošli u Centar Hrala",
    heading: "Posjetite nas u ugodnom i modernom ambijentu naše ordinacije",
    subtext:
      "Posjetite nas u ugodnom i modernom ambijentu naše ordinacije, upoznajte naš tim, a mi ćemo se potruditi opravdati vaše povjerenje koje ste nam ukazali svojim dolaskom.",
    imgUrl:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1800&q=80",
  },
  {
    tagline: "Vrhunska stomatološka skrb",
    heading:
      "Trudimo se biti u skladu s razvojem i napretkom struke kroz stalne edukacije i stručna usavršavanja",
    subtext:
      "Posjetite nas u ugodnom i modernom ambijentu naše ordinacije, upoznajte naš tim, a mi ćemo se potruditi opravdati vaše povjerenje koje ste nam ukazali svojim dolaskom.",
    imgUrl:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1800&q=80",
  },
  {
    tagline: "Tim koji brine o vama",
    heading:
      "Prijateljski i opušten odnos sa pacijentima, te visoka stručnost i ljubaznost našeg tima garancija su za uspjeh i veliki broj zadovoljnih pacijenata",
    subtext:
      "Posjetite nas u ugodnom i modernom ambijentu naše ordinacije, upoznajte naš tim, a mi ćemo se potruditi opravdati vaše povjerenje koje ste nam ukazali svojim dolaskom.",
    imgUrl:
      "https://images.unsplash.com/photo-1666214280391-8ff5bd3c0bf0?w=1800&q=80",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimating(false);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="hero"
      className="relative h-screen mt-10 sm:mt-0 min-h-[700px] flex items-end overflow-hidden"
    >
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={s.imgUrl}
            alt="Dental clinic"
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}

      {/* Dark gradient — left-heavy so text stays readable on all screens */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/35 to-black/10" />

      {/* Decorative green vertical bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--green-primary)] z-10" />

      {/* Content */}
      <div className="relative z-10 w-full pb-24 pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div
            className={`max-w-2xl transition-all duration-500 ${
              animating
                ? "opacity-0 translate-y-6"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="section-label text-[var(--green-light)] mb-4 tracking-[0.25em]">
              {slide.tagline}
            </p>
            <h1
              className="heading-serif text-white mb-4"
              style={{
                fontSize: "clamp(1.35rem, 2.6vw, 2.2rem)",
                lineHeight: 1.3,
                fontFamily: "var(--font-cormorant)",
              }}
            >
              {slide.heading}
            </h1>
            <p className="text-white/80 text-sm sm:text-base font-light mb-10 max-w-xl leading-relaxed">
              {slide.subtext}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary">
                Dogovorite termin <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn-white">
                Naše usluge
              </a>
            </div>
          </div>

          {/* Slide indicators */}
          <div className="flex items-center gap-3 mt-16">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-8 h-2 bg-[var(--green-primary)]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-12 flex flex-col items-center gap-2 text-white/60 z-10">
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 mb-4 origin-center">
          Scroll
        </span>
        <ChevronDown size={20} className="animate-bounce" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <div className="bg-white flex">
          {[
            { num: "30+", label: "Godina iskustva" },
            { num: "15K+", label: "Zadovoljnih pacijenata" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`px-10 py-6 ${
                i === 0 ? "border-r border-gray-100" : "bg-[var(--green-primary)] text-white"
              }`}
            >
              <div
                className={`text-3xl font-serif font-light mb-0.5 ${
                  i === 1 ? "text-white" : "text-[var(--green-primary)]"
                }`}
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                {stat.num}
              </div>
              <div
                className={`text-xs uppercase tracking-widest ${
                  i === 1 ? "text-white/80" : "text-gray-500"
                }`}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
