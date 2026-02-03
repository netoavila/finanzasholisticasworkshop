import { Check, X } from "lucide-react";

const AudienceSection = () => {
  const forWhom = [
    "Personas con buenos ingresos que quieren dar el siguiente paso con su dinero",
    "Quienes tienen ahorro pero no se atreven a moverlo con confianza",
    "Emprendedores que dependen solo de su negocio y quieren que su dinero trabaje para ellos",
  ];

  const notFor = [
    "\"Hacerme rico rápido\"",
    "Recetas mágicas",
    "Si no estás dispuesto/a a mirar tu relación con el dinero",
  ];

  return (
    <section 
      className="section-padding"
      style={{ backgroundColor: '#111214' }}
    >
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-8">
          {/* For whom */}
          <div className="bg-card border border-gold/20 rounded-lg p-8">
            <h3 className="text-h3 font-serif text-foreground mb-6">Para quién sí</h3>
            <div className="space-y-4">
              {forWhom.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Not for */}
          <div className="bg-card border border-border rounded-lg p-8">
            <h3 className="text-h3 font-serif text-foreground mb-6">Para quién no</h3>
            <div className="space-y-4">
              {notFor.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-text-muted flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
