import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-border p-4 z-50 md:hidden">
      <Link to="/elegir-plan" className="block">
        <Button variant="gold" size="lg" className="w-full">
          Quiero Expansión Financiera
        </Button>
      </Link>
    </div>
  );
};

export default StickyCTA;
