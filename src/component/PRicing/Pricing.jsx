import React from 'react'

function Pricing() {
  return (
      <div>
          <section id="pricing" className="section-bg section-padding">
    <div className="pricing-section">
      <div className="container">
        {/* <!-- Section Top Title --> */}
        <div className="section-top-box text-center">
          <h2 className="st-title">Our Pricing Plans</h2>
          <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using is the will be distracted .</p>
        </div>
        {/* <!-- Section Top Title --> */}
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-pricing text-center">
              <div className="pricing-top">
                <img src="assets/img/pricing-1.png" alt="" className="pricing-img"/>
                <h4 className="pricing-title">Standard</h4>
                <h2 className="pricing-amount">$29.99</h2>
              </div>
              <hr/>
              <ul className="pricing-details-collection mb-5">
                <li>Unlimited Pages</li>
                <li>All Team Members</li>
                <li>Unlimited Page Views</li>
                <li>25 GB Cloud Store</li>
              </ul>

              <div className="btn btn-custom btn-custom-secondary-reverse">Purchase Now</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-pricing text-center">
              <div className="pricing-top">
                <img src="assets/img/pricing-2.png" alt="" className="pricing-img"/>
                <h4 className="pricing-title">Premium</h4>
                <h2 className="pricing-amount">$49.99</h2>
              </div>
              <hr/>
              <ul className="pricing-details-collection mb-5">
                <li>Unlimited Pages</li>
                <li>All Team Members</li>
                <li>Unlimited Page Views</li>
                <li>25 GB Cloud Store</li>
                <li>24/7 Spport</li>
              </ul>

              <div className="btn btn-custom btn-custom-secondary-reverse">Purchase Now</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-pricing text-center">
              <div className="pricing-top">
                <img src="assets/img/pricing-3.png" alt="" className="pricing-img"/>
                <h4 className="pricing-title">Unlimited</h4>
                <h2 className="pricing-amount">$79.99</h2>
              </div>
              <hr/>
              <ul className="pricing-details-collection mb-5">
                <li>Unlimited Pages</li>
                <li>All Team Members</li>
                <li>Unlimited Page Views</li>
                <li>25 GB Cloud Store</li>
                <li>24/7 Spport</li>
              </ul>

              <div className="btn btn-custom btn-custom-secondary-reverse">Purchase Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Pricing