import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, MessageCircle, Brain, Calendar, Clock, MapPin, CalendarPlus, Mail } from "lucide-react";
import Footer from "@/components/Footer";

const Bienvenido = () => {
  const [searchParams] = useSearchParams();
  const metodo = searchParams.get("metodo");

  const getPaymentMessage = () => {
    if (metodo === "stripe") {
      return "Hemos recibido tu pago. Revisa tu email para el recibo.";
    } else if (metodo === "transferencia") {
      return "Hemos recibido tu solicitud. Confirmaremos tu pago por email en las próximas 24 horas hábiles.";
    }
    return "Tu inscripción ha sido registrada.";
  };

  return (
    <main className="min-h-screen bg-background py-16">
      <div className="container-narrow max-w-2xl">
        {/* Success icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full border-[3px] border-gold flex items-center justify-center animate-scale-in">
          <Check className="w-10 h-10 text-gold" />
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-h2 font-serif text-foreground mb-4">
            ¡Bienvenido/a al Workshop!
          </h1>
          <p className="text-text-secondary">
            Tu lugar está confirmado para el 21 y 22 de febrero
          </p>
        </div>

        {/* Payment status */}
        <div className="bg-background-secondary border border-border rounded-lg p-4 text-center mb-8">
          <p className="text-foreground">{getPaymentMessage()}</p>
        </div>

        {/* Steps section */}
        <div className="mb-8">
          <h2 className="text-h3 font-serif text-foreground text-center mb-6">
            Tus siguientes pasos
          </h2>

          {/* Step 1: WhatsApp */}
          <div className="bg-background-secondary border border-border rounded-xl p-6 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-whatsapp" />
              </div>
              <span className="text-gold-muted text-xs uppercase tracking-wider font-medium">Paso 1</span>
            </div>
            <h3 className="text-foreground font-serif text-lg mb-2">Únete a la comunidad</h3>
            <p className="text-text-secondary text-sm mb-4">
              Entra al grupo de WhatsApp donde compartiremos información, recordatorios y material previo al workshop.
            </p>
            <a href="https://chat.whatsapp.com/XXXXXX" target="_blank" rel="noopener noreferrer">
              <Button variant="whatsapp" size="lg">
                <MessageCircle className="w-4 h-4" />
                Unirme al Grupo de WhatsApp
              </Button>
            </a>
          </div>

          {/* Step 2: Test */}
          <div className="bg-background-secondary border border-border rounded-xl p-6 mb-4">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <Brain className="w-5 h-5 text-gold" />
              </div>
              <span className="text-gold-muted text-xs uppercase tracking-wider font-medium">Paso 2</span>
            </div>
            <h3 className="text-foreground font-serif text-lg mb-2">Realiza tu Test de Arquetipos</h3>
            <p className="text-text-secondary text-sm mb-4">
              Antes del workshop, completa el Test de Arquetipos Financieros. Toma aproximadamente 10 minutos y nos ayudará a personalizar tu experiencia.
            </p>
            <a href="https://example.com/test-arquetipos" target="_blank" rel="noopener noreferrer">
              <Button variant="goldOutline" size="lg">
                <Brain className="w-4 h-4" />
                Hacer el Test Ahora
              </Button>
            </a>
            <p className="text-text-muted text-xs mt-3 flex items-center gap-2">
              <Clock className="w-3 h-3" />
              ~10 minutos • Recibirás tu resultado por email
            </p>
          </div>

          {/* Event info */}
          <div className="bg-background-secondary border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full border border-gold flex items-center justify-center">
                <Calendar className="w-5 h-5 text-gold" />
              </div>
              <span className="text-gold-muted text-xs uppercase tracking-wider font-medium">Recuerda</span>
            </div>

            <div className="bg-background-tertiary rounded-lg p-4 space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">Sábado 21 de febrero, 2026</p>
                  <p className="text-text-secondary text-sm">10:00 AM - 1:00 PM (hora Ciudad de México)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">Domingo 22 de febrero, 2026</p>
                  <p className="text-text-secondary text-sm">10:00 AM - 1:00 PM (hora Ciudad de México)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-foreground">Online por Zoom</p>
                  <p className="text-text-secondary text-sm">(El link se enviará por email y WhatsApp)</p>
                </div>
              </div>
            </div>

            <Button variant="goldOutline" size="default" className="mt-4">
              <CalendarPlus className="w-4 h-4" />
              Agregar a mi Calendario
            </Button>
          </div>
        </div>

        {/* Questions */}
        <div className="bg-background-secondary border border-border rounded-lg p-6 text-center">
          <h3 className="text-foreground font-medium mb-2">¿Tienes dudas?</h3>
          <p className="text-text-secondary text-sm flex flex-wrap items-center justify-center gap-2">
            <span className="flex items-center gap-1">
              <Mail className="w-4 h-4" />
              hola@finanzasholisticas.com
            </span>
            <span className="text-text-muted">o</span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4" />
              +52 55 1234 5678
            </span>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </main>
  );
};

export default Bienvenido;
