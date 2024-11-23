import React from 'react'
import './Header.css'


const Header = () => {

 

  return (
    <div className="container-fluid top-bar">
        <div className="container p-0">
 <div className="header-top">

    
    <div className="left-content">
        <span><i className="fas fa-clock"></i> 9:30am - 6:30pm Mon - Sun</span>
        <span><i className="fas fa-phone"></i> +800-123-4567 6587</span>
        <span><i className="fas fa-map-marker-alt"></i> Beverley, New York 224 US</span>
    </div>
    <div className="right-content">
        <i className="fab fa-facebook-messenger"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-vimeo-v"></i>
        <i className="fab fa-skype"></i>
        <i className="fas fa-wifi"></i>
    </div>
    </div>
</div>
</div>
  )
}

export default Header;