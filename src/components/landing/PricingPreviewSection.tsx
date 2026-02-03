import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPreviewSection = () => {
  const plans = [
    {
      name: "Esencial",
      price: "$800 MXN",
      features: [
        "Workshop en vivo (6 horas)",
        "Test para Descubrir tu Arquetipo Financiero",
        "Workbook descargable",
        "Acceso a grabación por 7 días"
      ],
      featured: false,
    },
    {
      name: "Expansión",
      price: "$1,680 MXN",
      features: [
        "Todo lo de \"Esencial\" +",
        "30 días de Comunidad con los facilitadores",
        "Grabación workshop de por vida",
        "Guías de instrumentos financieros (PDF)",
        "Audioguía para reforzar conceptos"
      ],
      featured: true,
    },
    {
      name: "Transformación",
      price: "$3,360 MXN",
      features: [
        "Todo lo de \"Expansión\" +",
        "Sesión grupal de profundización",
        "Análisis detallado de tu arquetipo financiero",
        "Descuento para futuros eventos",
        "Entra al sorteo: sesión 1:1 con facilitadores"
      ],
      featured: false,
    },
  ];

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: '#0B0B0C' }}
    >
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-12">
          Elige tu nivel de profundidad
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card rounded-lg p-6 ${
                plan.featured 
                  ? "border-2 border-gold shadow-gold-glow scale-[1.02]" 
                  : "border border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3" /> Más elegido
                </div>
              )}
              
              <h3 className="text-foreground font-serif text-xl mb-2">{plan.name}</h3>
              <p className="text-gold text-2xl font-serif mb-6">{plan.price}</p>
              
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-gold" />
                    <span className="text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/elegir-plan">
            <Button variant="gold" size="lg">
              Elegir mi plan
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingPreviewSection;
