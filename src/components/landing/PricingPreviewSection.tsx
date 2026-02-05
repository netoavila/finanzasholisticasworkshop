import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PricingPreviewSection = () => {
  const plans = [
    {
      name: "Esencial",
      price: "$800 MXN",
      description: "Incluye:",
      features: [
        "Workshop 2 días / 3 horas x día (en vivo online por Zoom)",
        "Test Arquetipos Financieros Dominantes + resultado general",
        "Workbook descargable",
        "7 días de repetición (replay)",
      ],
      featured: false,
    },
    {
      name: "Expansión",
      price: "$1,680 MXN",
      description: "Todo lo de Esencial, más:",
      features: [
        "Comunidad WhatsApp con acceso directo a facilitadores x 30 días",
        "Acceso a la grabación de por vida (descargable)",
        "Guías rápidas PDF: \"RLR en 1 hoja\" + \"Escalera del Inversionista\"",
        "Audioguía para reprogramar creencias limitantes",
      ],
      featured: true,
    },
    {
      name: "Transformación",
      price: "$3,360 MXN",
      description: "Todo lo de Expansión, más:",
      features: [
        "Sesión extra (grupo pequeño máximo 5 personas) con micrófono abierto",
        "Resultado y análisis ampliado del Test de arquetipos (incluye mapa personalizado de instrumentos)",
        "Monto total descontable al Retiro Boutique \"Finanzas Holísticas\" en Tepoztlán",
        "Sorteo de una sesión 1:1 para seguimiento personalizado",
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
              <p className="text-gold text-2xl font-serif mb-4">{plan.price}</p>
              
              <div className="border-t border-border pt-4 mb-6">
                <p className="text-text-muted text-sm mb-4">{plan.description}</p>
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
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
