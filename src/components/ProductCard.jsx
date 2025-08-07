import './ProductCard.css';

const ProductCard = ({ product }) => {
  const imageUrl = product.image.startsWith('http')
    ? product.image
    : `http://localhost:8000${product.image}`;

  return (
    <div className="product-card">
  <img src={imageUrl} alt={product.name} className="product-image" />
  <div className="product-details">
    <h3 className="product-title">{product.name}</h3>
    <p className="product-description">{product.description}</p>
    <div className="product-price">₹ {product.price}</div>
    <button className="product-button">Add to Cart</button>
  </div>
</div>

  );
};

export default ProductCard;
