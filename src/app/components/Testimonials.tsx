"use client";
import { useEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Martina K.",
    role: "Pacijentica od 2018.",
    text: "Izvanredna ordinacija! Osoblje je uvijek ljubazno i profesionalno, a rezultati mog estetskog tretmana nadmašili su sva moja očekivanja.",
    stars: 5,
  },
  {
    name: "Robert P.",
    role: "Pacijent od 2020.",
    text: "Napokon sam pronašao ordinaciju gdje se osjećam opušteno. Implant je postavljen bez ikakve boli, a zub izgleda potpuno prirodno.",
    stars: 5,
  },
  {
    name: "Ivana M.",
    role: "Pacijentica od 2015.",
    text: "Pratim ordinaciju Hrala godinama i uvijek su na vrhu. Moderna oprema, educirani tim i atmosfera koja vas odmah opusti. Preporučam svima!",
    stars: 5,
  },
  {
    name: "Tomislav B.",
    role: "Pacijent od 2019.",
    text: "Ortodontski tretman završen na vrijeme i s fantastičnim rezultatima. Svi mi govore kako mi zubi izgledaju savršeno.",
    stars: 5,
  },
  {
    name: "Sandra L.",
    role: "Pacijentica od 2021.",
    text: "Dolazim s cijelom obitelji. Doktori su strpljivi čak i s djecom koja se boje stomatologa. Topla preporuka!",
    stars: 5,
  },
];

const marqueeItems = [
  "Estetska stomatologija",
  "Implantologija",
  "Ortodoncija",
  "Protetika",
  "Kirurgija",
  "Estetika lica",
  "Parodontologija",
  "Prevencija",
  "Endodoncija",
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = sectionRef.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Marquee band */}
      <div className="bg-[var(--green-primary)] py-5 overflow-hidden select-none">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span key={i} className="flex items-center gap-4 text-white/90">
                <span className="text-sm font-medium tracking-widest uppercase">
                  {item}
                </span>
                <span className="text-[var(--green-light)] text-lg">✦</span>
              </span>
            )
          )}
        </div>
      </div>

      {/* Testimonials */}
      <section
        className="py-32 bg-[var(--charcoal)] overflow-hidden"
        ref={sectionRef}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="reveal">
              <p
                className="section-label mb-4"
                style={{ color: "var(--green-light)" }}
              >
                Recenzije pacijenata
              </p>
              <h2
                className="heading-serif text-white"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Što kažu naši<br />
                <span
                  className="italic"
                  style={{ color: "var(--green-light)" }}
                >
                  zadovoljni pacijenti
                </span>
              </h2>
            </div>
            <div className="reveal delay-200 text-right">
              <div
                className="text-6xl font-serif text-[var(--green-light)] font-light"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                4.9
              </div>
              <div className="flex gap-1 justify-end my-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="var(--green-light)"
                    stroke="none"
                  />
                ))}
              </div>
              <p className="text-white/40 text-xs">Google Reviews</p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t, i) => (
              <div
                key={t.name}
                className={`reveal delay-${i * 150 + 100} bg-white/5 border border-white/10 p-8 hover:border-[var(--green-primary)] hover:bg-white/8 transition-all duration-300 group`}
              >
                <Quote
                  size={28}
                  className="text-[var(--green-primary)] mb-6 opacity-60"
                />
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 bg-[var(--green-primary)] flex items-center justify-center text-white font-serif text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.stars)].map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        fill="var(--green-light)"
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full-width last two */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {testimonials.slice(3).map((t, i) => (
              <div
                key={t.name}
                className={`reveal delay-${i * 150 + 100} bg-white/5 border border-white/10 p-8 hover:border-[var(--green-primary)] transition-all duration-300`}
              >
                <Quote
                  size={28}
                  className="text-[var(--green-primary)] mb-6 opacity-60"
                />
                <p className="text-white/80 text-sm leading-relaxed mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 border-t border-white/10 pt-6">
                  <div className="w-10 h-10 bg-[var(--green-primary)] flex items-center justify-center text-white font-serif text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.stars)].map((_, si) => (
                      <Star
                        key={si}
                        size={12}
                        fill="var(--green-light)"
                        stroke="none"
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
