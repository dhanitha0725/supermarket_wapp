import { ShoppingBag, Heart, User, Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'Fruits', path: '/category/fruits' },
  { name: 'Vegetables', path: '/category/vegetables' },
  { name: 'Beverages', path: '/category/beverages' },
  { name: 'About Us', path: '/about' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#f2f0eb]/90 backdrop-blur-md border-b border-[#006241]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-2 text-[#006241] font-bold text-2xl tracking-tight">
            <ShoppingBag className="h-8 w-8" />
            <span>SuperMart</span>
          </Link>

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
          {navLinks.map((link) => (
            <NavLink 
              key={link.path} 
              to={link.path} 
              className={({ isActive }) => 
                `transition-colors hover:text-[#00754A] ${isActive ? 'text-[#00754A] font-bold' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
