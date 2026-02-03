import { Brain, Search, Rocket, CheckCircle, Map } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: Brain,
      title: "Entendimiento",
      description: "Sabrás que es lo que te dispara la ansiedad financiera y cómo regularlo",
    },
    {
      icon: Search,
      title: "Más claridad",
      description: "Certeza del tipo de inversionista que ya eres y como sacarle provecho",
    },
    {
      icon: Rocket,
      title: "No más parálisis",
      description: "Liberación de patrones limitantes hacia el dinero",
    },
    {
      icon: CheckCircle,
      title: "Confianza para elegir",
      description: "2–3 instrumentos del mercado alineados a ti (para tu etapa actual)",
    },
    {
      icon: Map,
      title: "Mapa simple de decisión",
      description: "Tu siguiente paso sin ruido y sin culpas",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-12">
          Lo que te llevas:
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full border-[1.5px] border-gold flex items-center justify-center">
                <result.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-foreground font-serif text-lg mb-2">{result.title}</h3>
              <p className="text-text-secondary text-sm">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
