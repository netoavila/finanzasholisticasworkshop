import { useState } from "react";
import { X, Copy, Check, Upload, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    confirmed: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const bankDetails = {
    bank: "Banco Inbursa",
    holder: "Mirada Films S de RL de CV",
    clabe: "036180500287429021",
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(bankDetails.clabe);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    onClose();
    navigate("/bienvenido?metodo=transferencia");
  };

  const isFormValid = formData.name && formData.email && formData.whatsapp && formData.confirmed;

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
                <span className="text-text-muted">Concepto:</span>
                <span className="text-foreground ml-2">Workshop FH + [Tu nombre]</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gold/10 rounded border border-gold/20 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <p className="text-gold text-xs">
                Importante: Incluye tu nombre en el concepto
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <p className="text-text-secondary text-sm mb-4">
              Una vez realizada la transferencia, confirma tu pago:
            </p>

            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-foreground">Nombre completo *</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 bg-background border-border focus:border-gold focus:ring-gold"
                  required
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 bg-background border-border focus:border-gold focus:ring-gold"
                  required
                />
              </div>

              <div>
                <Label htmlFor="whatsapp" className="text-foreground">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="mt-1 bg-background border-border focus:border-gold focus:ring-gold"
                  placeholder="+52 55 1234 5678"
                  required
                />
              </div>

              <div>
                <Label className="text-foreground">Comprobante de pago (opcional)</Label>
                <div className="mt-1 border border-dashed border-border rounded-lg p-4 text-center hover:border-gold/50 transition-colors cursor-pointer">
                  <Upload className="w-6 h-6 text-text-muted mx-auto mb-2" />
                  <p className="text-text-muted text-sm">Subir archivo</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="confirmed"
                  checked={formData.confirmed}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, confirmed: checked as boolean })
                  }
                  className="mt-0.5 border-gold data-[state=checked]:bg-gold data-[state=checked]:text-primary-foreground"
                />
                <Label htmlFor="confirmed" className="text-foreground text-sm cursor-pointer">
                  Confirmo que ya realicé la transferencia
                </Label>
              </div>
            </div>

            <Button
              type="submit"
              variant="gold"
              size="lg"
              className="w-full mt-6"
              disabled={!isFormValid || isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Confirmar mi inscripción"}
            </Button>

            <p className="text-text-muted text-xs text-center mt-4">
              Recibirás confirmación por email en menos de 24 horas
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;
