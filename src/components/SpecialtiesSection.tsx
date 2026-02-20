import { motion } from "framer-motion";
import { 
  Activity, 
  Search, 
  Shield, 
  Pill, 
  ClipboardCheck,
  Scale,
  ArrowRight
} from "lucide-react";

const specialties = [
  {
    icon: Activity,
    title: "Enfermedades Crónico-Degenerativas",
    description: "Control integral de diabetes, hipertensión y síndrome metabólico con un enfoque preventivo y personalizado.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Search,
    title: "Diagnóstico de Difícil Alcance",
    description: "Si aún no tienes respuestas, analizamos cada detalle para encontrar el origen de tu malestar.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Shield,
    title: "Enfermedades Infecciosas y Reumáticas",
    description: "Manejo experto de procesos inflamatorios y patologías por agentes externos.",
    color: "bg-medical-green/10 text-medical-green",
  },
  {
    icon: Pill,
    title: "Endocrinología y Metabolismo",
    description: "Equilibrio hormonal para un funcionamiento óptimo de tu organismo.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ClipboardCheck,
    title: "Valoraciones Preoperatorias",
    description: "Evaluamos tu riesgo quirúrgico con precisión para garantizar tu seguridad en el quirófano.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Scale,
    title: "Control de Peso",
    description: "Manejo médico integral del sobrepeso y la obesidad, con estrategias personalizadas que van más allá de las dietas convencionales.",
    color: "bg-medical-green/10 text-medical-green",
  },
];

const SpecialtiesSection = () => {
  return (
    <section id="especialidades" className="py-24 bg-card">
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
            Especialidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Atención especializada para casos complejos
          </h2>
          <p className="text-muted-foreground text-lg">
            No te conformes con respuestas superficiales. Me especializo en encontrar 
            soluciones donde otros no las han encontrado.
          </p>
        </motion.div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border/50 hover:shadow-card hover:border-accent/30 transition-all duration-300"
            >
              <div className={`inline-flex p-4 rounded-xl ${specialty.color} mb-6`}>
                <specialty.icon className="h-7 w-7" />
              </div>
              
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                {specialty.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {specialty.description}
              </p>

              <a
                href="#contacto"
                className="inline-flex items-center text-accent font-medium text-sm group-hover:gap-2 transition-all"
              >
                Saber más
                <ArrowRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
