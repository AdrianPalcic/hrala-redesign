"use client";
import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export default function Contact() {
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
      { threshold: 0.08 }
    );
    const elements = sectionRef.current?.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="bg-[var(--cream)]" ref={sectionRef}>
      {/* Map full width */}
      <div className="w-full h-72 lg:h-96 reveal overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6!2d15.9819!3d45.7783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d72d!2sCentar+dentalne+medicine+Hrala!5e0!3m2!1shr!2shr!4v1"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "saturate(0.5) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Hrala ordinacija lokacija"
        />
      </div>

      {/* Contact content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Info */}
          <div className="reveal-left">
            <p className="section-label mb-5">Kontakt</p>
            <h2
              className="heading-serif text-[var(--charcoal)] mb-8"
              style={{
                fontSize: "clamp(2.2rem, 3.5vw, 3.5rem)",
                fontFamily: "var(--font-cormorant)",
              }}
            >
              Radujemo se<br />
              <span className="text-[var(--green-primary)] italic">vašem dolasku</span>
            </h2>

            <div className="space-y-6">
              <a
                href="tel:+38512916814"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 bg-[var(--green-pale)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--green-primary)] transition-colors">
                  <Phone
                    size={18}
                    className="text-[var(--green-primary)] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Telefon
                  </p>
                  <p className="font-medium text-[var(--charcoal)] group-hover:text-[var(--green-primary)] transition-colors">
                    01/2916-814
                  </p>
                </div>
              </a>

              <a
                href="mailto:ordinacija@hrala.com.hr"
                className="flex items-start gap-5 group"
              >
                <div className="w-12 h-12 bg-[var(--green-pale)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--green-primary)] transition-colors">
                  <Mail
                    size={18}
                    className="text-[var(--green-primary)] group-hover:text-white transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Email
                  </p>
                  <p className="font-medium text-[var(--charcoal)] group-hover:text-[var(--green-primary)] transition-colors">
                    ordinacija@hrala.com.hr
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[var(--green-pale)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[var(--green-primary)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">
                    Adresa
                  </p>
                  <p className="font-medium text-[var(--charcoal)]">
                    Dankovečka 1a, 10040 Zagreb
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-[var(--green-pale)] flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-[var(--green-primary)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-2">
                    Radno vrijeme
                  </p>
                  <div className="space-y-1 text-sm">
                    <div className="flex gap-8">
                      <span className="text-gray-500 w-28">Pon – Pet</span>
                      <span className="font-medium text-[var(--charcoal)]">
                        08:00 – 20:00
                      </span>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-gray-500 w-28">Subota</span>
                      <span className="font-medium text-[var(--charcoal)]">
                        08:00 – 14:00
                      </span>
                    </div>
                    <div className="flex gap-8">
                      <span className="text-gray-500 w-28">Nedjelja</span>
                      <span className="text-gray-400">Zatvoreno</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="reveal-right">
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <h3
                className="heading-serif text-2xl text-[var(--charcoal)] mb-8"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Pošaljite nam poruku
              </h3>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Ime
                    </label>
                    <input
                      type="text"
                      placeholder="Vaše ime"
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                      Prezime
                    </label>
                    <input
                      type="text"
                      placeholder="Vaše prezime"
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="vas@email.com"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    placeholder="+385 ..."
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Usluga
                  </label>
                  <select className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-500 focus:outline-none focus:border-[var(--green-primary)] transition-colors bg-white">
                    <option value="">Odaberite uslugu</option>
                    <option>Estetska stomatologija</option>
                    <option>Implantologija</option>
                    <option>Ortodoncija</option>
                    <option>Protetika</option>
                    <option>Kirurgija</option>
                    <option>Parodontologija</option>
                    <option>Estetika lica</option>
                    <option>Prevencija i RTG</option>
                    <option>Restaurativna stomatologija</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Poruka
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Opišite vaš upit ili željeni termin..."
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-[var(--charcoal)] focus:outline-none focus:border-[var(--green-primary)] transition-colors resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={15} /> Pošaljite poruku
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
