import { Route, Routes } from 'react-router-dom';
// Pages
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
// Auth
// import LoginPage from "../pages/LoginPage";
// import RegisterPage from "../pages/RegisterPage";
// import ForgotPasswordPage from "../pages/ForgotPasswordPage";
// import ComingSoonPage from '../pages/ComingSoonPage';
function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/products" element={<ProductsPage />} />
      <Route path="/view/:id" element={<ViewPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/wish-list" element={<WishListPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/menu" element={<MenuPage />}></Route>
      <Route path="/coming-soon" element={<ComingSoonPage />}></Route> */}
      {/* <Route path="/sign-in" element={<LoginPage />} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} /> */}
    </Routes>
  );
}

export default Router;
