import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  rating: number;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden border-[#006241]/10 hover:shadow-lg transition-shadow bg-white rounded-2xl group">
      <div className="relative aspect-square overflow-hidden bg-[#f2f0eb]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white text-[#1E3932] rounded-full h-10 w-10 shadow-sm transition-transform active:scale-90"
        >
          <Heart className="h-5 w-5" />
        </Button>
        <Badge className="absolute top-3 left-3 bg-[#00754A] text-white border-none px-3 py-1 rounded-full shadow-sm">
          {product.category}
        </Badge>
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-[#1E3932] text-lg leading-tight">{product.name}</h3>
          <div className="flex items-center text-xs font-bold text-[#00754A] bg-[#D4E9E2] px-2 py-1 rounded-md">
            ★ {product.rating}
          </div>
        </div>
        <p className="text-[#006241] font-bold text-xl">
          ${product.price.toFixed(2)}
          <span className="text-sm font-normal text-gray-500 ml-1">/ {product.unit}</span>
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button className="w-full bg-[#00754A] hover:bg-[#006241] text-white rounded-full py-6 font-bold gap-2 transition-transform active:scale-[0.98]">
          <ShoppingBag className="h-5 w-5" /> Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-full border-[#006241]/20 text-[#006241] hover:bg-[#D4E9E2]"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Button
          key={page}
          variant={currentPage === page ? 'default' : 'outline'}
          onClick={() => onPageChange(page)}
          className={`rounded-full h-10 w-10 p-0 font-bold ${
            currentPage === page 
              ? 'bg-[#00754A] hover:bg-[#006241] text-white' 
              : 'border-[#006241]/20 text-[#006241] hover:bg-[#D4E9E2]'
          }`}
        >
          {page}
        </Button>
      ))}

      <Button 
        variant="outline" 
        size="icon" 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-full border-[#006241]/20 text-[#006241] hover:bg-[#D4E9E2]"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
