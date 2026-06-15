"use client";
import { useEffect, useRef } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const pillars = [
  "Kontinuirano stručno usavršavanje",
  "Najsuvremenija dijagnostička oprema",
  "Individualan pristup svakom pacijentu",
  "Sterilizacija prema EU standardima",
  "Digitalna 3D dijagnostika",
  "Bezbolni tretmani uz modernu anesteziju",
];

const doctors = [
  { name: "Mr. sc. Zvonimir Hrala", role: "dr. med. dent.", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Karla Hrala", role: "dr. med. dent.", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Tea Zadravec", role: "dr. med. dent.", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Elizabeta Šarčević", role: "dr. med. dent.", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Bruno Štimac", role: "dr. med. dent.", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
];

const assistants = [
  { name: "Draženka Horvat", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Marta Radušić", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Marija Barišić", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Ana Berišić", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Jelena Ćuro", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
  { name: "Mateo Deže", role: "Dentalni asistent", imgUrl: "https://placehold.co/400x480/e8f4ea/6aaa6a" },
];

export default function About() {
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

    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="bg-[var(--cream)] overflow-hidden"
      ref={sectionRef}
    >
      {/* Main about block */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Images */}
          <div className="reveal-left relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="img-zoom rounded-none overflow-hidden h-80">
                <img
                  src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80"
                  alt="Dental office"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="img-zoom rounded-none overflow-hidden h-80 mt-12">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80"
                  alt="Dental treatment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-[var(--green-primary)] text-white p-8 z-10">
              <div
                className="text-6xl font-serif font-light leading-none mb-1"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                20+
              </div>
              <div className="text-xs uppercase tracking-widest text-white/80">
                godina<br />iskustva
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal-right">
            <p className="section-label mb-5">O nama</p>
            <h2
              className="heading-serif text-[var(--charcoal)] mb-6"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Dentalna medicina<br />
              <span className="text-[var(--green-primary)] italic">s ljudskim pristupom</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Prijateljski i opušten odnos prema pacijentima, te visoka stručnost i ljubaznost
              našeg stomatološkog tima garancija su za uspjeh i velik broj zadovoljnih pacijenata.
              Trudimo se biti u skladu sa razvojem i napretkom struke kroz stalne edukacije i
              stručna usavršavanja.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Više od 50 godina obiteljske tradicije krasi našu ordinaciju, a od 2002. godine
              locirana je u Zagrebačkoj Dubravi u vlasništvu Zvonimira Hrale. Posjetite nas u
              ugodnom i modernom ambijentu naše ordinacije, upoznajte naš tim, a mi ćemo se
              potruditi opravdati vaše povjerenje koje ste nam ukazali svojim dolaskom.
            </p>

            {/* Pillars */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <CheckCircle
                    size={16}
                    className="text-[var(--green-primary)] mt-0.5 flex-shrink-0"
                  />
                  {p}
                </li>
              ))}
            </ul>

            <Link href="/o-nama" className="btn-primary">
              Upoznajte nas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <div className="mb-14 reveal">
            <p className="section-label mb-4">Naš tim</p>
            <h2
              className="heading-serif text-[var(--charcoal)]"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Stručnjaci koji se brinu o vašem osmijehu
            </h2>
          </div>

          {/* Doctors */}
          <div className="mb-12">
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 pb-3 border-b border-gray-200">
              Doktori dentalne medicine
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {doctors.map((member, i) => (
                <div key={member.name} className={`reveal delay-${i * 100 + 100} group`}>
                  <div className="img-zoom h-64 overflow-hidden mb-4 bg-gray-100">
                    <img src={member.imgUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="border-l-2 border-[var(--green-primary)] pl-4">
                    <p className="font-serif text-base text-[var(--charcoal)] mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assistants */}
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-400 mb-6 pb-3 border-b border-gray-200">
              Dentalni asistenti
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {assistants.map((member, i) => (
                <div key={member.name} className={`reveal delay-${i * 100 + 100} group`}>
                  <div className="img-zoom h-64 overflow-hidden mb-4 bg-gray-100">
                    <img src={member.imgUrl} alt={member.name} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="border-l-2 border-[var(--green-primary)] pl-4">
                    <p className="font-serif text-base text-[var(--charcoal)] mb-0.5" style={{ fontFamily: "var(--font-cormorant)" }}>
                      {member.name}
                    </p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
