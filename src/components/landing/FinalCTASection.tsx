import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
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
          Es momento de dar el paso
        </h2>
        
        <p className="text-text-secondary text-lg mb-8">
          6 horas que pueden cambiar tu relación con el dinero para siempre.
        </p>

        <Link to="/elegir-plan">
          <Button variant="gold" size="xl" className="mb-6">
            Quiero Expansión Financiera
          </Button>
        </Link>

        <div className="flex items-center justify-center gap-2 text-text-secondary">
          <Calendar className="w-5 h-5 text-gold" />
          <span>21 y 22 de febrero, 2026 • Online por Zoom</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
