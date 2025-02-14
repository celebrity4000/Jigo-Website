import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Header from "./components/header";
import ProductDetails from "./pages/productdetails";
import Blog from "./pages/blog";
import Product from "./pages/product";
import Cart from "./pages/cart";
import CheckOut from "./pages/checkout";
import Distributor from "./pages/distributor";
import Brochure from "./pages/brochure";
import BlogDetails from "./pages/blogdetails";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";
import Categories from './pages/categories'
import Category from './pages/categories/category'
import ScrollToTop from "react-scroll-to-top";
import { CartContext } from './context';
import { useState } from 'react';
import Popup from "./components/Popup";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <CartContext.Provider value={{ cart, setCart }}>
        <Header />
        <Popup />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="productdetails" element={<ProductDetails />} />
          <Route path="blog" element={<Blog />} />
          <Route path="product/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="distributor" element={<Distributor />} />
          <Route path="brochure" element={<Brochure />} />
          <Route path="blogdetails" element={<BlogDetails />} />
          <Route path="categories" element={<Categories />} />
          <Route path="category/*" element={<Category />} />
        </Routes>
      </CartContext.Provider>

      <ScrollToTop className="" smooth style={{
        position: 'fixed',
        bottom: 40,
        height: 50,
        width: 50,
        right: 120, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center', borderRadius: 100, padding: 10, boxShadow: '20 '
      }} />



      <div
        style={{
          position: 'fixed',
          width: 60,
          height: 60,
          bottom: 40,
          right: 40,
          backgroundColor: '#25d366',
          borderRadius: 50,
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: "5px 2px 30px #999"
        }}
        onClick={() => window.open('https://wa.me/919830685601', '_blank')}
      >
        <FaWhatsapp color={'#fff'} size={29} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
