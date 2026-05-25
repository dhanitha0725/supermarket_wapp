import { useState } from 'react';
import { ShoppingBag, Package, LogOut, ListOrdered } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ProductTable } from '@/components/admin/inventory/ProductTable';
import type { Product } from '@/components/admin/inventory/ProductTable';
import { ProductForm } from '@/components/admin/inventory/ProductForm';
import { OrderList } from '@/components/admin/orders/OrderList';
import type { Order } from '@/components/admin/orders/OrderList';

// Mock Data
const MOCK_PRODUCTS: Product[] = [
  { id: '1', name: 'Organic Bananas', price: 3.99, stockQuantity: 45, category: 'Fruits' },
  { id: '2', name: 'Whole Milk', price: 5.50, stockQuantity: 12, category: 'Dairy' },
  { id: '3', name: 'Wheat Bread', price: 2.99, stockQuantity: 5, category: 'Bakery' },
];

const MOCK_ORDERS: Order[] = [
  { 
    id: 'ord_12345', 
    customerName: 'John Doe', 
    customerPhone: '0712345678', 
    totalAmount: 15.48, 
    status: 'PENDING', 
    createdAt: new Date().toISOString(),
    items: [
      { name: 'Organic Bananas', quantity: 2, price: 3.99 },
      { name: 'Whole Milk', quantity: 1, price: 5.50 }
    ]
  },
  { 
    id: 'ord_67890', 
    customerName: 'Jane Smith', 
    customerPhone: '0778899001', 
    totalAmount: 5.50, 
    status: 'COMPLETED', 
    createdAt: new Date(Date.now() - 86400000).toISOString(),
    items: [
      { name: 'Whole Milk', quantity: 1, price: 5.50 }
    ]
  }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<'inventory' | 'orders'>('inventory');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const handleProductSubmit = (data: Partial<Product>) => {
    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? { ...editingProduct, ...data } as Product : p));
    } else {
      const newProduct = { ...data, id: Math.random().toString(36).substr(2, 9) } as Product;
      setProducts([...products, newProduct]);
    }
    setShowForm(false);
    setEditingProduct(undefined);
  };

  const handleOrderStatusChange = (id: string, status: Order['status']) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };

  return (
    <div className="min-h-screen bg-[#f2f0eb] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1E3932] text-white hidden lg:flex flex-col sticky top-0 h-screen">
        <div className="p-8 flex items-center gap-3 font-bold text-2xl border-b border-white/10">
          <ShoppingBag className="h-8 w-8 text-[#D4E9E2]" />
          <span>SuperMart</span>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 mt-4">
          <button 
            onClick={() => setActiveTab('inventory')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'inventory' ? 'bg-[#00754A] text-white' : 'text-white/60 hover:bg-white/5'}`}
          >
            <Package className="h-5 w-5" /> Inventory
          </button>
          <button 
            onClick={() => setActiveTab('orders')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${activeTab === 'orders' ? 'bg-[#00754A] text-white' : 'text-white/60 hover:bg-white/5'}`}
          >
            <ListOrdered className="h-5 w-5" /> Orders
          </button>
        </nav>

        <div className="p-4 border-t border-white/10">
          <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-300 hover:bg-red-500/10 transition-colors">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b border-gray-200 py-4 px-8 flex justify-between items-center sticky top-0 z-20">
          <h1 className="text-2xl font-bold text-[#1E3932] capitalize">{activeTab} Management</h1>
          <div className="flex items-center gap-4 lg:hidden">
             {/* Mobile nav could go here */}
          </div>
        </header>

        <main className="p-8 space-y-8">
          {activeTab === 'inventory' ? (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-[#1E3932]">Product Catalog</h2>
                  <p className="text-sm text-gray-500">Manage your supermarket items and stock levels</p>
                </div>
                {!showForm && (
                  <Button onClick={() => setShowForm(true)} className="bg-[#00754A] hover:bg-[#006241] rounded-full px-6">
                    Add Product
                  </Button>
                )}
              </div>

              {showForm && (
                <div className="max-w-2xl">
                  <ProductForm 
                    initialData={editingProduct}
                    onSubmit={handleProductSubmit}
                    onCancel={() => { setShowForm(false); setEditingProduct(undefined); }}
                  />
                </div>
              )}

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <ProductTable 
                  products={products}
                  onEdit={(p) => { setEditingProduct(p); setShowForm(true); }}
                  onDelete={(id) => setProducts(products.filter(p => p.id !== id))}
                />
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="space-y-1">
                <h2 className="text-lg font-semibold text-[#1E3932]">Recent Orders</h2>
                <p className="text-sm text-gray-500">View and update incoming WhatsApp orders</p>
              </div>
              <OrderList 
                orders={orders}
                onStatusChange={handleOrderStatusChange}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
