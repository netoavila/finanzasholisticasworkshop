import { Lightbulb, Rocket, Map } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      icon: Lightbulb,
      title: "Claridad",
      description: "Entendimiento del tipo de inversionista que eres y cómo sacarle provecho",
    },
    {
      icon: Rocket,
      title: "No más parálisis",
      description: "Entiende qué te frena y cómo desbloquearte para actuar",
    },
    {
      icon: Map,
      title: "Mapa simple de decisión",
      description: "2–3 instrumentos alineados a ti para dar el siguiente paso sin ruido ni culpas",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-12">
          Lo que te llevas:
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
