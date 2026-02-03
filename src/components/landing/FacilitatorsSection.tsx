import netoPhoto from "@/assets/facilitators/neto-avila.jpg";
import flaviaPhoto from "@/assets/facilitators/flavia-atencio.jpg";
import joseLuisPhoto from "@/assets/facilitators/jose-luis-gutierrez.jpg";

const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Neto Ávila",
      role: "Facilitador",
      photo: netoPhoto,
    },
    {
      name: "Flavia Atencio",
      role: "Facilitadora",
      photo: flaviaPhoto,
    },
    {
      name: "José Luis Gutiérrez",
      role: "Facilitador",
      photo: joseLuisPhoto,
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-4">
          Tus facilitadores
        </h2>
        
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Un equipo que integra de forma equilibrada lo emocional con lo técnico
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className="bg-card border border-gold/20 rounded-lg p-8 shadow-sm"
            >
              {/* Foto circular */}
              <div className="flex justify-center mb-6">
                <img
                  src={facilitator.photo}
                  alt={facilitator.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gold/30"
                  style={facilitator.name === "Neto Ávila" ? { objectPosition: "center 20%" } : undefined}
                />
              </div>

              {/* Nombre y rol */}
              <div className="text-center">
                <h3 className="text-foreground font-serif text-xl mb-2">
                  {facilitator.name}
                </h3>
                <p className="text-gold/80 font-sans text-sm">
                  {facilitator.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
