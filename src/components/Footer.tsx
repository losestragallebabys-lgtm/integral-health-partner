import { Stethoscope, Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
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
                <p className="font-serif font-semibold text-lg">Medicina Interna</p>
                <p className="text-xs text-primary-foreground/70">Estrada y Gallegos</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed max-w-md mb-6">Especialistas en el diagnóstico de casos complejos y el manejo avanzado de enfermedades crónicas. Tu salud integral es nuestra prioridad.


          </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/medicinainternaeg/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61564920093380" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@edumed.int?_r=1&_t=ZS-94O8ckI4mR6" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
                </svg>
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
                <span>Consultorio médico ubicado en Torre Médica del Pacífico, Piso 10, Consultorio 1007.  Calle de la Nao 19, 39670, Acapulco de Juarez, Gro., México.




                <br />[Ciudad, Dirección]</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <span>2201414284
7202943198
              </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <span>coke17@live.com 
adri.gap@icloud.com </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
      <div>
            <p>© 2024 Medicina Interna. Estrada & Gallegos. Todos los derechos reservados.</p>
            <p className="mt-2 text-primary-foreground/50 text-xs">
              Aviso de Publicidad COFEPRIS: Dr. Estrada Peña Jorge Uriel No. 2612072002A00012 | Dra. Gallegos Posada Adriana No. 2612072002A00013
            </p>
          </div>
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
    </footer>;};export default Footer;