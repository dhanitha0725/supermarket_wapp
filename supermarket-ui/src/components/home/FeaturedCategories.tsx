import { Carrot, Apple, Milk, Croissant, ShoppingBag, ShieldCheck } from 'lucide-react';

const categories = [
  { icon: Carrot, title: "Vegetables", count: "120+ items", color: "bg-orange-100 text-orange-600" },
  { icon: Apple, title: "Fresh Fruits", count: "85+ items", color: "bg-red-100 text-red-600" },
  { icon: Milk, title: "Milk & Eggs", count: "45+ items", color: "bg-blue-100 text-blue-600" },
  { icon: Croissant, title: "Bakery", count: "60+ items", color: "bg-amber-100 text-amber-600" },
  { icon: ShoppingBag, title: "Pantry", count: "210+ items", color: "bg-green-100 text-green-600" },
  { icon: ShieldCheck, title: "Organic", count: "90+ items", color: "bg-purple-100 text-purple-600" },
];

export function FeaturedCategories() {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="flex items-end justify-between mb-10">
        <h2 className="text-3xl font-bold text-[#1E3932] tracking-tight">Featured Categories</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat, i) => (
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
  );
}
