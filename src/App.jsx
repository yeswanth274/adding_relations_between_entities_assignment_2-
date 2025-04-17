import React, { useState } from 'react';
import ProductCard from './components/ProductCard';
import './App.css';

const initialProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    description: "High-quality sound with noise cancellation.",
    image: "https://picsum.photos/300/200?random=1",
    avgRating: 4.2,
    totalRatings: 10
  },
  {
    id: 2,
    name: "Smartwatch",
    description: "Track your fitness and notifications.",
    image: "https://picsum.photos/300/200?random=2",
    avgRating: 3.8,
    totalRatings: 15
  },
  {
    id: 3,
    name: "Portable Speaker",
    description: "Powerful sound in a compact design.",
    image: "https://picsum.photos/300/200?random=3",
    avgRating: 4.5,
    totalRatings: 8
  }
];

function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleRatingSubmit = (productId, newRating) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        const newTotal = product.totalRatings + 1;
        const newAvg = ((product.avgRating * product.totalRatings) + newRating) / newTotal;
        return {
          ...product,
          avgRating: newAvg,
          totalRatings: newTotal
        };
      }
      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <h1>Product Ratings</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            product={product}
            onRatingSubmit={handleRatingSubmit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;