"use client";
import { useEffect, useRef } from "react";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const teamMembers = [
  {
    name: "Mr.sc. Zvonimir Hrala",
    role: "dr.med.dent",
    title: "Osnivač & Vlasnik",
    imgUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Elizabeta Šarčević",
    role: "dr.med.dent",
    title: "Estetska stomatologija & Protetika",
    imgUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Vlatko Pavišić",
    role: "dr.med.dent",
    title: "Implantologija & Oralna kirurgija",
    imgUrl: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80",
  },
  {
    name: "Bruno Štimac",
    role: "dr.med.dent",
    title: "Parodontologija & Ortodoncija",
    imgUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80",
  },
  {
    name: "Andrea Vlahović",
    role: "Dentalna asistentica",
    title: "Koordinatorica pacijenata",
    imgUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80",
  },
];

const pillars = [
  "Kontinuirano stručno usavršavanje",
  "Najsuvremenija dijagnostička oprema",
  "Individualan pristup svakom pacijentu",
  "Sterilizacija prema EU standardima",
  "Digitalna 3D dijagnostika",
  "Bezbolni tretmani uz modernu anesteziju",
];

const featuredServices = [
  { number: "01", name: "Estetska stomatologija" },
  { number: "02", name: "Implantologija" },
  { number: "03", name: "Estetika lica" },
  { number: "04", name: "Oralna kirurgija" },
  { number: "05", name: "Protetika" },
  { number: "06", name: "Ortodoncija" },
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* Page banner */}
      <section className="bg-[var(--charcoal)] pt-44 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--green-primary)] opacity-[0.06] blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[var(--green-primary)] opacity-[0.04] blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/30 mb-10">
            <a href="/" className="hover:text-white/60 transition-colors">Naslovnica</a>
            <span>/</span>
            <span className="text-[var(--green-primary)]">O nama</span>
          </nav>
          <div className="max-w-3xl">
            <p className="section-label mb-5">O nama</p>
            <h1
              className="heading-serif text-white mb-6"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Tradicija, povjerenje<br />
              <span className="text-[var(--green-primary)] italic">i izvrsnost</span>
            </h1>
            <p className="text-white/55 leading-relaxed max-w-xl text-lg">
              Više od 50 godina obiteljske tradicije u dentalnoj medicini — jer vaš osmijeh
              zaslužuje samo ono najbolje.
            </p>
          </div>
        </div>
      </section>

      {/* Clinic story */}
      <section className="bg-[var(--cream)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Images */}
            <div className="reveal-left relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="img-zoom overflow-hidden h-80">
                  <img
                    src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80"
                    alt="Ordinacija Hrala"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="img-zoom overflow-hidden h-80 mt-12">
                  <img
                    src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=700&q=80"
                    alt="Dentalni tretman"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[var(--green-primary)] text-white p-8 z-10">
                <div
                  className="text-6xl font-light leading-none mb-1"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  50+
                </div>
                <div className="text-xs uppercase tracking-widest text-white/80">
                  godina<br />tradicije
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="reveal-right">
              <p className="section-label mb-5">Naša priča</p>
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
                Obitelj Hrala ima više od 50 godina tradicije u dentalnoj medicini. Centar
                dentalne medicine Hrala osnovan je 2002. godine u zagrebačkoj Dubravi, pod
                vodstvom Mr.sc. Zvonimira Hrale — nastavitelja dugogodišnje obiteljske
                predanosti stomatologiji.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Naša misija od samog je početka bila jednostavna — pružiti pacijentima
                vrhunsku stomatološku skrb u ugodnom i modernom okruženju, bez straha i
                bez kompromisa u kvaliteti. Prijatan i opušten pristup prema pacijentima
                kombiniramo s visokom stručnošću i uslužnošću cijelog našeg dentalnog tima.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Kontinuiranim stručnim usavršavanjem i praćenjem suvremenih dostignuća
                dentalne medicine jamčimo vam uvijek najkvalitetniju uslugu — od
                jednostavnog pregleda do složenih implantoloških zahvata i estetike lica.
              </p>
              <a href="/#contact" className="btn-primary">
                Zakažite termin <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <div className="bg-[var(--green-primary)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { number: "50+", label: "Godina tradicije" },
              { number: "2002.", label: "Godina osnutka" },
              { number: "5", label: "Specijalista" },
              { number: "9", label: "Usluga" },
            ].map((stat) => (
              <div key={stat.label} className="reveal">
                <div
                  className="text-5xl font-light text-white mb-2"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  {stat.number}
                </div>
                <div className="text-[11px] uppercase tracking-widest text-white/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Philosophy / pillars */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="reveal">
              <p className="section-label mb-5">Naša filozofija</p>
              <h2
                className="heading-serif text-[var(--charcoal)] mb-6"
                style={{
                  fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Zašto pacijenti biraju<br />
                <span className="text-[var(--green-primary)] italic">Centar Hrala</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Svaki posjet stomatologu doživljavamo kao susret pun povjerenja. Zato
                smo izgradili tim i okruženje u kojemu se svaki pacijent osjeća sigurno,
                saslušano i zbrinuto.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Ne liječimo samo zube — gradimo dugoročne odnose s pacijentima koji
                nam dolaze iznova, jer znaju da će u ordinaciji Hrala uvijek biti u
                najboljim rukama.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((p, i) => (
                <li
                  key={p}
                  className={`reveal delay-${(i % 4) * 100 + 100} flex items-start gap-3 p-5 border border-gray-100 bg-[var(--cream)]`}
                >
                  <CheckCircle
                    size={17}
                    className="text-[var(--green-primary)] mt-0.5 flex-shrink-0"
                  />
                  <span className="text-sm text-gray-700 leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[var(--cream)] py-32 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-16 reveal">
            <p className="section-label mb-4">Naš tim</p>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <h2
                className="heading-serif text-[var(--charcoal)]"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Stručnjaci koji se brinu<br />
                <span className="text-[var(--green-primary)] italic">o vašem osmijehu</span>
              </h2>
              <p className="text-gray-500 max-w-sm leading-relaxed lg:text-right text-sm">
                Naš tim čine iskusni doktori dentalne medicine i predani stručnjaci,
                ujedinjeni u zajedničkoj misiji — vašem zdravom osmijehu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, i) => (
              <div
                key={member.name}
                className={`reveal delay-${Math.min(i * 100 + 100, 500)} group`}
              >
                <div className="img-zoom overflow-hidden mb-4 bg-gray-100 aspect-[3/4]">
                  <img
                    src={member.imgUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="border-l-2 border-[var(--green-primary)] pl-4">
                  <p
                    className="font-serif text-base text-[var(--charcoal)] mb-0.5 leading-snug"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {member.name}
                  </p>
                  <p className="text-[10px] text-[var(--green-primary)] uppercase tracking-wide font-medium">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services cross-link */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="reveal grid lg:grid-cols-2 gap-0 border border-gray-100">
            <div className="p-12 border-b lg:border-b-0 lg:border-r border-gray-100">
              <p className="section-label mb-4">Naše usluge</p>
              <h2
                className="heading-serif text-[var(--charcoal)] mb-6"
                style={{
                  fontSize: "clamp(2rem, 3vw, 2.8rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Sveobuhvatna dentalna<br />
                <span className="text-[var(--green-primary)] italic">medicina na jednom mjestu</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8 text-sm">
                Od estetske stomatologije i implantologije do ortodoncije i estetike lica —
                sve što trebate za zdrav i lijep osmijeh pronađite u jednoj ordinaciji.
              </p>
              <a href="/#services" className="btn-primary">
                Pogledajte sve usluge <ArrowRight size={16} />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-px bg-gray-100">
              {featuredServices.map((s) => (
                <a
                  key={s.number}
                  href="/#services"
                  className="group flex items-center gap-3 p-6 bg-white hover:bg-[var(--green-pale)] transition-colors"
                >
                  <span
                    className="text-3xl text-gray-150 group-hover:text-[var(--green-primary)] transition-colors font-light leading-none"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.number}
                  </span>
                  <span className="text-sm text-gray-600 group-hover:text-[var(--green-primary)] transition-colors leading-snug">
                    {s.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[var(--charcoal)] py-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[var(--green-primary)] opacity-[0.07] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative reveal">
          <p className="section-label mb-5">Zakažite termin</p>
          <h2
            className="heading-serif text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 4vw, 4rem)",
              fontFamily: "var(--font-cormorant)",
            }}
          >
            Spremni za osmijeh<br />
            <span className="text-[var(--green-primary)] italic">koji zaslužujete?</span>
          </h2>
          <p className="text-white/50 max-w-lg mx-auto mb-10 leading-relaxed">
            Javite nam se — naš tim stoji vam na raspolaganju za sva pitanja,
            konzultacije i zakazivanje termina. Prva konzultacija je besplatna.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/#contact" className="btn-primary">
              Zakažite termin <ArrowRight size={16} />
            </a>
            <a
              href="tel:+38512916814"
              className="inline-flex items-center gap-2 border border-white/25 text-white/80 hover:text-white hover:border-white/50 px-8 py-3.5 text-xs font-medium uppercase tracking-widest transition-all"
            >
              <Phone size={15} /> 01/2916-814
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
