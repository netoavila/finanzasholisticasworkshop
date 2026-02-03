import { Button } from "@/components/ui/button";
import { Calendar, Lock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const FinalCTASection = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/90" />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center">
        <h2 className="text-h2 font-serif text-foreground mb-4">
          La claridad que buscas está a 6 horas de distancia
        </h2>
        
        <p className="text-text-secondary text-lg mb-8">
          6 horas que pueden cambiar tu relación con el dinero para siempre.
        </p>

        <Link to="/elegir-plan">
          <Button variant="gold" size="xl" className="mb-6">
            Reservar mi lugar
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-2 text-text-secondary mb-8">
          <Calendar className="w-5 h-5 text-gold" />
          <span>21 y 22 de febrero, 2026 • Online por Zoom</span>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>Dudas: gestion@destresa.mx</span>
          </div>
          <a 
            href="https://wa.me/5218181132483" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp: +52 1 81 8113 2483</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
