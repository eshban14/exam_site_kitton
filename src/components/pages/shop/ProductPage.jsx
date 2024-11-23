// ProductPage.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../store/productsSlice';
import { addToCart } from '../../../store/cartSlice';
import CategoryFilter from '../../filter/CategoryFilter';
import Navbar from '../../navbar/Navbar';
import Header from '../../header/Header';
import Footer from '../../footer/Footer';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header />
      <Navbar />

      <div className="container-fluid banner_bg2">
        <div className="container">
          <div className="banner2">
            <div className="banner-content2">
              <h1>SHOP NOW</h1>
              <h2>For Your Children</h2>
              <Link to="/cart" className="cta-button2">VIEW CART</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="product-page">
        <h1>Our Products</h1>
        <CategoryFilter selectedCategory={selectedCategory} onSelectCategory={setSelectedCategory} />
        <div className="container">
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <Link to={`/products/${product.id}`}>
                  <div className="image-container">
                    <img src={product.image} alt={product.name} />
                    <div className="image-overlay">
                      <p>{product.description}</p>
                    </div>
                  </div>
                </Link>
                <h2>{product.name}</h2>
                <p className="product-price">${product.price ? product.price.toFixed(2) : 'Price Unavailable'}</p>
                <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
