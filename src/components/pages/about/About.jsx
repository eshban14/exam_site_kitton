import React from 'react'
import { useState } from 'react';
import './About.css'
import Header from '../../header/Header';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const About = () => {

    const [activeAccordion, setActiveAccordion] = useState(null);
    

    const toggleAccordion = (id) => {
        setActiveAccordion((prevId) => (prevId === id ? null : id));
    };

  return (

    <>
    <Header/>
    <Navbar/>


    <div className="container-fluid banner_bg2" >

<div className="container">
<div className="banner2">
    <div className="banner-content2">
        <h1>Our School is Best</h1>
        <h2>For Your Children</h2>
        <span className="cta-button2"> GET STARTED NOW</span>
    </div>
    
</div>
</div>
</div>





<section className="about-section">
            <div className="about-container">
                {/* Left Side Image */}
                <div className="about-image">
                    <img src="./images/about03.png" alt="About Our Kitten" />
                </div>

                {/* Right Side Content */}
                <div className="about-content">
                    <h3>About Our Kitten</h3>
                    <h2>Special Attention For Every Child</h2>
                    <p>
                    Dolor sit amet consectetur elitery eiusmod tempor dunt aliqua utas enim veniam tempore quis sed psum nostrud ipsume amet consectetur adipisicing elit sedom eiusmod tempor incididunt ut labore
                    </p>

                    {/* Accordion Items */}
                    <div className="accordion">
                        <div className="accordion-item">
                            <button
                                onClick={() => toggleAccordion('one')}
                                className={` acc1 accordion-button ${activeAccordion === 'one' ? 'active' : ''}`}
                            >
                                <span className={activeAccordion === 'one' ? 'title-active1' : ''}>

                                    
                                    <i className={`icon1 fas ${activeAccordion === 'one' ? 'fa-minus' : 'fa-plus'}`} />
                                  
                                    Learning Environment
                                </span>
                            </button>
                            <div className={`accordion-content ${activeAccordion === 'one' ? 'open' : ''}`}>
                                <p>Since 2007 we have been visionary and areliable software enginering partner for worldclass brands what are bouque digital transformation are awesome theme consultancy.</p>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <button
                                onClick={() => toggleAccordion('two')}
                                className={` acc2 accordion-button ${activeAccordion === 'two' ? 'active' : ''}`}
                            >
                                <span className={activeAccordion === 'two' ? 'title-active2' : ''}>
                                    <i className={`icon2 fas ${activeAccordion === 'two' ? 'fa-minus' : 'fa-plus'}`} />
                                    Professional Teachers
                                </span>
                            </button>
                            <div className={` acc3 accordion-content ${activeAccordion === 'two' ? 'open' : ''}`}>
                                <p>Since 2007 we have been visionary and areliable software enginering partner for worldclass brands what are bouque digital transformation are awesome theme consultancy.</p>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <button
                                onClick={() => toggleAccordion('three')}
                                className={`accordion-button ${activeAccordion === 'three' ? 'active' : ''}`}
                            >
                                <span className={activeAccordion === 'three' ? 'title-active3' : ''}>
                                    <i className={`icon3 fas ${activeAccordion === 'three' ? 'fa-minus' : 'fa-plus'}`} />
                                    Programs for Everyone
                                </span>
                            </button>
                            <div className={`accordion-content ${activeAccordion === 'three' ? 'open' : ''}`}>
                                <p>Since 2007 we have been visionary and areliable software enginering partner for worldclass brands what are bouque digital transformation are awesome theme consultancy.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer/>
        </>

        

  )
}

export default About;