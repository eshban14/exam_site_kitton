import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Footer from '../footer/Footer';
import Layout from '../../layout/Layout';
import 'animate.css'

const Home = () => {


    


    const statsRef = useRef(null);

    const animateNumbers = () => {
        const numbers = statsRef.current.querySelectorAll('.count-number');

        numbers.forEach((number, index) => {
            const target = +number.getAttribute('data-target');
            let animationDuration;
            switch (index) {
                case 0:
                    animationDuration = 2000;
                    break;
                case 1:
                    animationDuration = 2000;
                    break;
                default:
                    animationDuration = 2000;
            }


            const stepTime = Math.max(Math.floor(animationDuration / target), 10);

            let count = 0;
            const updateCount = () => {
                count += Math.ceil(target / (animationDuration / stepTime));

                if (count < target) {

                    if (index === 2 || index === 3) {
                        number.innerText = count + '%';
                    } else if (index === 0) {
                        number.innerText = count;
                    } else {
                        number.innerText = count + '+';
                    }
                    setTimeout(updateCount, stepTime);
                } else {

                    if (index === 2 || index === 3) {
                        number.innerText = target + '%';
                    } else if (index === 0) {
                        number.innerText = target;
                    } else {
                        number.innerText = target + '+';
                    }
                }
            };


            updateCount();
        });
    };


    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        animateNumbers();
                        observer.disconnect();
                    }
                });
            },
            {
                threshold: 0.5,
            }
        );

        if (statsRef.current) {
            observer.observe(statsRef.current);
        }

        return () => {
            if (statsRef.current) {
                observer.unobserve(statsRef.current);
            }
        };
    }, []);



    // submit form 
    const [showForm, setShowForm] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Toggle the form visibility
    const toggleForm = () => {
        setShowForm((prev) => !prev);
    };

    const validateForm = (e) => {
        e.preventDefault();
        const errors = {};
        const name = e.target.name.value.trim();
        const email = e.target.email.value.trim();
        const age = e.target.age.value;

        // Check for blank fields
        if (!name) errors.name = "Name is required.";
        if (!email) errors.email = "Email is required.";
        if (!age) {
            errors.age = "Child's age is required.";
        } else if (age < 3 || age > 12) {
            errors.age = "Child's age must be between 3 and 12.";
        }

        if (Object.keys(errors).length === 0) {
            alert("Form submitted successfully!");
            e.target.reset();
            setShowForm(false); // Close form on successful submission
        } else {
            setFormErrors(errors);
        }
    };


    const sectionheadingRef = useRef(null);
    const allboxesRef = useRef(null);
    const attentionSectionRef = useRef(null);

    const observeSection = (ref, animationClass) => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate__animated', animationClass);
                    observer.unobserve(entry.target); // stop observing once animation is applied
                }
            },
            { threshold: 0.3 } // Adjust the threshold for when the animation triggers
        );

        if (ref.current) {
            observer.observe(ref.current);
        }
    };

    useEffect(() => {
        // Apply animations to each section when scrolled into view
        observeSection(sectionheadingRef, 'animate__bounceInLeft');
        observeSection(allboxesRef, 'animate__fadeIn')
        observeSection(attentionSectionRef, 'animate__fadeInLeft');
    }, []);


    return (
        <>

            <Layout />
            <div className="container-fluid about_section .darkmode_color">
              
                <div className="container">

                    <section className="program-section animate-on-scroll" >
                    <div className="shadeimage">
         
        </div>
                        <div className="container .darkmode_color">
                            <div className="text-center">
                                <h2 className="section-heading .darkmode_color" ref={sectionheadingRef}>Welcome To Our Kitton School</h2>
                                <p className="section-title">Best Education In Our Kindergarten</p>
                            </div>

                            <div className="row text-center mt-5" ref={allboxesRef} >
                                <div className="col-md-3 col-sm-12">
                                    <div className="program-card">
                                        <div className="icon-box">
                                            <img src="./images/01.png" alt="" />
                                        </div>
                                        <h3>Toddler</h3>
                                        <p className="age-range1">(1.5 – 2 years)</p>
                                        <p className="description">
                                            Since have been visionary arenre reabe software enneern partne have been and visionary.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="program-card">
                                        <div className="icon-box">
                                            <img src="./images/02.png" alt="" />
                                        </div>
                                        <h3>Pre-K Program</h3>
                                        <p className="age-range2">(4 – 5 years)</p>
                                        <p className="description">
                                            Since have been visionary arenre reabe software enneern partne have been and visionary.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="program-card">
                                        <div className="icon-box" >
                                            <img src="./images/03.png" alt="" />
                                        </div>
                                        <h3>Preschool</h3>
                                        <p className="age-range3">(2 – 3 years)</p>
                                        <p className="description">
                                            Since have been visionary arenre reabe software enneern partne have been and visionary.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-md-3 col-sm-12">
                                    <div className="program-card">
                                        <div className="icon-box" >
                                            <img src="./images/04.png" alt="" />
                                        </div>
                                        <h3>Kindergarten</h3>
                                        <p className="age-range4">(3 – 4 years)</p>
                                        <p className="description">
                                            Since have been visionary arenre reabe software enneern partne have been and visionary.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* special attention section */}
                
                <section className="special-attention-section">
                <img src="https://labartisan.net/demo/kitton/assets/css/img/bottom-shape.png" alt="Background Shade" className="bg-shade"/>
                    <div className="container ">
                        <div className="row mb-5">
                            {/* Left section with images */}
                            <div className="col-md-6">
    <div className="image-group">

       
        
        <img src="./images/about.png" alt="About Us" className="main-image"/>
    </div>
</div>

                            {/* Right section with text and icons */}
                            <div className="col-md-6 text-section">
                                <h3 className="heading">About Our Kitton</h3>
                                <h2 className="sub-heading">Special Attention For Every Child</h2>
                                <p className="description">
                                    Dolor sit amet consectetur elitery eiusmod tempor dunt aliqua utas enim veniam eiusmod tempor incididunt labore apidiously utilize functionr ideas for integrated information niqueliy disseinate proces-centric sources and backward compatible channels rofessionally repurpose schools business
                                </p>
                                <ul className="features-list">
                                    <li>
                                        <span className="icon icon-1">
                                            <i className="fa-solid fa-medal"></i>
                                        </span>
                                        Neat And Clean <span className="highlight-text">Washroom</span>
                                    </li>
                                    <li>
                                        <span className="icon icon-2">
                                            <i className="fa-solid fa-medal"></i>
                                        </span>
                                        Canteen With Healthy
                                        <span className="highlight-text2"> Foods And Water</span>
                                    </li>
                                    <li>
                                        <span className="icon icon-3">
                                            <i className="fa-solid fa-medal"></i>
                                        </span>
                                        Air Condition <span className="highlight-text3">Class Room</span>
                                    </li>
                                    <li>
                                        <span className="icon icon-4">
                                            <i className="fa-solid fa-medal"></i>
                                        </span>
                                        Large <span className="highlight-text4">Play Ground</span>
                                    </li>
                                </ul>
                                <hr />

                                <div className="quote-section">
                                    <div className="quote-author">
                                        <img src="./images/quote.png" alt="Author" className="img-fluid" />
                                    </div>
                                    <div className="quote-text">
                                        <p className="quote">
                                            “A Child Can Ask Questions That A Wise Man Cannot Answer.”
                                            <span className="quote-author-name">( Erma Bombeck )</span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* stats section */}

            <div className="container-fluid stats_section">
                <section ref={statsRef}>
                    <div className="stats-container" >
                        <div className="stat-card">
                            <div className="stat-border"></div>
                            <div className="stat-content">
                                <div className="icon">
                                    <img src="./images/counter4.png" alt="" />
                                </div>
                                <h2 className="count-number num1" data-target="830">0</h2>
                                <p >Age 03 - 04</p>
                            </div>
                        </div>
                        <div className="stat-card" >
                            <div className="stat-border"></div>
                            <div className="stat-content">
                                <div className="icon">
                                    <img src="./images/counter5.png" alt="" />
                                </div>
                                <h2 className="count-number num2" data-target="26">0</h2>
                                <p>Age 10 - 12</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-border"></div>
                            <div className="stat-content">
                                <div className="icon">
                                    <img src="./images/counter6.png" alt="" />
                                </div>
                                <h2 className="count-number num3" data-target="100">0</h2>
                                <p>Total Boys</p>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-border"></div>
                            <div className="stat-content">
                                <div className="icon">
                                    <img src="./images/counter7.png" alt="" />
                                </div>
                                <h2 className="count-number num4" data-target="100">0</h2>
                                <p>Total Girls</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* popular classes section */}



            <div className="container-fluid background-popular">

                <div className="bg_shade">
                    <img src="./images/top_shade.png" alt="top-shade" />
                </div>

                <section className="popular-classes">
                    <div className="container pop-class">
                        <div className="text-center mb-5">
                            <h3 className="section-heading">Our School Classes</h3>
                            <h2 className="section-title">Most Popular School Classes</h2>
                        </div>
                        <div className="row">
                            {/* Class Card */}
                            <div className="col-md-4 col-12">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class04.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Art And Color Management</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher02.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Joly Smith</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 col-12">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class05.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Music And Performance</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher01.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Mrs. Labonno</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 col-12">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class06.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Religion And History</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher03.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Robot Smith</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 col-12">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class01.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Art And Color Management</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher02.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Joly Smith</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class02.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Music And Performance</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher01.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Mrs. Labonno</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="class-card">
                                    <div className="class-image-wrapper">
                                        <img src="./images/class03.jpg" alt="Art And Color Management" className="class-image" />
                                    </div>
                                    <div className="class-info">
                                        <h4 className="class-title">Religion And History</h4>
                                        <div className="teacher">
                                            <div className="teacher-details">
                                                <img src="./images/teacher03.jpg" alt="Joly Smith" className="teacher-img" />
                                                <div className="teacher-name-wrapper">
                                                    <span className="teacher-name">Robot Smith</span>
                                                    <span className="view-profile">View Profile</span>
                                                </div>
                                            </div>
                                            <div className="price-info">
                                                <span className="price">$12.96</span>
                                                <span className="per-month">Per Month</span>
                                            </div>
                                        </div>
                                        {/* Colored Line */}
                                        <div className="colored-line">
                                            <span className="green-line"></span>
                                            <span className="purple-line"></span>
                                            <span className="orange-line"></span>
                                        </div>
                                        {/* Class Details */}
                                        <div className="class-details">
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#84bd00' }}>24 - 30</span>
                                                <span className="detail-text">Class Size</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#a44cd4' }}>09:30 - 12:00</span>
                                                <span className="detail-text">Class Time</span>
                                            </div>
                                            <div className="detail-item">
                                                <span className="detail-number" style={{ color: '#ff5722' }}>06 - 08</span>
                                                <span className="detail-text">Years Old</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>




                        </div>

                        <div className="view_classes">
                            <span className="view_products"> VIEW OUR CLASSES</span>
                        </div>

                    </div>
                </section>

            </div>


            <div className="container-fluid enroll-sec">
                <div className="container">
                    <section className="row enroll-section">
                        <div className="col-12 col-md-8 enroll-content">
                            <p>It's Perfect Time to Enroll</p>
                            <h2>How To Enroll Your Child To A Class?</h2>
                        </div>
                        <div className="col-12 col-md-4 enroll-button">
                            <span className="get-button" id="getStartedBtn" onClick={toggleForm}>GET STARTED NOW</span>
                        </div>
                    </section>
                </div>
            </div>


            {/* <!-- Hidden Form --> */}
            <div className="enroll-container">

            {/* Enrollment Form */}
            <div className={`enroll-form-wrapper ${showForm ? 'show' : ''}`}>
                <div className="enroll-form-content">
                    <h3>Join the Fun!</h3>
                    <form onSubmit={validateForm}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                        {formErrors.name && <span className="error-text">{formErrors.name}</span>}

                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                        {formErrors.email && <span className="error-text">{formErrors.email}</span>}

                        <label htmlFor="age">Child's Age:</label>
                        <input type="number" id="age" name="age" min="3" max="12" />
                        {formErrors.age && <span className="error-text">{formErrors.age}</span>}

                        <button type="submit" className="submit-btn">Let’s Go!</button>
                    </form>
                </div>
                <div className="background-decorations">
                    <div className="star"></div>
                    <div className="heart"></div>
                    <div className="cloud"></div>
                </div>
            </div>
        </div>


            {/* our staff section  */}





            <div className="container-fluid ourstaff-sec">
                <div className="container">
                    <section className="teachers-section">
                        <h2>Meet Our Staff</h2>
                        <h3>Our Best Popular Teachers</h3>

                        <div className="row teachers mt-5">
                            {/* Teacher Card 2 */}
                            <div className="col-12 col-md-6 col-lg-3 mb-4 ">
                                <div className="teacher-card">
                                    <img src="./images/teacher05.jpg" alt="Jason Kovalsky" />
                                    <h4>Jason Kovalsky</h4>
                                    <p>Spanish Teacher</p>
                                    <div className="social-icons">
                                        <div className="iconstaff facebook">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="iconstaff google">
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </div>
                                        <div className="iconstaff dribbble">
                                            <i class="fa-brands fa-dribbble"></i>
                                        </div>
                                        <div className="iconstaff vimeo">
                                            <i class="fa-brands fa-vimeo-v"></i>
                                        </div>
                                        <div className="iconstaff pinterest">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Teacher Card 2 */}
                            <div className="col-12 col-md-6 col-lg-3 mb-4">
                                <div className="teacher-card">
                                    <img src="./images/teacher06.jpg" alt="Bangile Yusha" />
                                    <h4>Bangile Yusha</h4>
                                    <p>Spanish Teacher</p>
                                    <div className="social-icons">
                                        <div className="iconstaff facebook">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="iconstaff google">
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </div>
                                        <div className="iconstaff dribbble">
                                            <i class="fa-brands fa-dribbble"></i>
                                        </div>
                                        <div className="iconstaff vimeo">
                                            <i class="fa-brands fa-vimeo-v"></i>
                                        </div>
                                        <div className="iconstaff pinterest">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Teacher Card 2 */}
                            <div className="col-12 col-md-6 col-lg-3 mb-4">
                                <div className="teacher-card">
                                    <img src="./images/teacher05.jpg" alt="Jason Kovalsky" />
                                    <h4>Jason Kovalsky</h4>
                                    <p>Spanish Teacher</p>
                                    <div className="social-icons">
                                        <div className="iconstaff facebook">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="iconstaff google">
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </div>
                                        <div className="iconstaff dribbble">
                                            <i class="fa-brands fa-dribbble"></i>
                                        </div>
                                        <div className="iconstaff vimeo">
                                            <i class="fa-brands fa-vimeo-v"></i>
                                        </div>
                                        <div className="iconstaff pinterest">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Teacher Card 2 */}
                            <div className="col-12 col-md-6 col-lg-3 mb-4">
                                <div className="teacher-card">
                                    <img src="./images/teacher05.jpg" alt="Jason Kovalsky" />
                                    <h4>Jason Kovalsky</h4>
                                    <p>Spanish Teacher</p>
                                    <div className="social-icons">
                                        <div className="iconstaff facebook">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </div>
                                        <div className="iconstaff google">
                                            <i class="fa-brands fa-google-plus-g"></i>
                                        </div>
                                        <div className="iconstaff dribbble">
                                            <i class="fa-brands fa-dribbble"></i>
                                        </div>
                                        <div className="iconstaff vimeo">
                                            <i class="fa-brands fa-vimeo-v"></i>
                                        </div>
                                        <div className="iconstaff pinterest">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </div>

            <Footer />



        </>
    );
};

export default Home;
