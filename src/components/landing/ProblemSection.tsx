import { ChevronRight } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    "Sabes trabajar por dinero, pero no sabes cómo hacer que el dinero trabaje para ti",
    "Solo has probado bancos, bienes raíces, seguros de ahorro, aunque sabes que hay más",
    "Lees, tomas cursos, ves videos, pides opiniones, pero siempre postergas tomar acción",
    "Te da pánico \"mover\" tu dinero a algo más complejo.",
    "Por fuera funcionas… por dentro hay tensión y culpa.",
    "Ves a otros avanzar y tú sigues en el mismo lugar, mientras el reloj sigue su marcha.",
  ];

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: '#0B0B0C' }}
    >
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-6">
          Si estás esperando "el momento perfecto"…<br className="hidden md:block" /> probablemente vas a seguir esperando.
        </h2>

        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          La mayoría intenta invertir sin entenderse primero y se autosabotean.
          O terminan paralizados ante demasiadas opciones, demasiadas voces, demasiado ruido.
        </p>

        <div className="max-w-2xl mx-auto space-y-4 mb-12">
          {problems.map((problem, index) => (
            <div key={index} className="flex items-start gap-4">
              <ChevronRight className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{problem}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            El problema no es solo falta de información.<br />
            <span className="text-gold font-medium">Es falta de claridad y confianza interna + un sistema simple para decidir que reduzca el ruido.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
