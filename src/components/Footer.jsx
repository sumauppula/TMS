import './Footer.css';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <div>
          <h3 className="font-bold mb-2">Store Info</h3>
          <p>Find a store near you</p>
          <p>Hyderabad, Telangana</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Support</h3>
          <p>Watch Service</p>
          <p>Order Tracking</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Company</h3>
          <p>About Us</p>
          <p>Careers</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Connect</h3>
          <p>Email: support@titan.com</p>
          <p>Phone: 1800-266-0123</p>
        </div>
      </div>
      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Titan Watches. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
