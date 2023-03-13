import React from 'react'

function Hero() {
  return (
      <div>
          <section id="hero">
        <div className="hero-section">
          {/* <img src ='assets/img/hero-bg.jpg'/> */}
      <div className="container">
        <div className="row hero-1">
          <div className="col-lg-6 col-md-12">
            <div className="hero-left">
              <p className="hl-top">digital agency</p>
              <h1 className="hl-heading">Top company digital agency & startup studio.</h1>
              <p className="hl-bottom">Create live segments and target the right people for messages based on their
                behaviors and target the right people for messages.</p>
              <a href="#" className="btn btn-custom btn-custom-primary mt-4">Get Started <span><i
                    className="fa-solid fa-arrow-right-long"></i></span></a>
            </div>
          </div>
          <div className="col-lg-6 mobile-hide">
            <div className="hero-right">
              <img src="assets/img/hero-right-img.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Hero