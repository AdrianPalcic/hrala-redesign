"use client";
import { useEffect, useRef, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    q: "Je li prva konzultacija besplatna?",
    a: "Da — pregled i konzultacija su potpuno besplatni. Na prvom posjetu zajedno procjenjujemo vaše stanje, odgovaramo na sva pitanja i planiramo terapiju bez ikakve obveze ili pritiska.",
  },
  {
    q: "Kako zakazati termin?",
    a: "Termin možete zakazati telefonski pozivom na 01/2916-814, e-mailom na ordinacija@hrala.com.hr ili putem kontakt forme na ovoj stranici. Odgovaramo unutar jednog radnog dana.",
  },
  {
    q: "Što ako imam hitnu situaciju?",
    a: "U hitnim slučajevima — jak bol, slomljeni zub, upala ili ozljeda — nazovite nas odmah na 01/2916-814. Trudimo se primiti hitne slučajeve isti ili idući dan.",
  },
  {
    q: "Prihvaćate li HZZO pacijente?",
    a: "Prihvaćamo pacijente s uputnicom HZZO-a za određene usluge. Kontaktirajte nas za detalje o dostupnosti i uvjetima.",
  },
  {
    q: "Postoji li parkiranje u blizini?",
    a: "Uz ordinaciju dostupno je ulično parkiranje. Ordinacija je lako dostupna i gradskim prijevozom — autobusne linije zaustavljaju se u neposrednoj blizini Dankovečke.",
  },
];

const serviceOptions = [
  "Estetska stomatologija",
  "Implantologija",
  "Estetika lica",
  "Oralna kirurgija",
  "Protetika",
  "Parodontologija",
  "Prevencija i RTG dijagnostika",
  "Restaurativna stomatologija",
  "Ortodoncija",
  "Opći pregled / Konzultacija",
];

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [preferredTime, setPreferredTime] = useState("");

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

  const scrollToForm = () =>
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
            <span className="text-[var(--green-primary)]">Kontakt</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
            <div className="max-w-2xl">
              <p className="section-label mb-5">Kontakt</p>
              <h1
                className="heading-serif text-white mb-6"
                style={{
                  fontSize: "clamp(2.8rem, 5vw, 5rem)",
                  fontFamily: "var(--font-cormorant)",
                }}
              >
                Radujemo se<br />
                <span className="text-[var(--green-primary)] italic">
                  vašem dolasku
                </span>
              </h1>
              <p className="text-white/55 leading-relaxed max-w-lg mb-10">
                Nazovite, napišite ili jednostavno dođite — naš tim je tu da
                odgovori na sva pitanja i pronađe termin koji vam odgovara.
              </p>
              <button onClick={scrollToForm} className="btn-primary">
                Zakažite termin <ArrowRight size={15} />
              </button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-px flex-shrink-0">
              {[
                { value: "24h", label: "Povratni odgovor" },
                { value: "0 kn", label: "Prva konzultacija" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="border border-white/10 px-8 py-7 text-center min-w-[130px]"
                >
                  <div
                    className="text-4xl font-light text-white mb-1.5"
                    style={{ fontFamily: "var(--font-cormorant)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-white/35">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Three contact method cards ── */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100">
            {/* Phone */}
            <a
              href="tel:+38512916814"
              className="reveal bg-white p-10 group hover:bg-[var(--green-pale)] transition-colors"
            >
              <div className="w-12 h-12 bg-[var(--green-pale)] group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                <Phone size={20} className="text-[var(--green-primary)]" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                Nazovite nas
              </p>
              <p
                className="text-[1.75rem] text-[var(--charcoal)] mb-1 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                01/2916-814
              </p>
              <p className="text-xs text-gray-400 mb-7">
                Pon – Pet: 08–20h &nbsp;·&nbsp; Sub: 08–14h
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-[var(--green-primary)] font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                Pozovite odmah <ArrowRight size={12} />
              </span>
            </a>

            {/* Form — featured (dark) */}
            <button
              onClick={scrollToForm}
              className="reveal delay-100 bg-[var(--charcoal)] p-10 group hover:bg-[var(--green-primary)] transition-colors text-left"
            >
              <div className="w-12 h-12 bg-white/10 group-hover:bg-white/20 flex items-center justify-center mb-6 transition-colors">
                <Calendar size={20} className="text-white" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-white/40 mb-2">
                Kontakt forma
              </p>
              <p
                className="text-[1.75rem] text-white mb-1 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Zakazivanje termina
              </p>
              <p className="text-xs text-white/40 mb-7">
                Odgovaramo unutar jednog radnog dana
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-white font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                Idite na formu <ArrowRight size={12} />
              </span>
            </button>

            {/* Email */}
            <a
              href="mailto:ordinacija@hrala.com.hr"
              className="reveal delay-200 bg-white p-10 group hover:bg-[var(--green-pale)] transition-colors"
            >
              <div className="w-12 h-12 bg-[var(--green-pale)] group-hover:bg-white flex items-center justify-center mb-6 transition-colors">
                <Mail size={20} className="text-[var(--green-primary)]" />
              </div>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                E-mail
              </p>
              <p
                className="text-[1.75rem] text-[var(--charcoal)] mb-1 font-light leading-tight"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Pišite nam
              </p>
              <p className="text-xs text-gray-400 mb-7">
                ordinacija@hrala.com.hr
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs text-[var(--green-primary)] font-medium uppercase tracking-wider group-hover:gap-3 transition-all">
                Pošaljite e-mail <ArrowRight size={12} />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Map + Info ── */}
      <section className="bg-[var(--cream)]">
        <div className="grid lg:grid-cols-2">
          {/* Map */}
          <div className="h-[400px] lg:h-auto min-h-[400px] overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6!2d15.9819!3d45.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d72d!2sCentar+dentalne+medicine+Hrala!5e0!3m2!1shr!2shr!4v1"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "saturate(0.35) contrast(1.1)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija ordinacije Hrala"
            />
          </div>

          {/* Info */}
          <div className="reveal-right px-8 py-16 lg:px-16 lg:py-20">
            <p className="section-label mb-5">Pronađite nas</p>
            <h2
              className="heading-serif text-[var(--charcoal)] mb-10"
              style={{
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Posjetite nas u<br />
              <span className="text-[var(--green-primary)] italic">
                srcu Dubrave
              </span>
            </h2>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-[var(--green-primary)]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">
                    Adresa
                  </p>
                  <p className="font-medium text-[var(--charcoal)]">
                    Dankovečka 1a
                  </p>
                  <p className="text-sm text-gray-500">10040 Zagreb, Hrvatska</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Dankove%C4%8Dka+1a+Zagreb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 mt-2 text-xs text-[var(--green-primary)] hover:underline underline-offset-2"
                  >
                    Otvori u Google Maps <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-[var(--green-primary)]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    Radno vrijeme
                  </p>
                  <div className="space-y-1.5 text-sm">
                    {[
                      ["Pon – Pet", "08:00 – 20:00", false],
                      ["Subota", "08:00 – 14:00", false],
                      ["Nedjelja", "Zatvoreno", true],
                    ].map(([day, hours, closed]) => (
                      <div key={String(day)} className="flex justify-between gap-16">
                        <span className="text-gray-500">{day}</span>
                        <span
                          className={
                            closed
                              ? "text-gray-300"
                              : "font-medium text-[var(--charcoal)]"
                          }
                        >
                          {hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-11 h-11 bg-white flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-[var(--green-primary)]" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1.5">
                    Telefon & E-mail
                  </p>
                  <a
                    href="tel:+38512916814"
                    className="block font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors"
                  >
                    01/2916-814
                  </a>
                  <a
                    href="mailto:ordinacija@hrala.com.hr"
                    className="block text-sm text-gray-500 hover:text-[var(--green-primary)] transition-colors"
                  >
                    ordinacija@hrala.com.hr
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs text-gray-400 leading-relaxed">
                Dostupno ulično parkiranje · Javni gradski prijevoz u blizini
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form ── */}
      <section
        ref={formRef}
        className="bg-white py-28 scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="reveal text-center mb-14">
            <p className="section-label mb-4">Zakazivanje</p>
            <h2
              className="heading-serif text-[var(--charcoal)] mb-4"
              style={{
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Pošaljite nam upit<br />
              <span className="text-[var(--green-primary)] italic">
                ili zakažite termin
              </span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto leading-relaxed text-sm">
              Ispunite formu i javimo se unutar jednog radnog dana kako bismo
              potvrdili termin koji vam odgovara.
            </p>
          </div>

          {submitted ? (
            <div className="reveal text-center border border-[var(--green-primary)]/25 bg-[var(--green-pale)] p-16">
              <div className="w-16 h-16 bg-[var(--green-primary)] flex items-center justify-center mx-auto mb-7">
                <CheckCircle size={28} className="text-white" />
              </div>
              <h3
                className="text-3xl text-[var(--charcoal)] mb-3"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Hvala na upitu!
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 max-w-sm mx-auto">
                Vaša poruka je primljena. Kontaktirat ćemo vas unutar jednog
                radnog dana.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setPreferredTime("");
                }}
                className="text-sm text-[var(--green-primary)] underline underline-offset-4"
              >
                Pošaljite novi upit
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="reveal bg-white border border-gray-100 shadow-[0_8px_60px_rgba(0,0,0,0.07)] p-8 md:p-12 space-y-6"
            >
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    Ime *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vaše ime"
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] placeholder:text-gray-300 focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    Prezime *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Vaše prezime"
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] placeholder:text-gray-300 focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="vas@email.com"
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] placeholder:text-gray-300 focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+385 ..."
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] placeholder:text-gray-300 focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                  Usluga koja vas zanima
                </label>
                <div className="relative">
                  <select
                    className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors bg-white appearance-none cursor-pointer pr-10"
                  >
                    <option value="">Odaberite uslugu (opcionalno)</option>
                    {serviceOptions.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown
                    size={14}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-3">
                  Željeno vrijeme povratnog poziva
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Jutro (08–12h)", "Podne (12–16h)", "Poslijepodne (16–20h)"].map(
                    (t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() =>
                          setPreferredTime(preferredTime === t ? "" : t)
                        }
                        className={`px-4 py-2.5 text-[11px] font-medium uppercase tracking-wider border transition-all ${
                          preferredTime === t
                            ? "bg-[var(--green-primary)] text-white border-[var(--green-primary)]"
                            : "border-gray-200 text-gray-400 hover:border-[var(--green-primary)] hover:text-[var(--green-primary)]"
                        }`}
                      >
                        {t}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-2">
                  Poruka ili napomena
                </label>
                <textarea
                  rows={4}
                  placeholder="Opišite vaš upit, simptome ili željeni termin..."
                  className="w-full border border-gray-200 px-4 py-3.5 text-sm text-[var(--charcoal)] placeholder:text-gray-300 focus:outline-none focus:border-[var(--green-primary)] transition-colors resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-2 border-t border-gray-100">
                <p className="text-xs text-gray-400 leading-relaxed flex-1">
                  Slanjem forme pristajete na obradu osobnih podataka u svrhu
                  odgovora na vaš upit, sukladno GDPR propisima.
                </p>
                <button type="submit" className="btn-primary flex-shrink-0">
                  <Send size={14} /> Pošaljite upit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[var(--cream)] py-28 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="reveal mb-14">
            <p className="section-label mb-4">Česta pitanja</p>
            <h2
              className="heading-serif text-[var(--charcoal)]"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Imate pitanja?<br />
              <span className="text-[var(--green-primary)] italic">
                Možda već imamo odgovor.
              </span>
            </h2>
          </div>

          <div className="space-y-px">
            {faqs.map((faq, i) => (
              <div key={i} className="reveal bg-white">
                <button
                  className="w-full flex items-center justify-between gap-6 px-8 py-6 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="text-[var(--charcoal)] group-hover:text-[var(--green-primary)] transition-colors"
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.15rem",
                    }}
                  >
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-300 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === i
                        ? "rotate-180 text-[var(--green-primary)]"
                        : ""
                    }`}
                  />
                </button>
                <div
                  style={{
                    maxHeight: openFaq === i ? "200px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <p className="px-8 pb-7 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">
              Niste pronašli odgovor na vaše pitanje?
            </p>
            <a
              href="tel:+38512916814"
              className="inline-flex items-center gap-2 text-[var(--green-primary)] font-medium text-sm hover:underline underline-offset-4"
            >
              <Phone size={14} /> Nazovite nas: 01/2916-814
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
