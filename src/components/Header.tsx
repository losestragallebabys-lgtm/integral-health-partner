import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, Stethoscope } from "lucide-react";

const navLinks = [
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#metodologia", label: "Metodología" },
  { href: "#testimonios", label: "Testimonios" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className={`p-2 rounded-xl transition-colors ${
            isScrolled ? "bg-primary text-primary-foreground" : "bg-primary-foreground/20 text-primary-foreground"
          }`}>
            <Stethoscope className="h-6 w-6" />
          </div>
          <div>
            <p className={`font-serif font-semibold text-lg transition-colors ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}>
              Dr. García
            </p>
            <p className={`text-xs transition-colors ${
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            }`}>
              Medicina Interna
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-6"
          >
            Agendar Cita
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            isScrolled 
              ? "text-foreground hover:bg-muted" 
              : "text-primary-foreground hover:bg-primary-foreground/10"
          }`}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="lg:hidden absolute top-full left-0 right-0 bg-card shadow-elevated border-t border-border"
        >
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground font-medium py-2 hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium mt-2"
            >
              Agendar Cita
            </Button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
