"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "estetska-stomatologija",
    number: "01",
    title: "Estetska stomatologija",
    description:
      "Ostvarite osmijeh koji ste uvijek željeli uz bijeljenje zuba, ljuskice, kompozitne ispune i cjelovitu estetsku obnovu.",
    imgUrl:
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&q=80",
  },
  {
    id: "implantologija",
    number: "02",
    title: "Implantologija",
    description:
      "Zamjena izgubljenih zuba implantima koji izgledaju i osjećaju se kao prirodni zubi, uz dugotrajne rezultate.",
    imgUrl:
      "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80",
  },
  {
    id: "estetika-lica",
    number: "03",
    title: "Estetika lica",
    description:
      "Botoks, fileri i tretmani za osvježavanje lica – prirodni rezultati koji naglašavaju vašu ljepotu.",
    imgUrl:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
  },
  {
    id: "oralna-kirurgija",
    number: "04",
    title: "Oralna kirurgija",
    description:
      "Vađenje zuba, cistektomija i druge kirurške zahvate obavljamo s maksimalnom preciznošću i minimalnom nelagodom.",
    imgUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
  },
  {
    id: "protetika",
    number: "05",
    title: "Protetika",
    description:
      "Krunice, mostovi, proteze – restauriramo funkciju i izgled vaših zuba uz najsuvremenije materijale.",
    imgUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80",
  },
  {
    id: "parodontologija",
    number: "06",
    title: "Parodontologija",
    description:
      "Prevencija i liječenje bolesti desni – zdrave desni temelj su zdravog osmjeha.",
    imgUrl:
      "https://images.unsplash.com/photo-1609840113589-b30e58eba19c?w=800&q=80",
  },
  {
    id: "prevencija-rtg",
    number: "07",
    title: "Prevencija i RTG",
    description:
      "Redoviti pregledi, čišćenje kamenca i dijagnostičke snimke za pravovremeno otkrivanje problema.",
    imgUrl:
      "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80",
  },
  {
    id: "restaurativna-stomatologija",
    number: "08",
    title: "Restaurativna stomatologija",
    description:
      "Ispuni, endodontsko liječenje i obnova zuba – vraćamo vašim zubima snagu i estetiku.",
    imgUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80",
  },
  {
    id: "ortodoncija",
    number: "09",
    title: "Ortodoncija",
    description:
      "Fiksni aparatić, Invisalign i reteneri za ravne zube i pravilan ugriz u svakoj dobi.",
    imgUrl:
      "https://images.unsplash.com/photo-1601333155159-9bf0e00ea7ce?w=800&q=80",
  },
];

export default function Services() {
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
    <section id="services" className="py-32 bg-white" ref={sectionRef}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="reveal">
            <p className="section-label mb-4">Što nudimo</p>
            <h2
              className="heading-serif text-[var(--charcoal)]"
              style={{
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Sveobuhvatna dentalna<br />
              <span className="text-[var(--green-primary)] italic">medicina na jednom mjestu</span>
            </h2>
          </div>
          <p className="reveal delay-200 text-gray-500 max-w-sm leading-relaxed lg:text-right">
            Naš tim specijalista pruža cjelovitu stomatološku i estetsku skrb uz
            najsuvremeniju tehnologiju i individualan pristup svakom pacijentu.
          </p>
        </div>
      </div>

      {/* Services grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100">
          {services.map((service, i) => (
            <Link
              key={service.number}
              href={`/usluge#${service.id}`}
              className={`reveal delay-${Math.min((i % 3) * 100 + 100, 300)} bg-white group cursor-pointer overflow-hidden`}
            >
              {/* Image */}
              <div className="img-zoom h-56 w-full overflow-hidden relative">
                <img
                  src={service.imgUrl}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[var(--green-primary)]/0 group-hover:bg-[var(--green-primary)]/20 transition-all duration-500" />
                <div className="absolute top-4 left-4 text-white/30 group-hover:text-white/60 transition-colors">
                  <span
                    className="font-serif text-5xl font-light"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {service.number}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7 border border-gray-100 border-t-0">
                <div className="flex items-start justify-between mb-3">
                  <h3
                    className="font-serif text-xl font-medium text-[var(--charcoal)] group-hover:text-[var(--green-primary)] transition-colors"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {service.title}
                  </h3>
                  <ArrowRight
                    size={16}
                    className="text-gray-300 group-hover:text-[var(--green-primary)] group-hover:translate-x-1 transition-all mt-1 flex-shrink-0 ml-2"
                  />
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CTA bar */}
      <div className="mt-20 bg-[var(--green-pale)] mx-6 lg:mx-0">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="reveal">
            <p className="section-label mb-2">Niste sigurni što vam treba?</p>
            <h3
              className="heading-serif text-[var(--charcoal)] text-3xl"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Zakažite konzultacije – besplatno.
            </h3>
          </div>
          <a href="#contact" className="btn-primary reveal delay-200 flex-shrink-0">
            Kontaktirajte nas <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
