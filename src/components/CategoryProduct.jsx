import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import './Categoryproduct.css';

const CategoryProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (categoryName && token) {
      setLoading(true);

      axios.get(`http://localhost:8000/api/products-by-category/?category=${categoryName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          setProducts(res.data);
        })
        .catch((err) => {
          console.error('Error fetching category products:', err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [categoryName]);

  return (
    <div className="category-container">
  <h2 className="category-title">{categoryName} Watches</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid">

          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
