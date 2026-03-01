import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, MapPin, Clock } from "lucide-react";
const CTASection = () => {
  return <section id="contacto" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-accent/10 to-medical-green/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Agenda tu Cita
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
              Empieza hoy a cuidar lo más importante: tu salud
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              No permitas que las dudas o el dolor limiten tus días. Agendar una consulta 
              es el primer paso hacia una versión más saludable de ti mismo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-medium px-8 py-6 text-base shadow-elevated">
                <a href="https://wa.me/522201414284" target="_blank" rel="noopener noreferrer">
                  <Calendar className="mr-2 h-5 w-5" />
                  Agendar Cita
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-6 text-base">
                <a href="https://wa.me/522201414284" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-accent" />
                <span>Consultorio ubicado en Torre Médica Pacífico, Piso 10, Consultorio 1007.  Calle de la Nao 19, 39670, Acapulco de Juarez, Gro., México. 
https://maps.app.goo.gl/qQNdygTrg4VRuc9q8?g_st=ipc
              </span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-accent" />
                <span>Lunes a Viernes: 9:00 - 18:00 hrs
¿Necesitas otro horario? Atendemos solicitudes especiales con cita previa. Contáctanos vía Whatsapp</span>
              </div>
            </div>
          </motion.div>

          {/* Card */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="bg-card p-10 rounded-3xl shadow-elevated border border-border/50">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Primera Consulta
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 pb-6 border-b border-border">
                <div className="p-3 rounded-xl bg-accent/10 text-accent">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Duración: 60 minutos</p>
                  <p className="text-muted-foreground text-sm">
                    Tiempo dedicado exclusivamente a tu caso
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-foreground">Incluye:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Historia clínica completa
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Exploración física integral
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Plan diagnóstico personalizado
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Orientación y resolución de dudas
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  *Consulta de seguimiento disponible con duración de 30 minutos
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-6 text-base">
                  Reservar Consulta
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default CTASection;