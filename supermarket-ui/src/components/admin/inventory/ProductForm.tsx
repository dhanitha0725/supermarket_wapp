import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { Product } from './ProductTable';

interface ProductFormProps {
  initialData?: Product;
  onSubmit: (data: Partial<Product>) => void;
  onCancel: () => void;
}

export function ProductForm({ initialData, onSubmit, onCancel }: ProductFormProps) {
  const [formData, setFormData] = useState<Partial<Product>>(
    initialData || { name: '', price: 0, stockQuantity: 0, category: '' }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 bg-white rounded-2xl border">
      <h3 className="text-lg font-bold text-[#1E3932]">
        {initialData ? 'Edit Product' : 'Add New Product'}
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2 col-span-2">
          <label className="text-sm font-medium">Product Name</label>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Organic Bananas"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Category</label>
          <Input
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            placeholder="e.g. Fruits"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Price ($)</label>
          <Input
            type="number"
            step="0.01"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Stock Quantity</label>
          <Input
            type="number"
            value={formData.stockQuantity}
            onChange={(e) => setFormData({ ...formData, stockQuantity: parseInt(e.target.value) })}
            required
          />
        </div>
      </div>
      <div className="flex justify-end gap-3 pt-4">
        <Button type="button" variant="outline" onClick={onCancel}>Cancel</Button>
        <Button type="submit" className="bg-[#00754A] hover:bg-[#006241]">
          {initialData ? 'Update Product' : 'Save Product'}
        </Button>
      </div>
    </form>
  );
}
