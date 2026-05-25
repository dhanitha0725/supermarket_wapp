import { ShoppingBag, Heart, User, Search, Menu, ShieldCheck, Truck, Star, Carrot, Apple, Milk, Croissant, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      {/* Header & Navigation */}
      <header className="sticky top-0 z-50 bg-[#f2f0eb]/90 backdrop-blur-md border-b border-[#006241]/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between gap-8">
            <div className="flex items-center gap-2 text-[#006241] font-bold text-2xl tracking-tight">
              <ShoppingBag className="h-8 w-8" />
              <span>SuperMart</span>
            </div>
            
            <div className="flex-1 max-w-2xl hidden md:block relative">
              <Input 
                type="text" 
                placeholder="Search for groceries, vegetables, meat..." 
                className="w-full pl-4 pr-12 py-6 rounded-full border-[#006241]/20 bg-white shadow-sm focus-visible:ring-[#00754A]"
              />
              <Button size="icon" className="absolute right-1 top-1 rounded-full bg-[#00754A] hover:bg-[#006241] h-10 w-10 text-white">
                <Search className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="text-[#1E3932] hover:bg-[#D4E9E2] rounded-full h-12 w-12 transition-transform active:scale-95">
                <Heart className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-[#1E3932] hover:bg-[#D4E9E2] rounded-full h-12 w-12 transition-transform active:scale-95 relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="absolute top-2 right-2 h-4 w-4 rounded-full bg-[#00754A] text-white text-[10px] font-bold flex items-center justify-center">3</span>
              </Button>
              <Link to="/admin/login">
                <Button variant="ghost" size="icon" className="text-[#1E3932] hover:bg-[#D4E9E2] rounded-full h-12 w-12 transition-transform active:scale-95">
                  <User className="h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 mt-4 pt-4 border-t border-[#006241]/10 text-sm font-semibold text-[#1E3932]">
            <Button variant="ghost" className="hover:bg-[#D4E9E2] text-[#006241] rounded-full px-6 gap-2">
              <Menu className="h-5 w-5" /> All Categories
            </Button>
            <a href="#" className="hover:text-[#00754A] transition-colors">Home</a>
            <a href="#" className="hover:text-[#00754A] transition-colors">Shop</a>
            <a href="#" className="hover:text-[#00754A] transition-colors">Fruits</a>
            <a href="#" className="hover:text-[#00754A] transition-colors">Vegetables</a>
            <a href="#" className="hover:text-[#00754A] transition-colors">Beverages</a>
            <a href="#" className="hover:text-[#00754A] transition-colors">About Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
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

      {/* Featured Categories */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1E3932] tracking-tight">Featured Categories</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[
            { icon: Carrot, title: "Vegetables", count: "120+ items", color: "bg-orange-100 text-orange-600" },
            { icon: Apple, title: "Fresh Fruits", count: "85+ items", color: "bg-red-100 text-red-600" },
            { icon: Milk, title: "Milk & Eggs", count: "45+ items", color: "bg-blue-100 text-blue-600" },
            { icon: Croissant, title: "Bakery", count: "60+ items", color: "bg-amber-100 text-amber-600" },
            { icon: ShoppingBag, title: "Pantry", count: "210+ items", color: "bg-green-100 text-green-600" },
            { icon: ShieldCheck, title: "Organic", count: "90+ items", color: "bg-purple-100 text-purple-600" },
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-white rounded-3xl shadow-[0_0_0.5px_rgba(0,0,0,0.14),0_1px_1px_rgba(0,0,0,0.24)] hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${cat.color} group-hover:scale-110 transition-transform`}>
                <cat.icon className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-lg text-center">{cat.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{cat.count}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Promotional Banners */}
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

      {/* Featured Products Grid */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl font-bold text-[#1E3932] tracking-tight">Featured Products</h2>
          <Button variant="outline" className="rounded-full border-[#006241]/20 text-[#006241] hover:bg-[#D4E9E2]">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Fresh Organic Bananas", price: 3.99, oldPrice: 4.99, weight: "1 kg", cat: "Fruits", img: "https://images.unsplash.com/photo-1571501711155-87ea2d46e017?auto=format&fit=crop&q=80&w=300" },
            { name: "Green Bell Peppers", price: 2.49, oldPrice: null, weight: "500 g", cat: "Vegetables", img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&q=80&w=300" },
            { name: "Whole Wheat Bread", price: 4.50, oldPrice: 5.00, weight: "1 Loaf", cat: "Bakery", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=300" },
            { name: "Fresh Milk 2%", price: 5.99, oldPrice: 6.99, weight: "1 Gallon", cat: "Dairy", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=300" },
          ].map((prod, i) => (
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

      {/* Countdown Banner */}
      <section className="py-12 pb-24">
        <div className="container mx-auto px-4">
          <div className="bg-[#006241] rounded-[24px] overflow-hidden relative shadow-2xl flex flex-col md:flex-row items-center">
            {/* Left Image */}
            <div className="w-full md:w-1/3 h-64 md:h-auto">
              <img src="https://images.unsplash.com/photo-1490818387583-1baba5e638ce?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Fresh Food" />
            </div>
            
            {/* Center Content */}
            <div className="w-full md:w-1/3 p-10 flex flex-col items-center text-center z-10">
              <Badge className="bg-[#D4E9E2] text-[#006241] hover:bg-[#D4E9E2] mb-4 border-none text-sm px-4 py-1">Summer Discount</Badge>
              <h2 className="text-4xl font-bold text-white mb-6">Up to 50% Off on Fresh Produce</h2>
              
              {/* Timer */}
              <div className="flex gap-4 mb-8">
                {[
                  { label: "Days", val: "02" },
                  { label: "Hours", val: "14" },
                  { label: "Mins", val: "45" },
                  { label: "Secs", val: "30" }
                ].map((time, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="bg-white text-[#1E3932] font-bold text-2xl h-14 w-14 rounded-xl flex items-center justify-center shadow-inner mb-2">
                      {time.val}
                    </div>
                    <span className="text-white/80 text-xs uppercase font-medium tracking-wider">{time.label}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-[#cba258] hover:bg-[#b08d4b] text-[#1E3932] rounded-full px-10 py-6 text-lg font-bold transition-transform active:scale-95 shadow-lg">
                Shop The Sale
              </Button>
            </div>
            
            {/* Right Image */}
            <div className="w-full md:w-1/3 h-64 md:h-auto hidden md:block">
              <img src="https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Grocery Bags" />
            </div>
          </div>
        </div>
      </section>

      {/* Floating Frap Button (from Design System) */}
      <Button size="icon" className="fixed bottom-8 right-8 h-16 w-16 rounded-full bg-[#00754A] hover:bg-[#006241] text-white shadow-[0_0_6px_rgba(0,0,0,0.24),0_8px_12px_rgba(0,0,0,0.14)] z-50 transition-all active:scale-95 active:shadow-none hover:rotate-12">
        <ShoppingBag className="h-7 w-7" />
      </Button>

    </div>
  );
}
