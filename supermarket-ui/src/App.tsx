import { Routes, Route } from 'react-router-dom';
import AdminRoutes from './routes/AdminRoutes';
import CustomerRoutes from './routes/CustomerRoutes';

export default function App() {
  return (
    <Routes>
      {/* Admin routes prefixed with /admin */}
      <Route path="/admin/*" element={<AdminRoutes />} />
      
      {/* Customer routes handle everything else */}
      <Route path="/*" element={<CustomerRoutes />} />
    </Routes>
  );
}
