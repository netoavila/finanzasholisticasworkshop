import netoPhoto from "@/assets/facilitators/neto-avila.jpg";
import flaviaPhoto from "@/assets/facilitators/flavia-atencio.jpg";
import joseLuisPhoto from "@/assets/facilitators/jose-luis-gutierrez.jpg";

const FacilitatorsSection = () => {
  const facilitators = [
    {
      name: "Neto Ávila",
      role: "Estrategia financiera real + decisiones prácticas sin estrés",
      photo: netoPhoto,
      photoPosition: "center 20%",
      bio: [
        "Neto es empresario y mentor con más de 15 años en la industria financiera, enfocado en poner a las personas primero y promover negocios más humanos.",
        "Es Ingeniero Industrial con Maestría en Calidad y Productividad, certificado en Psicología Positiva y con formación en Neuroeconomía y Economía Conductual.",
        "Su trabajo integra estructura, educación financiera simple y visión de calidad de vida, uniendo claridad emocional con decisiones técnicas reales. También es autor de 'No sé si despierte mañana', donde explora dinero y felicidad desde una perspectiva única."
      ],
      tags: ["Estrategia", "Educación financiera", "Calidad de vida"],
    },
    {
      name: "Flavia Atencio",
      role: "Narrativa interna + reescritura de historia con el dinero",
      photo: flaviaPhoto,
      photoPosition: "center 25%",
      bio: [
        "Con una sólida trayectoria como guionista, Flavia ha explorado por más de una década cómo las historias que contamos —y especialmente las que nos contamos a nosotros mismos— moldean la experiencia de vida, la identidad y la relación con la abundancia.",
        "Hoy integra su mirada narrativa con herramientas terapéuticas y enfoque transpersonal para acompañar procesos de transformación: reescribir la historia personal, transformar creencias limitantes y construir una relación con el dinero alineada con propósito y bienestar integral."
      ],
      tags: ["Storytelling", "Creencias", "Propósito"],
    },
    {
      name: "José Luis Gutiérrez",
      role: "Procesos emocionales profundos + transformación de creencias",
      photo: joseLuisPhoto,
      photoPosition: "center 30%",
      bio: [
        "José Luis transitó de contar historias en cine y televisión —con más de dos décadas como guionista, director y showrunner— hacia la facilitación de procesos de transformación profunda, reconociendo que cada persona es autora de su propia historia de sanación.",
        "Su enfoque integra la comprensión de patrones emocionales inconscientes, acompañamiento terapéutico y trabajo de exploración interior, para reprogramar creencias limitantes, especialmente en temas de abundancia y dinero. Actualmente reside en Tepoztlán, donde facilita retiros de transformación."
      ],
      tags: ["Sanación", "Patrones emocionales", "Transformación"],
    },
  ];

  return (
    <section 
      className="section-padding relative"
      style={{ backgroundColor: '#0F1B1A' }}
    >
      {/* Textura grain/papel */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '150px 150px',
          mixBlendMode: 'overlay',
        }}
      />
      <div className="container-narrow relative z-10">
        <h2 className="text-h2 font-serif text-foreground text-center mb-4">
          Tus facilitadores
        </h2>
        
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Un equipo que integra de forma equilibrada lo emocional con lo técnico
        </p>

        <div className="flex flex-col gap-8">
          {facilitators.map((facilitator, index) => (
            <div
              key={index}
              className="bg-card border border-gold/20 rounded-lg p-6 md:p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Foto y nombre - columna izquierda */}
                <div className="flex flex-col items-center md:items-start md:min-w-[200px]">
                  <img
                    src={facilitator.photo}
                    alt={facilitator.name}
                    className="w-28 h-28 rounded-full object-cover border-2 border-gold/30 mb-4"
                    style={facilitator.photoPosition ? { objectPosition: facilitator.photoPosition, objectFit: 'cover' } : { objectFit: 'cover' }}
                  />
                  <h3 className="text-foreground font-serif text-xl mb-2 text-center md:text-left">
                    {facilitator.name}
                  </h3>
                  <p className="text-gold text-sm font-medium text-center md:text-left leading-snug">
                    {facilitator.role}
                  </p>
                </div>

                {/* Biografía y tags - columna derecha */}
                <div className="flex-1 flex flex-col">
                  <div className="space-y-4 mb-6">
                    {facilitator.bio.map((paragraph, pIndex) => (
                      <p 
                        key={pIndex} 
                        className="text-text-secondary text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {facilitator.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="px-3 py-1 bg-gold/10 border border-gold/20 rounded-full text-gold text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacilitatorsSection;
