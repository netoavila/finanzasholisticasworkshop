import { Check } from "lucide-react";

const ContentSection = () => {
  const content = [
    "Arquetipos financieros + lenguaje interno del dinero",
    "Reprogramación de creencias de autosabotaje",
    "Storytelling para reescribir tu historia con el dinero",
    "Método RLR: riesgo, liquidez y rendimiento para comparar inversiones fácilmente",
    "Instrumentos reales: Bonos de gobierno, fondos, acciones, bienes raíces, cripto y más",
    "Cómo elegir 2–3 opciones alineadas a ti (sin agobiarte por buscar \"la inversión perfecta\")",
  ];

  return (
    <section 
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #111214 0%, #0F1011 100%)"
      }}
    >
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-12">
          Lo técnico, lo emocional y lo práctico.<br className="hidden md:block" /> En un solo lugar.
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {content.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
