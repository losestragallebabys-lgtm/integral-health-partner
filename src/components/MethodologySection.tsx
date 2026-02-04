import { motion } from "framer-motion";
import { Ear, Scan, FileText, Users } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Ear,
    title: "Escucha Activa",
    description: "Tu primera consulta es una conversación profunda sobre tu historial y estilo de vida. Dedico el tiempo necesario para entender tu caso.",
  },
  {
    number: "02",
    icon: Scan,
    title: "Valoración Integral",
    description: "Analizamos tu salud desde una perspectiva 360°, no solo el motivo de consulta. Cada detalle cuenta para un diagnóstico preciso.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Plan Personalizado",
    description: "Creamos una estrategia de tratamiento basada en evidencia científica y adaptada a tus necesidades reales y estilo de vida.",
  },
  {
    number: "04",
    icon: Users,
    title: "Seguimiento Continuo",
    description: "Te acompaño en cada etapa para ajustar el tratamiento y asegurar resultados. Tu progreso es mi prioridad.",
  },
];

const MethodologySection = () => {
  return (
    <section id="metodologia" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 -skew-x-12 transform origin-top-right" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Mi Metodología
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            El camino hacia tu bienestar
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso estructurado que garantiza atención de calidad en cada paso, 
            porque tu salud merece un enfoque profesional y humano.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex gap-6 p-8 rounded-2xl bg-card shadow-soft border border-border/50 hover:shadow-card transition-shadow"
            >
              <div className="flex-shrink-0">
                <span className="text-5xl font-serif font-bold text-accent/20">
                  {step.number}
                </span>
              </div>
              
              <div>
                <div className="inline-flex p-3 rounded-xl bg-accent/10 text-accent mb-4">
                  <step.icon className="h-6 w-6" />
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
