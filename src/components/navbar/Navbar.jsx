// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CartSidebar from '../pages/CartSidebar/CartSidebar';
import './Navbar.css';


const Navbar = () => {


  // darkmode

  const [state, setState] = useState("light_mode");

  const change = () =>{
      if(state === "light_mode"){
          setState("dark_mode")
      }else{
          setState("light_mode")
      }
  }
  useEffect(()=>{
      document.querySelector("body").className=state
  },[state])
 











  const [isOpen, setIsOpen] = useState(false);
  const cartCount = useSelector((state) => state.cart.count);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isCartActive, setIsCartActive] = useState(false);

  const toggleCartSidebar = () => {
    setIsCartActive(!isCartActive);
  
  }

  return (
    <>
    <div className="container-fluid navbar_sec">
    <div className="container p-0 ">
      <nav className="navbar">
        <div className="logo">
          <img src="./images/logo.png" alt="Logo" />
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </div>

        <ul className={`nav-items ${isOpen ? 'open' : ''}`}>
          <li className="nav-item"><Link style={{ textDecoration: 'none' }} to={'/home'}><i className="fa fa-home"></i> <span >HOME</span></Link></li>
          <li className="nav-item"><Link style={{ textDecoration: 'none' }} to={'/about'}><i className="fa fa-user"></i> <span>ABOUT</span></Link></li>
          <li className="nav-item"><Link style={{ textDecoration: 'none' }} to={'/classes'}><i className="fa fa-book"></i> <span>CLASSES</span></Link></li>
          <li className="nav-item"><Link style={{ textDecoration: 'none' }} to={'/contact'}><i className="fa fa-map-marker-alt"></i> <span>CONTACT</span></Link></li>
          <li className="nav-item"><Link style={{ textDecoration: 'none' }} to={'/shop'}><i class="fa-solid fa-shop"></i><span>OUR SHOP</span></Link></li>

      
        </ul>

       


        <div className="icons" >

       
        
          <i className="fa fa-shopping-basket" onClick={() => toggleCartSidebar(true)}></i>
          <span className="cart-count">{cartCount}</span>
        </div>
      </nav>

      <CartSidebar isActive={isCartActive} onClose={() => setIsCartActive(false)} />
    </div>
    </div>

    </>
  );
};

export default Navbar;
