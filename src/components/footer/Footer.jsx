import React from 'react'
import './Footer.css'

export const Footer = () => {
  return (

    <>    
    
    <div className="footer fbg-sec">
  <div className="container footer-sec">
    <div className="row text-center text-md-start">

      <div className="col-md-4 mb-4">
        <h5>About Kitton</h5>
        <p>Assertively develop team-driven niche markets and revolutionary services. Synergistically parallel task intrinsically reintermediate best credibly.</p>
        <p><i className="fa-solid fa-headphones"></i> +08 645 280 947, 0289642</p>
        <p><i className="fas fa-map-marker-alt"></i> 20 High Street, Blazfield Ave, 250 USA</p>
        <p><i className="fas fa-envelope"></i> www.adminkittoschool.org</p>
        <div className="fsocial-icons">
          <span><i className="fab fa-facebook-f"></i></span>
          <span><i className="fab fa-twitter"></i></span>
          <span><i className="fab fa-linkedin-in"></i></span>
          <span><i className="fab fa-instagram"></i></span>
          <span><i className="fab fa-pinterest"></i></span>
        </div>
      </div>
    
      <div className="col-md-4 mb-4">
        <h5>Recent Blog Post</h5>
        <div className="d-flex mb-3">
          <img src="./images/blog1.png" className="me-3" alt="Blog 1" />
          <div>
            <h6>Remo Support Center What For Semiconductor Provider</h6>
            <p>April 08, 2022</p>
          </div>
        </div>
        <div className="d-flex">
          <img src="./images/blog2.png" className="me-3" alt="Blog 2" />
          <div>
            <h6>Remo Support Center What For Semiconductor Provider</h6>
            <p>April 08, 2022</p>
          </div>
        </div>
      </div>
    
      <div className="col-md-4 mb-4">
        <h5>Sign up for open day</h5>
        <p>Enter your email and get the latest updates and offers, subscribe us</p>
        <form className='f-subbtn'>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Enter your email" />
          </div>
          <button type="submit" className="btn subscribe-btn">Subscribe Now!</button>
        </form>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid copy-footer">
<div className="container">
  <section className="copyright-sec d-flex justify-content-center">
    <div className="copyright">
      <div className="copytext">
        <p>© 2022 All Rights Reserved. Designed by <span>LabArtisan</span></p>
      </div>
    </div>
  </section>
</div>
</div>

</>

  )
}

export default Footer;