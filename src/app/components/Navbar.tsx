"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Estetska stomatologija",
    "Implantologija",
    "Estetika lica",
    "Kirurgija",
    "Protetika",
    "Parodontologija",
    "Prevencija i RTG dijagnostika",
    "Restaurativna stomatologija",
    "Ortodoncija",
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--green-dark)] text-white/80 text-xs py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href="tel:+38512916814"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={11} />
              <span>01/2916-814</span>
            </a>
            <a
              href="mailto:ordinacija@hrala.com.hr"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={11} />
              <span>ordinacija@hrala.com.hr</span>
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} />
              <span>Dankovečka 1a, 10040 Zagreb</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors font-medium">HR</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">EN</a>
            <span className="text-white/30">|</span>
            <a href="#" className="hover:text-white transition-colors">IT</a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-400 ${
          scrolled
            ? "bg-white shadow-[0_2px_30px_rgba(0,0,0,0.08)] top-0"
            : "bg-white/95 backdrop-blur-sm top-0 md:top-8"
        }`}
        style={{ top: scrolled ? 0 : undefined }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[var(--green-primary)] flex items-center justify-center">
              <span className="text-white font-serif text-lg font-light tracking-wider">H</span>
            </div>
            <div>
              <div
                className="text-[var(--charcoal)] font-serif text-lg leading-tight tracking-wide"
                style={{ fontFamily: "var(--font-cormorant)" }}
              >
                Hrala
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[var(--green-primary)] font-light">
                Centar dentalne medicine
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="#hero"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              Naslovnica
            </Link>

            {/* Services dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide">
                Usluge
                <ChevronDown
                  size={14}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border-t-2 border-[var(--green-primary)] transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {services.map((service) => (
                  <a
                    key={service}
                    href="#services"
                    className="block px-5 py-3 text-sm text-[var(--charcoal)] hover:bg-[var(--green-pale)] hover:text-[var(--green-primary)] transition-colors border-b border-gray-50"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="#about"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              O nama
            </a>
            <a
              href="#gallery"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              Galerija
            </a>
            <a
              href="#virtual"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              360° Šetnja
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              Kontakt
            </a>

            <a href="#contact" className="btn-primary text-xs py-3 px-5">
              Zakažite termin
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-[var(--charcoal)]"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
      >
        <div className="p-8 flex flex-col gap-1">
          <a
            href="#"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Naslovnica
          </a>
          <a
            href="#services"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Usluge
          </a>
          <a
            href="#about"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            O nama
          </a>
          <a
            href="#gallery"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Galerija
          </a>
          <a
            href="#contact"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </a>

          <div className="mt-8 flex flex-col gap-4">
            <a href="tel:+38512916814" className="btn-primary justify-center">
              <Phone size={16} /> 01/2916-814
            </a>
            <a href="#contact" className="btn-outline justify-center" onClick={() => setMenuOpen(false)}>
              Zakažite termin
            </a>
          </div>

          <div className="mt-8 flex gap-4">
            <a href="#" className="text-sm font-medium text-[var(--green-primary)]">HR</a>
            <a href="#" className="text-sm text-gray-400">EN</a>
            <a href="#" className="text-sm text-gray-400">IT</a>
          </div>
        </div>
      </div>
    </>
  );
}
