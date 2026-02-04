import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Universidad Nacional con especialidad en Medicina Interna",
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Consejo Nacional de Medicina Interna",
    },
    {
      icon: Stethoscope,
      title: "Experiencia Clínica",
      description: "Hospitales de alta especialidad",
    },
    {
      icon: Heart,
      title: "Vocación",
      description: "Compromiso genuino con cada paciente",
    },
  ];

  return (
    <section id="sobre-mi" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-card shadow-card overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-secondary">
                <div className="text-center p-8">
                  <Stethoscope className="h-20 w-20 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground text-sm">
                    Foto del Dr./Dra.
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-accent/10 -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl border-2 border-primary/20 -z-10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-accent font-medium text-sm tracking-wide uppercase">
              Sobre mí
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
              Tu aliado en la salud
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Como especialista en Medicina Interna, entiendo que el cuerpo humano no 
                funciona en partes aisladas, sino como un sistema interconectado.
              </p>
              <p>
                Mi compromiso es acompañarte en el camino hacia una mejor calidad de vida, 
                combinando <strong className="text-foreground">rigor científico</strong> con 
                la <strong className="text-foreground">empatía</strong> que cada paciente merece.
              </p>
              <p>
                Mi objetivo no es solo tratar la enfermedad, sino entender tu historia para 
                devolverte la tranquilidad.
              </p>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {credentials.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-shadow"
                >
                  <item.icon className="h-8 w-8 text-accent mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-xs">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
