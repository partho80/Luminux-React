import React from 'react'

function LatestProject() {
  return (
      <div>
          <section id="latest-project" className="section-padding">
    <div className="latest-project-section">
      <div className="container">
        {/* <!-- Section Top Title --> */}
        <div className="section-top-box text-center">
          <h2 className="st-title">Latest Project</h2>
          <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using is the will be distracted.</p>
        </div>
        {/* <!-- Section Top Title --> */}

        <div className="iso-top-wrapper">
          <p className="iso-cat-title">Category</p>
          <div className="button-group filters-button-group">
            <button className="isotope-btn is-checked" data-filter="*">All</button>
            <button className="isotope-btn" data-filter=".design">Design</button>
            <button className="isotope-btn" data-filter=".branding">Branding</button>
            <button className="isotope-btn" data-filter=".app">App</button>
          </div>
        </div>

        <div className="grid isotope-element-wrapper">
          <div className="element-item design element-item-lg" data-category="transition">
            <div className="single-ltp single-ltp-1">
              <p className="lpt-text">iOS, Android Apps</p>
              <h4 className="lpt-title">Web Design & Development</h4>
            </div>
          </div>
          <div className="element-item branding element-item-sm" data-category="metalloid">
            <div className="single-ltp single-ltp-2">
              <p className="lpt-text">iOS, Android Apps</p>
              <h4 className="lpt-title">3d Illustration</h4>
            </div>
          </div>
          <div className="element-item design element-item-sm" data-category="post-transition">
            <div className="single-ltp single-ltp-3">
              <p className="lpt-text">iOS, Android Apps</p>
              <h4 className="lpt-title">Video Maker</h4>
            </div>
          </div>
          <div className="element-item app element-item-lg" data-category="post-transition">
            <div className="single-ltp single-ltp-4">
              <p className="lpt-text">iOS, Android Apps</p>
              <h4 className="lpt-title">AR & VR Development</h4>
            </div>
          </div>
          {/* <!-- Isotop --> */}
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default LatestProject