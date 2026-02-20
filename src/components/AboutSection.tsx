import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";
import doctorPhoto from "@/assets/doctor-photo.jpg";
import doctor2Photo from "@/assets/doctor2-photo.jpg";

const AboutSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Universidad Autónoma Benito Juárez de Oaxaca con especialidad en Medicina Interna",
    },
    {
      icon: Award,
      title: "Certificaciones",
      description: "Consejo de Medicina Interna de México a nivel Nacional · Consejo de Medicina Interna de Guerrero",
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Tus aliados en la salud
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Como especialistas en Medicina Interna, entendemos que el cuerpo humano no 
              funciona en partes aisladas, sino como un sistema interconectado.
            </p>
            <p>
              Nuestro compromiso es acompañarte en el camino hacia una mejor calidad de vida, 
              combinando <strong className="text-foreground">rigor científico</strong> con 
              la <strong className="text-foreground">empatía</strong> que cada paciente merece.
            </p>
          </div>
        </motion.div>

        {/* Doctors Photos */}
        <div className="grid md:grid-cols-2 gap-10 mb-16">
          {/* Doctor 1 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl shadow-card overflow-hidden">
              <img
                src={doctorPhoto}
                alt="Médico internista"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-accent/10 -z-10" />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground">Dr. [Nombre]</h3>
              <p className="text-muted-foreground text-sm mt-1">Especialista en Medicina Interna</p>
            </div>
          </motion.div>

          {/* Doctor 2 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl shadow-card overflow-hidden">
              <img
                src={doctor2Photo}
                alt="Médico internista"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-2xl bg-primary/10 -z-10" />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground">Dr. [Nombre]</h3>
              <p className="text-muted-foreground text-sm mt-1">Especialista en Medicina Interna</p>
            </div>
          </motion.div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
      </div>
    </section>
  );
};

export default AboutSection;
