const ShiftSection = () => {
  return (
    <section 
      className="section-padding"
      style={{
        background: "linear-gradient(180deg, #111214 0%, #0F1011 100%)"
      }}
    >
      <div className="container-narrow text-center">
        <h2 className="text-h2 font-serif text-foreground mb-8">
          No necesitas ser una persona experta en finanzas para entrar al mundo del dinero.
        </h2>

        <div className="max-w-2xl mx-auto space-y-6 text-text-secondary">
          <p>
            El sistema financiero suele favorecer perfiles orientados al control, el logro y el análisis.
          </p>
          <p>
            Pero eso no significa que tengas que convertirte en alguien distinto para invertir bien.
          </p>
          <p className="text-foreground font-medium">
            Puedes usar los mismos instrumentos desde tu propia forma de decidir y relacionarte con el dinero.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShiftSection;
