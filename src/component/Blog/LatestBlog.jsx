import React from 'react'

function LatestBlog() {
  return (
      <div>
          <div id="latest-blog" className="section-padding">
    <div className="latest-blog-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-latest-blog">
              <div className="slb-top">
                <img src="assets/img/latest-blog-1.jpg" alt="" className="slbt-img"/>
                <div className="slb-hover">
                  <a href="blog.html" className="btn btn-custom btn-custom-primary">Learn More</a>
                </div>
              </div>

              <div className="blog-content mt-3">
                <div className="bc-comment">
                  <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <p className="text-custom tc-broder">|</p>
                  <a href="#" className="text-custom"><span><i className="fa-solid fa-tag"></i></span>Design</a>
                </div>

                <div className="blog-title mt-3">
                  <a href="blog-details.html">Mobile UI Design:
                    7 Basic Typography Rules</a>
                  <p>Risus in hendrerit gravida rutrum quisque
                    non tellus orci ac rutrum quisque .</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-latest-blog">
              <div className="slb-top">
                <img src="assets/img/latest-blog-2.jpg" alt="" className="slbt-img"/>
                <div className="slb-hover">
                  <a href="blog.html" className="btn btn-custom btn-custom-primary">Learn More</a>
                </div>
              </div>

              <div className="blog-content mt-3">
                <div className="bc-comment">
                  <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <p className="text-custom tc-broder">|</p>
                  <a href="#" className="text-custom"><span><i className="fa-solid fa-tag"></i></span>marketing</a>
                </div>

                <div className="blog-title mt-3">
                  <a href="blog-details.html">Review of Popular Web Design Trends in 2021</a>
                  <p>Risus in hendrerit gravida rutrum quisque
                    non tellus orci ac rutrum quisque .</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <div className="single-latest-blog">
              <div className="slb-top">
                <img src="assets/img/latest-blog-3.jpg" alt="" className="slbt-img"/>
                <div className="slb-hover">
                  <a href="blog.html" className="btn btn-custom btn-custom-primary">Learn More</a>
                </div>
              </div>

              <div className="blog-content mt-3">
                <div className="bc-comment">
                  <p className="text-custom"><span><i className="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <p className="text-custom tc-broder">|</p>
                  <a href="#" className="text-custom"><span><i className="fa-solid fa-tag"></i></span>Development</a>
                </div>

                <div className="blog-title mt-3">
                  <a href="blog-details.html">Web Development Advanced Tips</a>
                  <p>Risus in hendrerit gravida rutrum quisque
                    non tellus orci ac rutrum quisque .</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default LatestBlog