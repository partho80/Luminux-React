import React from 'react'

function OurSelvesHome() {
  return (
      <div>
          <section id="ourselves" className="ourselves section-padding-bottom">
    <div className="ourselves-section section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-5">
            <div className="ourselves-video-wrapper">
              <div className="ov-img-wrapper">
                <img src="assets/img/video-bg.jpg" alt="" className="ov-img"/>
                <div className="pb-before-bg"></div>
              </div>
              <div className="play-btn-wrapper">
                <a className="play-btn" href="https://www.youtube.com/watch?v=h5Kmzh_roxM"></a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="ourselves-right">
              <h2 className="or-title mb-5">We design & build modern brand design</h2>

              <div className="or-tabs">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                      aria-selected="true">Our Mission</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                      aria-selected="false">Our Vision</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                      data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                      aria-selected="false">Our History</button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                    aria-labelledby="pills-home-tab">
                    <p>Called fruitful male female make greater forth man a seas for winged which life yielding his
                      above to myriads of huge lichens days. Elit eget gravida cum sociis. Vestibulum rhoncus. Quisque
                      non tellus orci ac auctor augue mauris augue neque. Mi bibendum neque egestas congue quisque
                      egestas diam.</p> <br/>
                    <p>Elit eget gravida cum sociis. Vestibulum rhoncus. Quisque non tellus orci ac auctor augue mauris
                      augue neque. Mi bibendum neque egestas congue quisque egestas diam augue mauris augue neque. </p>
                    <br/>
                    <p>Vestibulum rhoncus. Quisque non tellus orci ac auctor augue mauris augue neque. Mi bibendum
                      neque.</p>
                  </div>
                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <p>Called fruitful male female make greater forth man a seas for winged which life yielding his
                      above to myriads of huge lichens days. Elit eget gravida cum sociis. Vestibulum rhoncus. Quisque
                      non tellus orci ac auctor augue mauris augue neque. Mi bibendum neque egestas congue quisque
                      egestas diam.</p> <br/>
                    <p>Elit eget gravida cum sociis. Vestibulum rhoncus. Quisque non tellus orci ac auctor augue mauris
                      augue neque. Mi bibendum neque egestas congue quisque egestas diam augue mauris augue neque. </p>
                    <br/>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <p>Called fruitful male female make greater forth man a seas for winged which life yielding his
                      above to myriads of huge lichens days. Elit eget gravida cum sociis. Vestibulum rhoncus. Quisque
                      non tellus orci ac auctor augue mauris augue neque. Mi bibendum neque egestas congue quisque
                      egestas diam.</p>
                  </div>
                </div>

              </div>

              <div className="or-btn-wrapper">
                <a href="#" className="btn btn-custom btn-custom-main">Learn More</a>

                <p><span><i className="fa-solid fa-phone"></i></span>(00) 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default OurSelvesHome