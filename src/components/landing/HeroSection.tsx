import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Check } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  const benefits = [
    "Identificas tu patrón (arquetipo financiero) y por qué te sabotea.",
    "Reprogramas creencias que te han impedido accionar con claridad y confianza",
    "Aprendes a comparar opciones con el método RLR (Rendimiento–Liquidez–Riesgo).",
    "Te posicionas en tu realidad financiera mediante la Escalera del inversionista.",
    "Sales entendiendo 2–3 instrumentos alineados a tu perfil + el siguiente paso claro.",
  ];

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
          Aprende a invertir tu dinero con claridad y confianza, sin tener que convertirte en una persona experta en finanzas
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8">
          Un workshop de 6 horas para entender tu relación con el dinero y empezar a invertir de forma simple y alineada a ti.
        </p>

        {/* Anti-hype */}
        <div className="flex flex-col items-center gap-1 mb-10 text-text-muted text-sm tracking-wide">
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
          <Button variant="gold" size="xl" className="mb-12">
            Quiero Expansión Financiera
          </Button>
        </Link>

        {/* Benefit bullets */}
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-foreground text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
