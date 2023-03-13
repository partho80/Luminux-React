import React from 'react'

function Innovocative() {
  return (
      <div>
           <section id="innovocation" className="inno-padding">
    <div className="inovocation-section">
      <div className="container">
        {/* <!-- Section Top Title --> */}
        <div className="section-top-box text-center">
          <h2 className="st-title">We desing & <br/> building innovative idea!</h2>
          <p className="st-desc">It is a long established fact that a reader will be distracted by the readable content of a
            page when looking at its layout. The point of using is the will be distracted.</p>
        </div>
        {/* <!-- Section Top Title --> */}
      </div>

      <div className="inno-video-wrapper mobile-hide">
        <div className="play-btn-wrapper">
          <a className="play-btn" href="https://www.youtube.com/watch?v=h5Kmzh_roxM"></a>
        </div>
      </div>
    </div>
    <div className="inno-video-wrapper mobile-show">
      <div className="play-btn-wrapper">
        <a className="play-btn" href="https://www.youtube.com/watch?v=h5Kmzh_roxM"></a>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Innovocative