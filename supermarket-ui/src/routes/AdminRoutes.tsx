import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminLogin from '../pages/admin/AdminLogin';
import ProtectedRoute from '../components/ProtectedRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AdminLogin />} />
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<AdminDashboard />} />
      </Route>
      {/* Fallback to dashboard for /admin */}
      <Route path="" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AdminRoutes;
