import React from 'react'
import './Banner.css'

const Banner = () => {
  return (
   <div className="container-fluid banner_bg" >

    <div className="container">
    <div className="banner">
        <div className="banner-content">
            <h1>Our School is Best</h1>
            <h2>For Your Childs</h2>
            <p>Preschooler for the application testing and enrollment process for public and private schools in the city of alo abu mal kita kores vai.</p>
            <span className="cta-button"> GET STARTED NOW</span>
        </div>
        <div className="banner-image">
            <img src="./images/banner.png" alt="Children in School"/>
        </div>

        <div className="banner-image2">
            <img
              src="https://labartisan.net/demo/kitton/assets/images/banner/banner04.png"
              alt="Children in School"
              className="animated-image"
            />
          </div>
    </div>
    </div>
   </div>
  )
}

export default Banner;