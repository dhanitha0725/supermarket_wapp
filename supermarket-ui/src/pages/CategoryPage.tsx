import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { FrapButton } from '@/components/ui/FrapButton';
import { ProductGrid, Pagination } from '@/components/shop/ProductGrid';
import { ChevronRight } from 'lucide-react';

const MOCK_PRODUCTS = [
  // Food
  { id: 'f1', name: 'Fresh Artisan Bread', price: 4.50, category: 'food', unit: 'loaf', rating: 4.8, image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80' },
  { id: 'f2', name: 'Organic Pasta', price: 3.20, category: 'food', unit: '500g', rating: 4.5, image: 'https://images.unsplash.com/photo-1551462147-37885acc3c41?auto=format&fit=crop&w=800&q=80' },
  { id: 'f3', name: 'Extra Virgin Olive Oil', price: 12.99, category: 'food', unit: '750ml', rating: 4.9, image: 'https://images.unsplash.com/photo-1474979266404-7eaacecdec0a?auto=format&fit=crop&w=800&q=80' },
  { id: 'f4', name: 'Raw Local Honey', price: 8.50, category: 'food', unit: '250g', rating: 4.7, image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80' },
  // Fruits
  { id: 'fr1', name: 'Red Organic Apples', price: 2.99, category: 'fruits', unit: 'kg', rating: 4.6, image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80' },
  { id: 'fr2', name: 'Ripe Cavendish Bananas', price: 1.50, category: 'fruits', unit: 'kg', rating: 4.4, image: 'https://images.unsplash.com/photo-1571771894821-ad990241274d?auto=format&fit=crop&w=800&q=80' },
  { id: 'fr3', name: 'Fresh Strawberries', price: 4.99, category: 'fruits', unit: 'pack', rating: 4.9, image: 'https://images.unsplash.com/photo-1464960726346-63dce696ca8e?auto=format&fit=crop&w=800&q=80' },
  // Vegetables
  { id: 'v1', name: 'Organic Broccoli', price: 2.50, category: 'vegetables', unit: 'head', rating: 4.5, image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80' },
  { id: 'v2', name: 'Baby Spinach', price: 3.00, category: 'vegetables', unit: '200g', rating: 4.7, image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80' },
  // Beverages
  { id: 'b1', name: 'Sparkling Mineral Water', price: 1.80, category: 'beverages', unit: '500ml', rating: 4.3, image: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80' },
  { id: 'b2', name: 'Fresh Orange Juice', price: 4.50, category: 'beverages', unit: '1L', rating: 4.8, image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=800&q=80' },
  // More for pagination test
  { id: 'f5', name: 'Quinoa', price: 5.40, category: 'food', unit: '500g', rating: 4.6, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80' },
  { id: 'f6', name: 'Himalayan Pink Salt', price: 3.50, category: 'food', unit: '500g', rating: 4.9, image: 'https://images.unsplash.com/photo-1550592704-6c76defa9985?auto=format&fit=crop&w=800&q=80' },
  { id: 'f7', name: 'Brown Rice', price: 4.00, category: 'food', unit: '1kg', rating: 4.5, image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80' },
];

const ITEMS_PER_PAGE = 8;

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = useMemo(() => {
    if (!categoryId) return MOCK_PRODUCTS;
    return MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === categoryId.toLowerCase());
  }, [categoryId]);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  
  const currentProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  const categoryName = categoryId 
    ? categoryId.charAt(0).toUpperCase() + categoryId.slice(1) 
    : 'All Products';

  return (
    <div className="min-h-screen bg-[#f2f0eb] font-sans text-[#1E3932] tracking-[-0.01em]">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8 font-semibold">
          <Link to="/" className="hover:text-[#00754A]">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link to="/shop" className="hover:text-[#00754A]">Shop</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-[#1E3932]">{categoryName}</span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div>
            <h1 className="text-5xl font-extrabold text-[#1E3932] mb-4 tracking-tighter">
              {categoryName}
            </h1>
            <p className="text-xl text-gray-600 max-w-xl leading-relaxed">
              Explore our handpicked selection of fresh {categoryName.toLowerCase()} and high-quality pantry staples.
            </p>
          </div>
          <div className="text-sm font-bold bg-white px-6 py-3 rounded-full shadow-sm border border-[#006241]/10">
            Showing {currentProducts.length} of {filteredProducts.length} products
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            <ProductGrid products={currentProducts} />
            {totalPages > 1 && (
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
              />
            )}
          </>
        ) : (
          <div className="bg-white rounded-3xl p-20 text-center border border-[#006241]/10 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">No products found</h2>
            <p className="text-gray-500 mb-8">We couldn't find any products in the {categoryName} category.</p>
            <Link to="/shop">
              <button className="bg-[#00754A] hover:bg-[#006241] text-white rounded-full px-8 py-4 font-bold transition-transform active:scale-95">
                Back to Shop
              </button>
            </Link>
          </div>
        )}
      </main>

      <FrapButton />
    </div>
  );
}
