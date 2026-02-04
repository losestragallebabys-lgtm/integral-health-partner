import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "Paciente desde 2020",
    content: "Después de años sin respuestas, finalmente encontré un médico que se tomó el tiempo de escucharme. El diagnóstico fue preciso y el tratamiento cambió mi vida.",
    rating: 5,
  },
  {
    name: "Roberto Hernández",
    role: "Paciente desde 2019",
    content: "La atención es excepcional. No solo me explicó mi condición de forma clara, sino que me dio herramientas para mejorar mi calidad de vida día a día.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Paciente desde 2021",
    content: "Por fin un médico que no tiene prisa. Cada consulta es una experiencia de aprendizaje sobre mi propia salud. Totalmente recomendado.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="py-24 bg-card">
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
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-3 mb-6">
            Lo que dicen mis pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            La confianza de quienes han recorrido este camino hacia el bienestar 
            es mi mejor carta de presentación.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-background border border-border/50 shadow-soft hover:shadow-card transition-shadow"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 h-10 w-10 text-accent/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-secondary-foreground">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
