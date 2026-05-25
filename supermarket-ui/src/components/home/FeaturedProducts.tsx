import { ShoppingBag, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const products = [
  { name: "Fresh Organic Bananas", price: 3.99, oldPrice: 4.99, weight: "1 kg", cat: "Fruits", img: "https://images.unsplash.com/photo-1571501711155-87ea2d46e017?auto=format&fit=crop&q=80&w=300" },
  { name: "Green Bell Peppers", price: 2.49, oldPrice: null, weight: "500 g", cat: "Vegetables", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=300" },
  { name: "Whole Wheat Bread", price: 4.50, oldPrice: 5.00, weight: "1 Loaf", cat: "Bakery", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300" },
  { name: "Fresh Milk 2%", price: 5.99, oldPrice: 6.99, weight: "1 Gallon", cat: "Dairy", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300" },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl font-bold text-[#1E3932] tracking-tight">Featured Products</h2>
        <Button variant="outline" className="rounded-full border-[#006241]/20 text-[#006241] hover:bg-[#D4E9E2]">
          View All Products
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((prod, i) => (
          <Card key={i} className="bg-white border-none shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] rounded-[12px] overflow-hidden group">
            <div className="relative">
              {prod.oldPrice && (
                <Badge className="absolute top-4 left-4 bg-[#cba258] hover:bg-[#cba258] z-10 text-white border-none px-2 py-1 text-xs">
                  {Math.round((1 - prod.price/prod.oldPrice)*100)}% OFF
                </Badge>
              )}
              <Button variant="ghost" size="icon" className="absolute top-3 right-3 z-10 bg-white/80 hover:bg-[#D4E9E2] text-gray-500 hover:text-[#00754A] rounded-full h-10 w-10">
                <Heart className="h-5 w-5" />
              </Button>
              <div className="h-[220px] bg-gray-50 p-4 flex items-center justify-center overflow-hidden">
                <img src={prod.img} alt={prod.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300 rounded-xl mix-blend-multiply" />
              </div>
            </div>
            <CardContent className="p-5">
              <p className="text-xs font-semibold text-[#006241] uppercase tracking-wider mb-2">{prod.cat}</p>
              <h3 className="font-bold text-[#1E3932] text-lg mb-1 leading-tight line-clamp-2">{prod.name}</h3>
              
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-[#cba258] text-[#cba258]" />)}
                <span className="text-xs text-gray-500 ml-1">(12)</span>
              </div>
              
              <div className="flex items-center justify-between mt-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{prod.weight}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[#006241]">${prod.price}</span>
                    {prod.oldPrice && <span className="text-sm text-gray-400 line-through">${prod.oldPrice}</span>}
                  </div>
                </div>
                <Button size="icon" className="rounded-full h-12 w-12 bg-[#00754A] hover:bg-[#006241] text-white transition-transform active:scale-95 shadow-md shadow-[#00754A]/20">
                  <ShoppingBag className="h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
