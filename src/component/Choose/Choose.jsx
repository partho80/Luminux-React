import React from 'react'

function Choose() {
  return (
      <div>
           <section id="choose" className="choose-section section-padding section-bg">
    <div className="container">
      {/* <!-- Section Top Title --> */}
      <div className="section-top-box text-center">
        <h2 className="st-title">Why Choose Us!</h2>
        <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using is the will be distracted ..</p>
      </div>
      {/* <!-- Section Top Title --> */}
      <div className="row">
        <div className="col-lg-4 mb-4">
          <div className="single-choose mb-4">
            <h4 className="sc-title">Graphic Design</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
          </div>
          <div className="single-choose mb-4">
            <h4 className="sc-title">Web Development</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac rutrum quisque .</p>
          </div>
          <div className="single-choose mb-4">
            <h4 className="sc-title">SEO</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac rutrum quisque .</p>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="sc-img">
            <img src="assets/img/choose.jpg" alt=""/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="single-choose mb-4">
            <h4 className="sc-title">Brand Design</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac.</p>
          </div>
          <div className="single-choose mb-4">
            <h4 className="sc-title">Digital Marketing</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac rutrum quisque .</p>
          </div>
          <div className="single-choose mb-4">
            <h4 className="sc-title">UI/UX Design</h4>
            <p className="sc-desc">Risus in hendrerit gravida rutrum quisque non tellus orci ac rutrum quisque .</p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Choose