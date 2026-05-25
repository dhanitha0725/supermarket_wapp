import { ShoppingBag, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  customerName: string;
  customerPhone: string;
  totalAmount: number;
  status: 'PENDING' | 'COMPLETED' | 'CANCELLED';
  createdAt: string;
  items: OrderItem[];
}

interface OrderListProps {
  orders: Order[];
  onStatusChange: (id: string, status: Order['status']) => void;
}

export function OrderList({ orders, onStatusChange }: OrderListProps) {
  const getStatusIcon = (status: Order['status']) => {
    switch (status) {
      case 'PENDING': return <Clock className="h-4 w-4 text-amber-500" />;
      case 'COMPLETED': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'CANCELLED': return <XCircle className="h-4 w-4 text-red-500" />;
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="font-bold text-lg text-[#1E3932] truncate max-w-[200px]">#{order.id.slice(0, 8)}</span>
                <Badge variant="outline" className="flex items-center gap-1.5 rounded-full capitalize">
                  {getStatusIcon(order.status)} {order.status.toLowerCase()}
                </Badge>
              </div>
              <p className="text-sm text-gray-500">{new Date(order.createdAt).toLocaleString()}</p>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-sm text-gray-500">Customer</p>
                <p className="font-semibold text-[#1E3932]">{order.customerName}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Amount</p>
                <p className="font-bold text-[#00754A] text-lg">${order.totalAmount.toFixed(2)}</p>
              </div>
              <div className="flex gap-2">
                {order.status === 'PENDING' && (
                  <>
                    <button 
                      onClick={() => onStatusChange(order.id, 'COMPLETED')}
                      className="p-2 rounded-full bg-green-50 text-green-600 hover:bg-green-100 transition-colors"
                    >
                      <CheckCircle className="h-5 w-5" />
                    </button>
                    <button 
                      onClick={() => onStatusChange(order.id, 'CANCELLED')}
                      className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
                    >
                      <XCircle className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-gray-50">
             <div className="flex flex-wrap gap-2">
                {order.items.map((item, idx) => (
                  <Badge key={idx} variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-100">
                    {item.name} x{item.quantity}
                  </Badge>
                ))}
             </div>
          </div>
        </div>
      ))}
      {orders.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <ShoppingBag className="h-12 w-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">No orders placed yet.</p>
        </div>
      )}
    </div>
  );
}
