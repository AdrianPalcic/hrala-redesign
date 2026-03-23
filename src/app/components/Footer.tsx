import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[var(--green-primary)] flex items-center justify-center">
                <span
                  className="text-white text-lg font-light"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  H
                </span>
              </div>
              <div>
                <div
                  className="text-white font-serif text-lg leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)" }}
                >
                  Hrala
                </div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--green-light)]">
                  Centar dentalne medicine
                </div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              Više od 20 godina stomatološke izvrsnosti u srcu Zagreba. Vaše
              povjerenje je naša motivacija.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-white/20 hover:border-[var(--green-primary)] hover:bg-[var(--green-primary)] flex items-center justify-center transition-all"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/20 hover:border-[var(--green-primary)] hover:bg-[var(--green-primary)] flex items-center justify-center transition-all"
              >
                <Instagram size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--green-light)] mb-6">
              Usluge
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                "Estetska stomatologija",
                "Implantologija",
                "Estetika lica",
                "Oralna kirurgija",
                "Protetika",
                "Parodontologija",
                "Prevencija i RTG",
                "Restaurativna stomatologija",
                "Ortodoncija",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-white/50 hover:text-[var(--green-light)] transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--green-light)] mb-6">
              Navigacija
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Naslovnica", "#"],
                ["O nama", "#about"],
                ["Galerija", "#gallery"],
                ["360° Virtualna šetnja", "#virtual"],
                ["Kontakt", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-[var(--green-light)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs uppercase tracking-widest text-[var(--green-light)] mb-4 mt-8">
              Jezik
            </h4>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-white font-medium">HR</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">EN</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">IT</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[var(--green-light)] mb-6">
              Kontakt
            </h4>
            <div className="space-y-4 text-sm">
              <a
                href="tel:+38512916814"
                className="flex items-center gap-3 text-white/50 hover:text-[var(--green-light)] transition-colors"
              >
                <Phone size={14} className="flex-shrink-0" />
                01/2916-814
              </a>
              <a
                href="mailto:ordinacija@hrala.com.hr"
                className="flex items-center gap-3 text-white/50 hover:text-[var(--green-light)] transition-colors"
              >
                <Mail size={14} className="flex-shrink-0" />
                ordinacija@hrala.com.hr
              </a>
              <div className="flex items-start gap-3 text-white/50">
                <MapPin size={14} className="flex-shrink-0 mt-0.5" />
                Dankovečka 1a,<br />10040 Zagreb, Hrvatska
              </div>
            </div>

            {/* Hours */}
            <div className="mt-8">
              <p className="text-xs uppercase tracking-widest text-[var(--green-light)] mb-3">
                Radno vrijeme
              </p>
              <div className="text-sm space-y-1.5">
                <div className="flex justify-between text-white/50">
                  <span>Pon – Pet</span>
                  <span>08:00 – 20:00</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Subota</span>
                  <span>08:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-white/30">
                  <span>Nedjelja</span>
                  <span>Zatvoreno</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>
            © {new Date().getFullYear()} Centar dentalne medicine Hrala. Sva
            prava pridržana.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">
              Privatnost
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              GDPR
            </a>
            <a href="#" className="hover:text-white/60 transition-colors">
              Kolačići
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
