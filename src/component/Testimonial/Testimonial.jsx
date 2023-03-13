import React from 'react'

function Testimonial() {
  return (
      <div>
           <section id="testimonial" className="testimonial-section section-padding">
    <div className="container">
      {/* <!-- Section Top Title --> */}
      <div className="section-top-box text-center">
        <h2 className="st-title">What Client Say About Us</h2>
        <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using is the will be distracted .</p>
      </div>
      {/* <!-- Section Top Title --> */}
      <div className="testimonial-wrapper testimonial-slider">
        <div className="st-main">
          <div className="single-testimonial">
            <img src="assets/img/testimonial-1.jpg" alt="" className="testimonial-img"/>
            <p className="testimonial-text">Nisl vel pretium lectus quam id leo in vitae turpis. Id leo in vitae turpis.
              Eget nullam non nisi est sit amet Id leo Nisl vel pretium turpis. Eget nullam non nisi est sit amet Id
              leo. </p>
            <div className="testimonial-bio">
              <h5 className="tb-name">Alex Morgene</h5>
              <p className="tb-post">Product Designer</p>
              <ul className="social-collections tb-social flex-align">
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <img src="assets/img/quote.png" alt="" className="st-qoute-img"/>
          </div>
        </div>
        <div className="st-main">
          <div className="single-testimonial">
            <img src="assets/img/testimonial-2.jpg" alt="" className="testimonial-img"/>
            <p className="testimonial-text">Nisl vel pretium lectus quam id leo in vitae turpis. Id leo in vitae turpis.
              Eget nullam non nisi est sit amet Id leo Nisl vel pretium turpis. Eget nullam non nisi est sit amet Id
              leo. </p>
            <div className="testimonial-bio">
              <h5 className="tb-name">Alex Morgene</h5>
              <p className="tb-post">Product Designer</p>
              <ul className="social-collections tb-social flex-align">
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <img src="assets/img/quote.png" alt="" className="st-qoute-img"/>
          </div>
        </div>
        <div className="st-main">
          <div className="single-testimonial">
            <img src="assets/img/testimonial-3.jpg" alt="" className="testimonial-img"/>
            <p className="testimonial-text">Nisl vel pretium lectus quam id leo in vitae turpis. Id leo in vitae turpis.
              Eget nullam non nisi est sit amet Id leo Nisl vel pretium turpis. Eget nullam non nisi est sit amet Id
              leo. </p>
            <div className="testimonial-bio">
              <h5 className="tb-name">Alex Morgene</h5>
              <p className="tb-post">Product Designer</p>
              <ul className="social-collections tb-social flex-align">
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
              </ul>
            </div>
            <img src="assets/img/quote.png" alt="" className="st-qoute-img"/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Testimonial