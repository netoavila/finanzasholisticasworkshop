const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Neto Ávila",
      role: "Facilitador",
      initial: "N",
      // TODO: Reemplazar con foto real cuando esté disponible
      // photo: "/assets/facilitators/neto-avila.jpg"
    },
    {
      name: "Flavia Atencio",
      role: "Facilitadora",
      initial: "F",
      // TODO: Reemplazar con foto real cuando esté disponible
      // photo: "/assets/facilitators/flavia-atencio.jpg"
    },
    {
      name: "José Luis Gutiérrez",
      role: "Facilitador",
      initial: "J",
      // TODO: Reemplazar con foto real cuando esté disponible
      // photo: "/assets/facilitators/jose-luis-gutierrez.jpg"
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-h2 font-serif text-foreground text-center mb-4">
          Tus facilitadores
        </h2>
        
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Un equipo que integra lo emocional/personal con lo financiero/técnico: claridad interna + decisiones reales.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className="bg-card border border-gold/20 rounded-lg p-8 shadow-sm"
            >
              {/* Foto circular o inicial */}
              <div className="flex justify-center mb-6">
                {facilitator.photo ? (
                  <img
                    src={facilitator.photo}
                    alt={facilitator.name}
                    className="w-24 h-24 rounded-full object-cover border-2 border-gold/30"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full border-2 border-gold/30 flex items-center justify-center bg-background-secondary">
                    <span className="text-gold text-3xl font-serif">
                      {facilitator.initial}
                    </span>
                  </div>
                )}
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

