import React from 'react'

function Blog() {
  return (
      <div>
  <section id="home-blog" className="home-blog-section section-padding">
    <div className="container">
      {/* <!-- Section Top Title --> */}
      <div className="section-top-box text-center">
        <h2 className="st-title">Latest News or Blog</h2>
        <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using is the will be distracted.</p>
      </div>
      {/* <!-- Section Top Title --> */}
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="single-home-blog">
            <div className="shb-top mb-5">
              <img src="assets/img/home-blog-1.jpg" alt="" className="shb-img"/>

              <ul className="social-collections shb-update flex-all">
                <li><span className="su-span"><i className="fa-solid fa-calendar"></i></span> 01 Feb 22</li>
                <li> | </li>
                <li><span className="su-span"><i className="fa-solid fa-tag"></i></span> Design</li>
              </ul>
            </div>
            <div className="shb-bottom text-center">
              <h5 className="sb-name">7 Basic Typography
                Rules & Technique</h5>
              <a href="blog-inner.html" className="btn read-more-btn">read more <span className="rmb-span"><i
                    className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="single-home-blog">
            <div className="shb-top mb-5">
              <img src="assets/img/home-blog-2.jpg" alt="" className="shb-img"/>

              <ul className="social-collections shb-update flex-all">
                <li><span className="su-span"><i className="fa-solid fa-calendar"></i></span> 01 Feb 22</li>
                <li> | </li>
                <li><span className="su-span"><i className="fa-solid fa-tag"></i></span> Design</li>
              </ul>
            </div>
            <div className="shb-bottom text-center">
              <h5 className="sb-name">Review of Popular Web
                Design Trends in 2020</h5>
              <a href="blog-inner.html" className="btn read-more-btn">read more <span className="rmb-span"><i
                    className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="single-home-blog">
            <div className="shb-top mb-5">
              <img src="assets/img/home-blog-3.jpg" alt="" className="shb-img"/>

              <ul className="social-collections shb-update flex-all">
                <li><span className="su-span"><i className="fa-solid fa-calendar"></i></span> 01 Feb 22</li>
                <li> | </li>
                <li><span className="su-span"><i className="fa-solid fa-tag"></i></span> Design</li>
              </ul>
            </div>
            <div className="shb-bottom text-center">
              <h5 className="sb-name">Web Development
                Advanced Tips</h5>
              <a href="blog-inner.html" className="btn read-more-btn">read more <span className="rmb-span"><i
                    className="fa-solid fa-arrow-right"></i></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Blog