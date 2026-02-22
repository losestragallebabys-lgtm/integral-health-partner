import { motion } from "framer-motion";
import { Award, GraduationCap, Heart, Stethoscope } from "lucide-react";
import doctorMan from "@/assets/doctor-man.jpg";
import doctorWoman from "@/assets/doctor-woman.jpg";

const doctors = [
  {
    photo: doctorMan,
    name: "Dr. Estrada Peña Jorge Uriel",
    specialty: "Medicina Interna",
  },
  {
    photo: doctorWoman,
    name: "Dra. Gallegos Posada Adriana",
    specialty: "Medicina Interna",
  },
];

const credentials = [
  {
    icon: GraduationCap,
    title: "Formación Académica",
    description: "Universidad Nacional con especialidad en Medicina Interna",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description: "Universidad Autónoma Benito Juárez de Oaxaca con especialidad en Medicina Interna. Rotaciones a Ciudad de México como CMN Siglo XXI y CMN La Raza.",
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

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="py-24 bg-gradient-subtle">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Sobre nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Tus aliados en la salud
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Como especialistas en Medicina Interna, entendemos que el cuerpo humano funciona como un sistema interconectado. Nuestro compromiso es acompañarte con{" "}
            <strong className="text-foreground">rigor científico</strong> y la{" "}
            <strong className="text-foreground">empatía</strong> que cada paciente merece.
          </p>
        </motion.div>

        {/* Doctors side by side */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card">
                <img
                  src={doctor.photo}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent rounded-b-2xl">
                <h3 className="font-serif font-semibold text-primary-foreground text-xl">
                  {doctor.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  {doctor.specialty}
                </p>
              </div>
            </motion.div>
          ))}
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
              <p className="text-muted-foreground text-xs">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
