"use client";
import { useEffect, useRef, useState, Fragment } from "react";
import { ArrowRight, CheckCircle, Phone } from "lucide-react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    id: "estetska-stomatologija",
    number: "01",
    title: "Estetska stomatologija",
    tagline: "Osmijeh koji ostavlja dojam",
    description:
      "Estetska stomatologija spaja ljepotu i funkcionalnost u osmijeh kakav ste uvijek zamišljali. Svaki tretman prilagođavamo vašim željama, anatomiji lica i prirodnoj boji zubi — jer pravi rezultati izgledaju prirodno, ne plastično.",
    details: [
      "Profesionalno bijeljenje zuba",
      "Kompozitne i keramičke ljuskice (veneers)",
      "Kompozitni ispuni bijele boje",
      "Cjelovita estetska obnova (Smile Makeover)",
      "Digital Smile Design planiranje",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=900&q=80",
  },
  {
    id: "implantologija",
    number: "02",
    title: "Implantologija",
    tagline: "Trajno rješenje za izgubljene zube",
    description:
      "Dentalni implantat danas je zlatni standard zamjene izgubljenog zuba. Titanski implantat ugrađuje se u kost i postaje čvrsti temelj za krunicu koja izgleda, osjeća se i funkcionira poput prirodnog zuba — zauvijek.",
    details: [
      "Jednofazni i dvofazni implanti",
      "3D CBCT planiranje i implantacija",
      "Sinus lift i augmentacija kosti",
      "All-on-4 i All-on-6 protokoli",
      "Protetičke nadogradnje na implantatima",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=900&q=80",
  },
  {
    id: "estetika-lica",
    number: "03",
    title: "Estetika lica",
    tagline: "Osvježite izgled, zadržite karakter",
    description:
      "Naši doktori uz stomatološku ekspertizu donose duboko poznavanje anatomije lica. Botoks i fileri u vještim rukama daju prirodne, suptilne rezultate — osvježen izgled bez dojma \"rada\".",
    details: [
      "Botoks za mimičke bore",
      "Hijaluronski fileri za usne i konture",
      "Lifting i volumizacija lica",
      "Anti-aging tretmani",
      "Bruksizam terapija botoksom",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80",
  },
  {
    id: "oralna-kirurgija",
    number: "04",
    title: "Oralna kirurgija",
    tagline: "Preciznost i minimalna neugoda",
    description:
      "Kirurški zahvati u ustima zahtijevaju preciznost, znanje i iskustvo. Koristimo minimalno invazivne tehnike i modernu anesteziju kako bi zahvat bio što bezbolniji, a oporavak što brži.",
    details: [
      "Vađenje zuba, uključujući umnjake",
      "Cistektomija i apikotomija",
      "Augmentacija i presađivanje kosti",
      "Frenulektomija",
      "Preprotetička kirurgija",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=900&q=80",
  },
  {
    id: "protetika",
    number: "05",
    title: "Protetika",
    tagline: "Restauracija funkcije i estetike",
    description:
      "Protetika vraća zubima formu i funkciju izgubljenu karijesom, traumom ili godinama trošenja. Koristimo najkvalitetnije materijale — cirkonij, keramiku — u suradnji s vrhunskim dentalnim laboratorijima.",
    details: [
      "Keramičke i cirkonijske krunice",
      "Mostovi na zubima i implantatima",
      "Parcijalne i totalne proteze",
      "Privremene protetičke nadogradnje",
      "CAD/CAM digitalna izrada",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=900&q=80",
  },
  {
    id: "parodontologija",
    number: "06",
    title: "Parodontologija",
    tagline: "Zdrave desni — temelj zdravog osmijeha",
    description:
      "Bolesti desni jedan su od najčešćih, a najčešće zanemarenih problema u usnoj šupljini. Pravovremenim liječenjem parodontitisa čuvamo zube od gubitka i zaustavljamo upalu koja može zahvatiti cijeli organizam.",
    details: [
      "Profesionalno čišćenje zubnog kamenca",
      "Kiretaža i dubinsko čišćenje",
      "Liječenje gingivitisa i parodontitisa",
      "Kirurška rekonstrukcija desni",
      "Maintenance parodontološka terapija",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1609840113589-b30e58eba19c?w=900&q=80",
  },
  {
    id: "prevencija-rtg",
    number: "07",
    title: "Prevencija i RTG dijagnostika",
    tagline: "Pravovremena dijagnoza, dugoročno zdravlje",
    description:
      "Prevencija je uvijek bolja od liječenja. Redovitim pregledima i suvremenom digitalnom dijagnostikom otkrivamo probleme u najranijem stadiju — kada su jednostavni i jeftini za rješavanje.",
    details: [
      "Preventivni stomatološki pregled",
      "Digitalna OPG panoramska snimka",
      "CBCT 3D snimanje (voxelna tomografija)",
      "Profesionalno čišćenje i poliranje",
      "Fluoridacija i pečaćenje fisura",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=900&q=80",
  },
  {
    id: "restaurativna-stomatologija",
    number: "08",
    title: "Restaurativna stomatologija",
    tagline: "Vraćamo zubima snagu i izgled",
    description:
      "Karijes, pukline i oštećenja zuba liječimo suvremenim materijalima koji su istovremeno čvrsti i estetski nevidljivi. Endodontska terapija spašava zube koje bi inače trebalo vaditi.",
    details: [
      "Kompozitni estetski ispuni",
      "Endodontska terapija (liječenje kanala)",
      "Keramički inlaji i onlaji",
      "Rekonstrukcija oštećenih zuba",
      "Biokompatibilni, BPA-free materijali",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900&q=80",
  },
  {
    id: "ortodoncija",
    number: "09",
    title: "Ortodoncija",
    tagline: "Ravni zubi u svakoj dobi",
    description:
      "Ortodontska terapija nije samo estetika — pravilno poravnati zubi lakše se čiste, manje troše i rjeđe uzrokuju probleme s čeljusnim zglobom. Terapiju prilagođavamo svakom pacijentu, od djece do odraslih.",
    details: [
      "Fiksni aparatić (metalni i estetski keramički)",
      "Invisalign prozirne ortodontske udlage",
      "Reteneri nakon završene terapije",
      "Rana ortodontska intervencija u djece",
      "Kombinirani ortodontsko-kirurški slučajevi",
    ],
    imgUrl:
      "https://images.unsplash.com/photo-1601333155159-9bf0e00ea7ce?w=900&q=80",
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const navScrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(services[0].id);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.08 }
    );
    pageRef.current
      ?.querySelectorAll(".reveal, .reveal-left, .reveal-right")
      .forEach((el) => revealObs.observe(el));
    return () => revealObs.disconnect();
  }, []);

  useEffect(() => {
    const activeObs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveId(e.target.id);
        }),
      { threshold: 0.25, rootMargin: "-120px 0px -55% 0px" }
    );
    services.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) activeObs.observe(el);
    });
    return () => activeObs.disconnect();
  }, []);

  // Keep active pill visible in the sticky nav
  useEffect(() => {
    const pill = navScrollRef.current?.querySelector<HTMLElement>(
      `[data-id="${activeId}"]`
    );
    if (pill)
      pill.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  return (
    <div ref={pageRef}>
      <Navbar />

      {/* ── Page banner ── */}
      <section className="bg-[var(--charcoal)] pt-44 pb-28 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[560px] h-[560px] rounded-full bg-[var(--green-primary)] opacity-[0.07] blur-3xl translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[var(--green-primary)] opacity-[0.04] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/30 mb-10">
            <a href="/" className="hover:text-white/60 transition-colors">
              Naslovnica
            </a>
            <span>/</span>
            <span className="text-[var(--green-primary)]">Usluge</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="section-label mb-5">Što nudimo</p>
              <h1
                className="heading-serif text-white mb-6"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Sveobuhvatna dentalna<br />
                <span className="text-[var(--green-primary)] italic">
                  medicina na jednom mjestu
                </span>
              </h1>
              <p className="text-white/55 leading-relaxed max-w-xl">
                Od estetske stomatologije i implantologije do ortodoncije i estetike lica
                — naš tim specijalista pokriva sve aspekte oralne i facijalne medicine.
              </p>
            </div>

            {/* Service count badge */}
            <div className="flex-shrink-0 border border-white/10 p-8 text-center min-w-[160px]">
              <div
                className="text-7xl font-light text-white leading-none mb-2"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                9
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                Specijaliziranih<br />usluga
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sticky service navigator ── */}
      <div className="sticky top-20 z-20 bg-white border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div
          ref={navScrollRef}
          className="max-w-7xl mx-auto px-6 lg:px-12 overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex items-center gap-0.5 py-3 min-w-max">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-id={s.id}
                className={`flex items-center gap-2 px-4 py-2 text-[11px] font-medium uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  activeId === s.id
                    ? "bg-[var(--green-primary)] text-white"
                    : "text-gray-400 hover:text-[var(--charcoal)] hover:bg-gray-50"
                }`}
              >
                <span className="opacity-40 font-light">{s.number}</span>
                {s.title}
              </a>
            ))}
            <div className="ml-6 pl-6 border-l border-gray-200 flex-shrink-0">
              <Link
                href="/kontakt"
                className="inline-flex items-center gap-1.5 bg-[var(--green-primary)] text-white px-4 py-2 text-[11px] font-medium uppercase tracking-wider hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                Zakažite termin <ArrowRight size={12} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service sections ── */}
      {services.map((service, i) => {
        const imageOnLeft = i % 2 === 0;
        const bg = i % 2 === 0 ? "bg-white" : "bg-[var(--cream)]";

        return (
          <Fragment key={service.id}>
            {/* Subtle About CTA — injected before service 5 (Protetika) */}
            {i === 4 && (
              <div className="bg-[var(--charcoal)] py-9">
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">
                      Upoznajte nas
                    </p>
                    <p className="text-white/60 text-sm leading-relaxed">
                      Stručan tim s više od 50 godina obiteljske tradicije stoji iza
                      svake od naših usluga.
                    </p>
                  </div>
                  <Link
                    href="/o-nama"
                    className="flex-shrink-0 flex items-center gap-2 text-[var(--green-primary)] hover:text-white text-sm font-medium transition-colors group"
                  >
                    <span>O timu i ordinaciji</span>
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            )}

            <section
              id={service.id}
              className={`${bg} scroll-mt-[128px] overflow-hidden`}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div
                  className={`grid lg:grid-cols-2 gap-0 min-h-[560px] ${
                    imageOnLeft ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  {/* Image */}
                  <div className="img-zoom overflow-hidden relative min-h-[340px] lg:min-h-0">
                    <img
                      src={service.imgUrl}
                      alt={service.title}
                      className="w-full h-full object-cover absolute inset-0"
                    />
                    {/* Number watermark */}
                    <div
                      className="absolute bottom-6 right-6 text-white/10 leading-none select-none pointer-events-none"
                      style={{
                        fontSize: "clamp(5rem, 10vw, 9rem)",
                        fontFamily: "var(--font-cormorant)",
                        fontWeight: 300,
                      }}
                    >
                      {service.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex flex-col justify-center py-16 reveal-${
                      imageOnLeft ? "right" : "left"
                    } ${imageOnLeft ? "lg:pl-16 xl:pl-20" : "lg:pr-16 xl:pr-20"}`}
                  >
                    <p className="section-label mb-3">{service.tagline}</p>
                    <h2
                      className="heading-serif text-[var(--charcoal)] mb-5"
                      style={{
                        fontSize: "clamp(2rem, 3.5vw, 3rem)",
                        fontFamily: "var(--font-cormorant)",
                      }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-8 text-[0.95rem]">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-10">
                      {service.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-2.5 text-sm text-gray-600"
                        >
                          <CheckCircle
                            size={15}
                            className="text-[var(--green-primary)] mt-0.5 flex-shrink-0"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4">
                      <Link href="/kontakt" className="btn-primary text-sm py-3.5 px-6">
                        Zakažite termin <ArrowRight size={15} />
                      </Link>
                      <a
                        href="tel:+38512916814"
                        className="text-sm text-gray-400 hover:text-[var(--green-primary)] transition-colors flex items-center gap-1.5"
                      >
                        <Phone size={13} />
                        01/2916-814
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        );
      })}

      {/* ── Final contact CTA ── */}
      <section className="bg-[var(--charcoal)] py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[var(--green-primary)] opacity-[0.07] blur-3xl" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="section-label mb-5">Kontaktirajte nas</p>
              <h2
                className="heading-serif text-white mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 4vw, 4.2rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Imate pitanja ili ste<br />
                <span className="text-[var(--green-primary)] italic">
                  spremni za termin?
                </span>
              </h2>
              <p className="text-white/50 leading-relaxed mb-10 max-w-md">
                Neovisno o tome trebate li savjet, procjenu ili konkretnu terapiju
                — naš tim je tu za vas. Prva konzultacija je besplatna.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/kontakt" className="btn-primary">
                  Idite na kontakt <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:+38512916814"
                  className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white hover:border-white/40 px-7 py-3.5 text-xs font-medium uppercase tracking-widest transition-all"
                >
                  <Phone size={15} /> 01/2916-814
                </a>
              </div>
            </div>

            {/* Info cards */}
            <div className="reveal delay-200 grid grid-cols-2 gap-3">
              {[
                {
                  label: "Radno vrijeme",
                  lines: ["Pon – Pet: 08–20h", "Subota: 08–14h"],
                },
                {
                  label: "Lokacija",
                  lines: ["Dankovečka 1a", "10040 Zagreb"],
                },
                {
                  label: "Telefon",
                  lines: ["01/2916-814"],
                },
                {
                  label: "E-mail",
                  lines: ["ordinacija@hrala.com.hr"],
                },
              ].map((card) => (
                <div
                  key={card.label}
                  className="border border-white/10 p-6 hover:border-[var(--green-primary)]/50 transition-colors"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[var(--green-primary)] mb-3">
                    {card.label}
                  </p>
                  {card.lines.map((l) => (
                    <p key={l} className="text-white/50 text-sm leading-relaxed">
                      {l}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
