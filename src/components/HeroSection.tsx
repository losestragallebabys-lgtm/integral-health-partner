import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Consultorio médico profesional" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          <motion.span initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6 border border-accent/30">
            Medicina Interna • Atención Integral
          </motion.span>

          <motion.h1 initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-primary-foreground leading-tight mb-6">Salud integral para una vida plena en Acapulco 

        </motion.h1>

          <motion.p initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
            Especialista en el diagnóstico de casos complejos y el manejo avanzado de 
            enfermedades crónicas. Recupera tu bienestar con una visión médica que va 
            más allá de los síntomas.
          </motion.p>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.3
        }} className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-base shadow-elevated">
              <a href="https://wa.me/522201414284" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Cita
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 py-6 text-base">
              <a href="https://wa.me/522201414284" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Contactar por WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.8,
          delay: 0.5
        }} className="mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-wrap gap-8 text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-semibold text-accent">7+</span>
                <span className="text-sm">Años de<br />experiencia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-semibold text-accent">3,000+</span>
                <span className="text-sm">Pacientes<br />atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-3xl font-serif font-semibold text-accent">100%</span>
                <span className="text-sm">Compromiso<br />con tu salud</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};
export default HeroSection;