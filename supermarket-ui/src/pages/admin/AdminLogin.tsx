import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShoppingBag, Lock } from 'lucide-react';
import { signIn } from '@/lib/auth-client';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const { data, error: authError } = await signIn.email({
        email,
        password,
      });

      if (authError) {
        setError(authError.message || 'Invalid email or password');
        return;
      }

      // Check if user is actually an admin (could also be done in ProtectedRoute)
      // Better Auth handles the session cookie automatically
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f2f0eb] flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl border-none rounded-3xl overflow-hidden">
        <CardHeader className="bg-[#1E3932] text-white p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-[#00754A] p-3 rounded-2xl shadow-lg">
              <ShoppingBag className="h-8 w-8" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Admin Portal</CardTitle>
          <CardDescription className="text-white/70">Login to manage your supermarket</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1E3932]">Email</label>
              <Input
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl border-[#006241]/20 focus-visible:ring-[#00754A]"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#1E3932]">Password</label>
              <Input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-xl border-[#006241]/20 focus-visible:ring-[#00754A]"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
            <Button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#00754A] hover:bg-[#006241] text-white rounded-xl py-6 font-bold shadow-lg shadow-[#00754A]/20 transition-transform active:scale-95"
            >
              <Lock className="mr-2 h-4 w-4" /> {loading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
