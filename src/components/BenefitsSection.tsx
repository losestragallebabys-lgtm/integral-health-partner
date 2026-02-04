import { motion } from "framer-motion";
import { Lightbulb, HeartPulse, ShieldCheck, Clock } from "lucide-react";

const benefits = [
  {
    icon: Lightbulb,
    title: "Claridad Diagnóstica",
    description: "Obtendrás respuestas concretas y un camino claro, especialmente en aquellos síntomas complejos que otros especialistas han pasado por alto.",
  },
  {
    icon: HeartPulse,
    title: "Mejora Real en tu Calidad de Vida",
    description: "Mi prioridad absoluta es que recuperes tu vitalidad. Trabajamos para que vivas con bienestar, no solo para gestionar una enfermedad.",
  },
  {
    icon: ShieldCheck,
    title: "Prevención Estratégica",
    description: "No solo reaccionamos al dolor; identificamos riesgos potenciales a tiempo para evitar complicaciones futuras y proteger tu salud.",
  },
  {
    icon: Clock,
    title: "Atención Humana y Sin Prisas",
    description: "Creo en la medicina con tiempo. Tendrás un espacio dedicado exclusivamente a escucharte, donde resolveremos todas tus dudas con paciencia.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-medical-green blur-3xl" />
      </div>

      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium text-sm tracking-wide uppercase">
            Propuesta de Valor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold mt-3 mb-6">
            ¿Por qué elegir una valoración integral conmigo?
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Mi enfoque no se limita a recetar medicamentos, sino a entender la raíz 
            de tus padecimientos para transformar tu día a día.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="p-4 rounded-xl bg-accent text-accent-foreground">
                  <benefit.icon className="h-7 w-7" />
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif font-semibold mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
