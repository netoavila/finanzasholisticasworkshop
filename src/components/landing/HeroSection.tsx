import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.85) 50%, rgba(13,13,13,0.95) 100%)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-narrow text-center py-20 px-6">
        {/* Headline */}
        <h1 className="text-h1 font-serif text-foreground max-w-4xl mx-auto mb-6 animate-fade-in-up">
          Deja de postergar tu futuro financiero
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Un workshop de 6 horas para entender tu relación con el dinero y empezar a invertir de forma simple y alineada a ti.
        </p>

        {/* Anti-hype */}
        <div className="flex flex-col items-center gap-1 mb-10 text-text-secondary text-sm tracking-wide">
          <span>No es trading.</span>
          <span>No es "abundancia mágica".</span>
          <span>Es claridad emocional y financiera aplicada a instrumentos reales.</span>
        </div>

        {/* Info badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="flex items-center gap-2 text-text-secondary">
            <Calendar className="w-5 h-5 text-gold" />
            <span>Sáb 21 y Dom 22 Feb</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <Clock className="w-5 h-5 text-gold" />
            <span>10:00 AM - 1:00 PM</span>
          </div>
          <div className="flex items-center gap-2 text-text-secondary">
            <MapPin className="w-5 h-5 text-gold" />
            <span>Online por Zoom</span>
          </div>
        </div>

        {/* CTA Button */}
        <Link to="/elegir-plan">
          <Button variant="gold" size="xl">
            Reservar mi lugar
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
