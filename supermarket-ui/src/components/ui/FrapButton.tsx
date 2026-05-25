import { ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function FrapButton() {
  return (
    <Button 
      size="icon" 
      className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-[#00754A] hover:bg-[#006241] text-white shadow-[0_0_6px_rgba(0,0,0,0.24),0_8px_12px_rgba(0,0,0,0.14)] z-50 transition-all active:scale-95 active:shadow-none hover:rotate-12"
    >
      <ShoppingBag className="h-7 w-7" />
    </Button>
  );
}
