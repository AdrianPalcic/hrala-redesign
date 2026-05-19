"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

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
    { label: "Estetska stomatologija", id: "estetska-stomatologija" },
    { label: "Implantologija", id: "implantologija" },
    { label: "Estetika lica", id: "estetika-lica" },
    { label: "Oralna kirurgija", id: "oralna-kirurgija" },
    { label: "Protetika", id: "protetika" },
    { label: "Parodontologija", id: "parodontologija" },
    { label: "Prevencija i RTG dijagnostika", id: "prevencija-rtg" },
    { label: "Restaurativna stomatologija", id: "restaurativna-stomatologija" },
    { label: "Ortodoncija", id: "ortodoncija" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--green-primary)] text-white/80 text-xs py-2 hidden md:block">
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
        <div className="max-w-7xl mx-auto px-6 flex items-center z-50 justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/hrala-logo.png" width={300} height={300} alt="Hrala logo" className="!w-[180px] sm:!w-[300px] !h-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
 

            {/* Services dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/usluge" className="flex items-center gap-1 text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide">
                Usluge
                <ChevronDown
                  size={14}
                  className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                />
              </Link>
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white shadow-xl border-t-2 border-[var(--green-primary)] transition-all duration-200 ${
                  servicesOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/usluge#${service.id}`}
                    className="block px-5 py-3 text-sm text-[var(--charcoal)] hover:bg-[var(--green-pale)] hover:text-[var(--green-primary)] transition-colors border-b border-gray-50"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/o-nama"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              O nama
            </Link>
            <Link
              href="/galerija"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              Galerija
            </Link>
            <Link
            target="_blank"
              href="https://hrala.com.hr/virtualna-setnja/"
              className="text-sm font-medium text-[var(--charcoal)] hover:text-[var(--green-primary)] transition-colors tracking-wide"
            >
              360° Šetnja
            </Link>

            <Link href="/kontakt" className="btn-primary text-xs py-3 px-5">
              Zakažite termin
            </Link>
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
        className={`fixed inset-0 z-50 bg-white transition-all duration-300 lg:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ paddingTop: "5rem" }}
      >
        <div className="p-8 flex flex-col gap-1">
      
          <Link
            href="/usluge"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Usluge
          </Link>
          <Link
            href="/o-nama"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            O nama
          </Link>
          <Link
            href="/galerija"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            Galerija
          </Link>
          <Link
            target="_blank"
              href="https://hrala.com.hr/virtualna-setnja/"
            className="py-4 text-xl border-b border-gray-100 font-serif text-[var(--charcoal)]"
            style={{ fontFamily: "var(--font-cormorant)" }}
            onClick={() => setMenuOpen(false)}
          >
            360° Šetnja
          </Link>
         

          <div className="mt-8 flex flex-col gap-4">
            <a href="tel:+38512916814" className="btn-primary justify-center">
              <Phone size={16} /> 01/2916-814
            </a>
            <Link href="/kontakt" className="btn-outline justify-center" onClick={() => setMenuOpen(false)}>
              Zakažite termin
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
