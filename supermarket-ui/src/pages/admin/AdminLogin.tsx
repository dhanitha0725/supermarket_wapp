import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShoppingBag, Lock } from 'lucide-react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard');
      } else {
        setError('Invalid username or password');
      }
    } catch {
      setError('Failed to connect to server');
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
              <label className="text-sm font-semibold text-[#1E3932]">Username</label>
              <Input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
            <Button type="submit" className="w-full bg-[#00754A] hover:bg-[#006241] text-white rounded-xl py-6 font-bold shadow-lg shadow-[#00754A]/20 transition-transform active:scale-95">
              <Lock className="mr-2 h-4 w-4" /> Sign In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
