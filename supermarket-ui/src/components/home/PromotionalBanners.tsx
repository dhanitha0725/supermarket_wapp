import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function PromotionalBanners() {
  return (
    <section className="py-8 container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="bg-[#D4E9E2] border-none shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] rounded-3xl overflow-hidden relative group">
          <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10 w-2/3">
            <Badge className="w-fit bg-[#006241] hover:bg-[#006241] text-white mb-4">Flat 20% Discount</Badge>
            <h3 className="text-3xl font-bold text-[#1E3932] mb-2">Purely Fresh Vegetables</h3>
            <p className="text-[#1E3932]/80 mb-6 font-medium">Farm fresh to your table every day.</p>
            <Button className="w-fit bg-[#00754A] hover:bg-[#006241] rounded-full px-6 transition-transform active:scale-95">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <img src="https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=400" className="absolute right-0 top-0 h-full w-1/2 object-cover object-left mask-image-to-l group-hover:scale-105 transition-transform duration-500" alt="Vegetables" />
        </Card>

        <Card className="bg-[#fce5cd] border-none shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] rounded-3xl overflow-hidden relative group">
          <CardContent className="p-8 md:p-12 flex flex-col justify-center h-full relative z-10 w-2/3">
            <Badge className="w-fit bg-[#cba258] hover:bg-[#cba258] text-white mb-4">Weekend Special</Badge>
            <h3 className="text-3xl font-bold text-[#1E3932] mb-2">Premium Quality Fruits</h3>
            <p className="text-[#1E3932]/80 mb-6 font-medium">Sweet, juicy, and 100% organic.</p>
            <Button className="w-fit bg-[#1E3932] hover:bg-[#006241] rounded-full px-6 transition-transform active:scale-95">
              Shop Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </CardContent>
          <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=400" className="absolute right-0 top-0 h-full w-1/2 object-cover object-left mask-image-to-l group-hover:scale-105 transition-transform duration-500" alt="Fruits" />
        </Card>
      </div>
    </section>
  );
}
