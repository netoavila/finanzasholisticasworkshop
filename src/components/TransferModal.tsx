import { useState } from "react";
import { X, Copy, Check, AlertCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Plan {
  id: string;
  name: string;
  price: string;
  priceNumber: number;
}

interface TransferModalProps {
  isOpen: boolean;
  onClose: () => void;
  plan: Plan | null;
}

const TransferModal = ({ isOpen, onClose, plan }: TransferModalProps) => {
  const [copied, setCopied] = useState(false);

  const bankDetails = {
    bank: "Banco Inbursa",
    holder: "Mirada Films S de RL de CV",
    clabe: "036180500287429021",
  };

  const whatsappNumber = "5218181132483";
  const whatsappMessage = encodeURIComponent(
    "Hola, ya hice mi transferencia para el workshop.\nMi nombre es ____."
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(bankDetails.clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!isOpen || !plan) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-background-secondary border border-border rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-serif text-foreground">Pago por transferencia</h2>
            <p className="text-text-secondary text-sm mt-1">
              Plan: {plan.name} • {plan.price}
            </p>
          </div>
          <button 
            onClick={onClose}
            className="text-text-muted hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Bank details */}
          <div className="bg-background-tertiary border border-border rounded-lg p-4 mb-6">
            <h3 className="text-gold font-medium mb-4 flex items-center gap-2">
              <span className="text-lg">🏦</span> Datos para transferencia
            </h3>
            
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-text-muted">Banco:</span>
                <span className="text-foreground ml-2">{bankDetails.bank}</span>
              </div>
              <div>
                <span className="text-text-muted">Titular:</span>
                <span className="text-foreground ml-2">{bankDetails.holder}</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-text-muted">CLABE:</span>
                  <span className="text-foreground ml-2 font-mono">{bankDetails.clabe}</span>
                </div>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 text-gold hover:text-gold-secondary transition-colors text-xs border border-gold/50 px-2 py-1 rounded"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copied ? "Copiado" : "Copiar"}
                </button>
              </div>
              <div>
                <span className="text-text-muted">Concepto o referencia:</span>
                <span className="text-foreground ml-2">Tu nombre completo</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gold/10 rounded border border-gold/20 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-gold text-xs">
                Importante: Incluye tu nombre completo en el concepto
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mb-6">
            <p className="text-foreground font-medium mb-4">
              Una vez realizada la transferencia:
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-lg">1️⃣</span>
                <span className="text-text-secondary">Toma captura de tu comprobante</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-lg">2️⃣</span>
                <span className="text-text-secondary">Envíalo por WhatsApp a:</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              variant="gold"
              size="lg"
              className="w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Enviar comprobante por WhatsApp
            </Button>
          </a>

          <p className="text-text-muted text-xs text-center mt-4">
            Recibirás confirmación por WhatsApp en menos de 24 horas
          </p>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
