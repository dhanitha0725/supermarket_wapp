import { Header } from '@/components/layout/Header';
import { FrapButton } from '@/components/ui/FrapButton';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Shop All Products</h1>
        <p className="text-lg text-gray-600">Explore our full range of fresh groceries and daily essentials.</p>
        {/* Product grid would go here */}
      </main>
      <FrapButton />
    </div>
  );
}
