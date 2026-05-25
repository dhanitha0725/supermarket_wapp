import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ShopPage from '../pages/ShopPage';
import CategoryPage from '../pages/CategoryPage';
import AboutPage from '../pages/AboutPage';

const CustomerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  );
};

export default CustomerRoutes;
