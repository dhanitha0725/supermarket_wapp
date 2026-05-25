import { ShieldCheck, Truck, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="bg-[#1E3932] text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80')] bg-cover bg-center" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
              Your One-Stop Shop for <span className="text-[#D4E9E2]">Quality Groceries</span>
            </h1>
            <p className="text-lg text-white/80 max-w-lg leading-relaxed">
              Fresh produce, daily essentials, and premium ingredients delivered straight to your door. Experience the joy of cooking with the finest selections.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="bg-[#00754A] hover:bg-[#006241] text-white rounded-full px-8 py-6 text-lg font-semibold transition-transform active:scale-95 shadow-lg shadow-[#00754A]/20">
                Shop Now
              </Button>
              <Button variant="outline" className="bg-transparent border-white/30 text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg font-semibold transition-transform active:scale-95">
                View All Products
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-[#D4E9E2] h-6 w-6" />
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="text-[#D4E9E2] h-6 w-6" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="text-[#cba258] h-6 w-6 fill-current" />
                <span className="text-sm font-medium">4.8/5 Ratings</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-[#00754A] rounded-full blur-3xl opacity-20 transform translate-x-10 translate-y-10" />
            <img 
              src="https://images.unsplash.com/photo-1604719312566-8fa2065b4c6e?auto=format&fit=crop&q=80&w=800" 
              alt="Fresh Groceries" 
              className="relative z-10 rounded-3xl object-cover h-[500px] w-full shadow-2xl border-4 border-[#006241]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
