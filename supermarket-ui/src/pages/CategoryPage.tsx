import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { FrapButton } from '@/components/ui/FrapButton';

export default function CategoryPage() {
  const { categoryId } = useParams();
  
  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8 capitalize">{categoryId}</h1>
        <p className="text-lg text-gray-600">Fresh and quality {categoryId} selected just for you.</p>
        {/* Category specific product grid */}
      </main>
      <FrapButton />
    </div>
  );
}
