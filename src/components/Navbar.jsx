import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="top-bar">
        Use Code NEW10 and get 10% OFF* on non-discounted Watches over Rs. 2499.
      </div>

      <div className="main-header">
        <Link to="/" className="logo">
          <img src="/assets/logo.png" alt="Titan Logo" />
        </Link>

        <input type="text" className="search-bar" placeholder="Search" />

        <div className="icon-links">
          <Link to="/login">👤 Account</Link>
          <Link to="/wishlist">❤️ Wishlist</Link>
          <Link to="/cart">🛒 Cart</Link>
          <Link to="/orders">📦 Track Order</Link>
        </div>
      </div>

      <nav className="category-nav">
        <Link to="/category/Men">MEN</Link>
        <Link to="/category/Women">WOMEN</Link>
        <Link to="/category/Smart">SMART WATCHES</Link>
        <Link to="/category/Premium">PREMIUM WATCHES</Link>
        <Link to="/category/All">WATCHES</Link>
        <Link to="/brands">INTERNATIONAL BRANDS</Link>
        <Link to="/gifting">GIFTING</Link>
        <Link to="/sale">SALE</Link>
        <Link to="/service">WATCH SERVICE</Link>
      </nav>
    </header>
  );
};

export default Navbar;
