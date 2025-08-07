import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Products from './pages/Products';
import CategoryProducts from './components/CategoryProduct';

function Layout({ children }) {
  const location = useLocation();

  // Routes where you want to hide navbar and footer
  const hiddenRoutes = ['/', '/login'];

  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/account" element={<h2>My Account</h2>} />
          <Route path="/wishlist" element={<h2>Wishlist</h2>} />
          <Route path="/cart" element={<h2>Cart</h2>} />
          <Route path="/track" element={<h2>Track Order</h2>} />

          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/category/:categoryName" element={<CategoryProducts />} />

          <Route path="/profile" element={<Profile />} />

          {/* Pages without navbar/footer */}
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

