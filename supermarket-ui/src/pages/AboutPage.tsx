import { Header } from '@/components/layout/Header';
import { FrapButton } from '@/components/ui/FrapButton';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">About SuperMart</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          SuperMart is your neighborhood grocery partner, committed to providing the freshest produce 
          and highest quality essentials. We believe in sustainable sourcing and supporting local farmers 
          to bring the best to your table.
        </p>
      </main>
      <FrapButton />
    </div>
  );
}
