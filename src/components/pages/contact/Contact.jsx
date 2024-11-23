import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Contact.css';
import Header from '../../header/Header';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState(''); // Add phone state
  const [subject, setSubject] = useState(''); // Add subject state
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleValidation = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    else if (!/^[a-zA-Z\s]+$/.test(name)) newErrors.name = 'Please write your name in letters';
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    if (!age) newErrors.age = 'Age is required';
    else if (isNaN(age) || age < 18) newErrors.age = 'Age must be 18 or older';
    if (!message) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (handleValidation()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
      setName('');
      setEmail('');
      setAge('');
      setPhone(''); // Reset phone field
      setSubject(''); // Reset subject field
      setMessage('');
    }
  };







  
  return (
    <>
      <Header />
      <Navbar />


      
    <div className="container-fluid banner_bg2" >

<div className="container">
<div className="banner2">
    <div className="banner-content2">
        <h1>Our School is Best</h1>
        <h2>For Your Children</h2>
        <span className="cta-button2"> CONTACT US NOW</span>
    </div>
    
</div>
</div>
</div>



      

      <div className="container-fluid contact_form_sec">
        <div className="container contact-form">
          <h2>LEAVE A MESSAGE</h2>
          <CSSTransition in={submitted} timeout={300} classNames="fade" unmountOnExit>
            <div className="alert alert-success">Email has been sent successfully!</div>
          </CSSTransition>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <textarea
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <button type="submit" className="btn btn-primary w-100 submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="banner-image3">
            <img
              src="https://labartisan.net/demo/kitton/assets/images/banner/banner04.png"
              alt="Children in School"
              className="animated-image2"
            />
          </div>

      </div>




      <div className="map-section">
      {/* Map using iframe */}
      <iframe
        id="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5835.345776094695!2d90.350611!3d23.6850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQxJzA2LjAiTiA5MMKwMjEnMTUuMSJF!5e0!3m2!1sen!2sus!4v1621280335971!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        className="map"
      ></iframe>

      {/* Overlay Cards */}
      <div className="info-cards">
        <div className="info-card session">
          <i className="fas fa-book"></i>
          <h3>Class Sessions</h3>
          <p>Sunday - Monday<br />08:00 am - 11:00 am (Fri Closed)</p>
        </div>
        <div className="info-card address">
          <i className="fas fa-school"></i>
          <h3>Kittons Address</h3>
          <p>123 White Amphitheatre Kinway,<br />Mountain, CA 12345, USA</p>
        </div>
        <div className="info-card hours">
          <i className="fas fa-clock"></i>
          <h3>Opening Hours</h3>
          <p>Sunday - Monday<br />08:00 am - 05:00 pm</p>
        </div>
        <div className="info-card contact">
          <i className="fas fa-envelope"></i>
          <h3>Phone & Email</h3>
          <p>+123 456 78910, 0265478<br />enroll@kittons.com</p>
        </div>
      </div>

      
    </div>
    


    <Footer/>
    </>
  );
};

export default ContactForm;
