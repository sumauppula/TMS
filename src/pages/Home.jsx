// Home.jsx
import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (category) => {
    navigate(`/category?category=${category}`);
  };

  return (
    <>
      <HeroBanner />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            className="bg-gray-100 p-6 rounded text-center hover:shadow-md transition cursor-pointer"
            onClick={() => handleClick('Men')}
          >
            <h3 className="text-xl font-semibold mb-2">Men's Watches</h3>
            <p className="text-gray-600">Elegant & smart styles for men</p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded text-center hover:shadow-md transition cursor-pointer"
            onClick={() => handleClick('Women')}
          >
            <h3 className="text-xl font-semibold mb-2">Women's Watches</h3>
            <p className="text-gray-600">Chic, stylish & bold looks</p>
          </div>
          <div
            className="bg-gray-100 p-6 rounded text-center hover:shadow-md transition cursor-pointer"
            onClick={() => handleClick('Smart')}
          >
            <h3 className="text-xl font-semibold mb-2">Smart Watches</h3>
            <p className="text-gray-600">Fitness + Style in one</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
