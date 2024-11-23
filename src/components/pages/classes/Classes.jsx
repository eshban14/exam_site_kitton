import React from 'react'
import './Classes.css'
import Header from '../../header/Header';
import Navbar from '../../navbar/Navbar';
import Footer from '../../footer/Footer';

const Classes = () => {
  return (

    <>
      <Header />
      <Navbar />

      <div className="container my-5">
        <div className="row course-section">
          {/* Image and Description Section */}
          <div className="col-lg-8">
            <div className="course-img">
              <img
                src="./images/single1.jpg"
                className="img-fluid"
                alt="Course"
              />
            </div>
            <div className="course-details">
              <div className="d-flex align-items-center mb-2 detail_titles">
                <span className="me-3">
                  <i class="fa-regular fa-user"></i> William Khanna
                </span>
                <span className="me-3">
                  <i class="fa-regular fa-heart"></i> 124 Likes
                </span>
                <span>
                  <i class="fa-regular fa-comment"></i> 09 Comments
                </span>
              </div>
              <p className='detail_text'>
                Serenity hassr taken posseson of my entire soung like these sweet mornngs sprng whch enjoy with my whole heart I am alonesi and feel the charm of exstenceths spot whch was the blis of souls like mineing am soo happy my dear frend absoribed the exquste sense enjoy with my whole heart in am alone and feel the charm of exstenceths spot whch was the blis of souls like mineing am so happyr my dear frend so absoribed the exqust sense tranquil existence that neglect my talentsr Ins should bye ncapable of drawng and singe wonderful serenty has taken possesison of my entrei souing like these sweet present moment and yet feel that never was greater artst
              </p>

              <div className="container mb-4 mt-4">
                <div className="qouteSection">
                  <p>Steal into The nering Sanc How Mysef Down Amon The Hal Gras Buz Lttle World Amon The Stak And Grow Fama With Couns And Fesingri Steal intoing Thene Sanc Hrow Myse Down Amon The Hall Gras Biss The Almighty Among The Staks</p>

                  <div className="qouteicon">
                    <i class="fa-solid fa-quote-left"></i>
                  </div>

                  <div className="q_name">
                    <span>...Melissa Hunter</span>
                  </div>

                </div>
              </div>
              <p className='detail_text'>Serenity hassr taken posseson of my entire soung like these sweet mornngs sprng whch enjoy with my whole heart I am alonesi and feel the charm of exstenceths spot whch was the blis of souls like mineing am soo happy my dear frend absoribed the exquste sense enjoy with my whole heart in am alone and feel the charm of exstenceths spot whch was the blis of souls like mineing am so happyr my dear frend so absoribed the exqust sense tranquil existence that neglect my talentsr Ins should bye ncapable of drawng and singe wonderful serenty has taken possesison of my entrei souing like these sweet present moment and yet feel that never was greater artst</p>

              <div className="video-preview">
                <img src="https://labartisan.net/demo/kitton/assets/images/class/single2.jpg" alt="Video Preview" class="video-image" />
                <div class="play-button">
                  <i class="fas fa-play"></i>
                </div>
              </div>


              <div className="detail_text">
                <p>Serenity hassr taken posseson of my entire soung like these sweet mornngs sprng whch enjoy with my whole heart I am alonesi and feel the charm of exstenceths spot whch was the blis of souls like mineing am soo happy my dear frend absoribed the exquste sense enjoy with my whole heart in am alone and feel the charm of exstenceths spot whch was the blis of souls like mineing am so happyr my dear frend so absoribed the exqust sense tranquil existence that neglect my talentsr Ins should bye ncapable of drawng and singe wonderful serenty has taken possesison of my entrei souing like these sweet present moment and yet feel that never was greater artst</p>
              </div>





              <div className="container ">

                <section className='classes_social_sec'>
                  <div className="d-flex align-items-center cse">
                    <div className="nav-tab active">Schools</div>
                    <div className="nav-tab ">Education</div>
                    <div className="nav-tab ">Admission</div>
                    <div className="nav-tab">Exams</div>
                  </div>

                  {/* <!-- Social Icons Section --> */}
                  <div className="social-iconsclass">
                    <div className="social-icon facebook">
                      <i className="fab fa-facebook-f"></i>
                    </div>
                    <div className="social-icon dribbble">
                      <i className="fab fa-dribbble"></i>
                    </div>
                    <div className="social-icon twitter">
                      <i className="fab fa-twitter"></i>
                    </div>
                    <div className="social-icon google">
                      <i className="fab fa-google"></i>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* Course Features Sidebar */}
          <div className="col-lg-4">
            <div className="course-features-sidebar">
              <h5 className='sidebar_titles'>Course Features</h5>
              <div className="feature-item d-flex justify-content-between mb-3 ">
                <span className='courselabel'><i className="fas fa-bell" style={{ color: '#28a745' }}></i> Start Date </span>
                <span>: 24 March 2022</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-user" style={{ color: '#6f42c1' }}></i> Years Old </span>
                <span> :04 - 06 years</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-users" style={{ color: '#007bff' }}></i> Class Size </span>
                <span>: 20 - 30 kids</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-bus" style={{ color: '#dc3545' }}></i> Carry Time </span>
                <span>: 05 hours / 06 days</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-calendar-alt" style={{ color: '#ffc107' }}></i> Class Duration </span>
                <span>: 10 - 12 months</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-clock" style={{ color: '#6610f2' }}></i> Class Time </span>
                <span>: 09:00am - 12:00pm</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-star" style={{ color: '#ff6347' }}></i> Rating </span>
                <span style={{ color: '#ff6347' }}>: ★★★★★</span>
              </div>
              <div className="feature-item d-flex justify-content-between mb-3">
                <span className='courselabel'><i className="fas fa-dollar-sign" style={{ color: '#17a2b8' }}></i> Tuition Fee </span>
                <span>: $2500.00</span>
              </div>
            </div>


            {/* popular sidebar */}
            <div className="popular-post-sidebar">
              <h5 className='sidebar_titles'>Most Popular Post</h5>

              <div className="post-item d-flex align-items-center mb-3">
                <img src="./images/side1.jpg" alt="Post 1" className="post-thumbnail" />
                <div className="post-details ml-3">
                  <h6>How Kids make sense of Life Experiences</h6>
                  <span className="post-date">April 08, 2022</span>
                </div>
              </div>

              <div className="post-item d-flex align-items-center mb-3">
                <img src="./images/side2.jpg" alt="Post 2" className="post-thumbnail" />
                <div className="post-details ml-3">
                  <h6>Why do aerobically have better Math Skills</h6>
                  <span className="post-date">April 08, 2022</span>
                </div>
              </div>

              <div className="post-item d-flex align-items-center mb-3">
                <img src="./images/side3.jpg" alt="Post 2" className="post-thumbnail" />
                <div className="post-details ml-3">
                  <h6>How Kids make sense of Life Experiences</h6>
                  <span className="post-date">April 08, 2022</span>
                </div>
              </div>

              <div className="post-item d-flex align-items-center mb-3">
                <img src="./images/side4.jpg" alt="Post 2" className="post-thumbnail" />
                <div className="post-details ml-3">
                  <h6>Remo Suppor Center What For Semiconductor...</h6>
                  <span className="post-date">April 08, 2022</span>
                </div>
              </div>

              {/* <!-- Repeat for each post item --> */}
            </div>








            <div className="gallery-section">
              <h4 className='sidebar_titles' >Gallery Photos</h4>
              <div className="row gallery mb-4 mt-3">

                <div className="col-4 col-md-3 ">
                  <img src="./images/gallery7.jpg" class="g-fluid" alt="Gallery 1" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery8.jpg" class="g-fluid" alt="Gallery2" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery9.jpg" class="g-fluid" alt="Gallery3" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery10.jpg" class="g-fluid" alt="Gallery4" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery11.jpg" class="g-fluid" alt="Gallery5" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery12.jpg" class="g-fluid" alt="Gallery6" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery9.jpg" class="g-fluid" alt="Gallery7" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery8.jpg" class="g-fluid" alt="Gallery8" />
                </div>
                <div className="col-4 col-md-3">
                  <img src="./images/gallery7.jpg" class="g-fluid" alt="Gallery8" />
                </div>
              </div>
            </div>




            <div className="tags-section">
              <h4 className="sidebar_titles">Popular Tags</h4>
              <div className="d-flex flex-wrap">
                <span className="tag">envato</span>
                <span className="tag tag-active">themeforest</span>
                <span className="tag">codecanyon</span>
                <span className="tag">videohive</span>
                <span className="tag">audiojungle</span>
                <span className="tag">3docean</span>
                <span className="tag">envato</span>
                <span className="tag">themeforest</span>
                <span className="tag">codecanyon</span>
              </div>
            </div>







          </div>







        </div>


        <div className="image-description">

        </div>
      </div>

      <Footer/>



    </>

  )
}


export default Classes;