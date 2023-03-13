import React from 'react'

function TeamMember() {
  return (
      <div>
               <section id="team-member" className="team-meber-section section-padding section-bg">
    <div className="container">
      {/* <!-- Section Top Title --> */}
      <div className="section-top-box text-center">
        <h2 className="st-title">Our Team Member</h2>
        <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
          page when looking at its layout. The point of using is the will be distracted.</p>
      </div>
      {/* <!-- Section Top Title --> */}
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="single-member">
            <div className="single-member-top mb-3">
              <img src="assets/img/member.jpg" alt="" className="sm-img"/>

              <ul className="social-collections sm-social flex-all">
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="sm-bottom text-center">
              <h5 className="sb-name">Alex Morgene</h5>
              <p className="sb-post">Product Designer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
          <div className="single-member">
            <div className="single-member-top mb-3">
              <img src="assets/img/member-4.jpg" alt="" className="sm-img"/>

              <ul className="social-collections sm-social flex-all">
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="sm-bottom text-center">
              <h5 className="sb-name">Alex Morgene</h5>
              <p className="sb-post">Product Designer</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="single-member">
            <div className="single-member-top mb-3">
              <img src="assets/img/member-3.jpg" alt="" className="sm-img"/>

              <ul className="social-collections sm-social flex-all">
                <li><a href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            <div className="sm-bottom text-center">
              <h5 className="sb-name">Alex Morgene</h5>
              <p className="sb-post">Product Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default TeamMember