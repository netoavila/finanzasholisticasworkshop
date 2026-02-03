import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowLeft, CreditCard, Building, Lock, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import TransferModal from "@/components/TransferModal";
import Footer from "@/components/Footer";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
  description: string;
  features: string[];
  featured: boolean;
  stripeLink: string;
}

const plans: Plan[] = [
  {
    id: "esencial",
    name: "Esencial",
    price: "$800 MXN",
    priceNumber: 800,
    description: "Incluye:",
    features: [
      "Workshop 2 días / 3 horas x día (en vivo online por Zoom)",
      "Test Arquetipos Financieros Dominantes + resultado general",
      "Workbook descargable",
      "7 días de repetición (replay)",
    ],
    featured: false,
    stripeLink: "https://buy.stripe.com/3cIfZjgfd5gXeMD11v7Zu0l",
  },
  {
    id: "expansion",
    name: "Expansión",
    price: "$1,680 MXN",
    priceNumber: 1680,
    description: "Todo lo de Esencial, más:",
    features: [
      "Comunidad WhatsApp con acceso directo a facilitadores x 30 días",
      "Acceso a la grabación de por vida (descargable)",
      "Guías rápidas PDF: \"RLR en 1 hoja\" + \"Escalera del Inversionista\"",
      "Audioguía para reprogramar creencias limitantes",
    ],
    featured: true,
    stripeLink: "https://buy.stripe.com/8x214pgfddNtfQHeSl7Zu0k",
  },
  {
    id: "transformacion",
    name: "Transformación",
    price: "$3,360 MXN",
    priceNumber: 3360,
    description: "Todo lo de Expansión, más:",
    features: [
      "Sesión extra (grupo pequeño máximo 5 personas) con micrófono abierto",
      "Resultado y análisis ampliado del Test de arquetipos (incluye mapa personalizado de instrumentos)",
      "Monto total descontable al Retiro Boutique \"Finanzas Holísticas\" en Tepoztlán",
      "Sorteo de una sesión 1:1 para seguimiento personalizado",
    ],
    featured: false,
    stripeLink: "https://buy.stripe.com/cNifZj2on24LcEveSl7Zu0j",
  },
];

const ElegirPlan = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleTransferClick = (plan: Plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background py-12">
      <div className="container-narrow">
        {/* Back link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-text-secondary hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a información del workshop
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-h2 font-serif text-foreground mb-4">
            Elige tu plan y asegura tu lugar
          </h1>
          <p className="text-text-secondary">
            Workshop: 21 y 22 de febrero, 2026 • 10:00 AM - 1:00 PM
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-card rounded-lg p-6 flex flex-col ${
                plan.featured 
                  ? "border-2 border-gold shadow-gold-glow md:scale-[1.02]" 
                  : "border border-border"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold flex items-center gap-1 whitespace-nowrap">
                  <Star className="w-3 h-3" /> Más elegido
                </div>
              )}
              
              <h3 className="text-foreground font-serif text-xl mb-2">{plan.name}</h3>
              <p className="text-gold text-3xl font-serif mb-4">{plan.price}</p>
              
              <div className="border-t border-border pt-4 mb-6 flex-1">
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

              <div className="space-y-3 mt-auto">
                <a href={plan.stripeLink} target="_blank" rel="noopener noreferrer">
                  <Button 
                    variant="gold" 
                    size="lg" 
                    className={`w-full ${plan.featured ? "" : ""}`}
                  >
                    <CreditCard className="w-4 h-4" />
                    Pagar con Tarjeta de Crédito
                  </Button>
                </a>
                <Button 
                  variant="goldOutline" 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleTransferClick(plan)}
                >
                  <Building className="w-4 h-4" />
                  Pagar por Transferencia
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-6 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4" />
            <span>Pago seguro</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>Dudas: hola@finanzasholisticas.com</span>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Footer />
      </div>

      {/* Transfer Modal */}
      <TransferModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        plan={selectedPlan}
      />
    </main>
  );
};

export default ElegirPlan;
