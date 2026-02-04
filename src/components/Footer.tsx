import { Stethoscope, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-xl bg-primary-foreground/20">
                <Stethoscope className="h-6 w-6" />
              </div>
              <div>
                <p className="font-serif font-semibold text-lg">Dr. Estrada Peña Jorge Uriel</p>
                <p className="text-xs text-primary-foreground/70">Medicina Interna</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Especialista en el diagnóstico de casos complejos y el manejo avanzado 
              de enfermedades crónicas. Tu salud integral es mi prioridad.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Enlaces</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <a href="#sobre-mi" className="hover:text-accent transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-accent transition-colors">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-accent transition-colors">
                  Metodología
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-accent transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-accent transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-primary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-accent" />
                <span>Consultorio médico
Torre Médica Pacífico, Piso 10, Consultorio 1007.  Calle de la Nao 19, 39670, Acapulco de Juarez, Gro., México.  https://maps.app.goo.gl/qQNdygTrg4VRuc9q8?g_st=ipc
                <br />[Ciudad, Dirección]</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>+52 (55) 1234-5678</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>coke17@live.com
              </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>© 2024 Dr. García. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">
              Aviso de Privacidad
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;