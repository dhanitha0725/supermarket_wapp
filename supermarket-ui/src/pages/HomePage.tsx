import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/home/Hero';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { PromotionalBanners } from '@/components/home/PromotionalBanners';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { CountdownBanner } from '@/components/home/CountdownBanner';
import { FrapButton } from '@/components/ui/FrapButton';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      <Header />
      <main>
        <Hero />
        <FeaturedCategories />
        <PromotionalBanners />
        <FeaturedProducts />
        <CountdownBanner />
      </main>
      <FrapButton />
    </div>
  );
}
