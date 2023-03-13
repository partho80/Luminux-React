import React from 'react'

function BlogAll() {
  return (
      <div>
          
  <section id="blog" class="section-padding">
    <div class="blog-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-12">
            {/* <!-- Search Start --> */}
            <div class="product-search mb-3 mobile-show">
              <div class="search-box">
                <input type="text" placeholder="Search Here"/><span><i class="fas fa-search"></i></span>
              </div>
            </div>
            {/* <!-- Search End --> */}
            <div class="blog-wrapper">
              <div class="single-blog mb-5">
                <div class="blog-img">
                  <img src="assets/img/blog-1.jpg" alt=""/>
                </div>
                <div class="bc-comment d-flex mt-3">
                  <a href="#" class="text-custom me-4"><span><i class="fas fa-user"></i></span>Elex Janto </a>
                  <p class="text-custom me-4"><span><i class="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" class="text-custom"><span><i class="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div class="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" class="read-more-btn mt-3">read more <span><i
                      class="fas fa-arrow-right"></i></span></a>
              </div>
              <div class="single-blog mb-5">
                <div class="blog-img">
                  <img src="assets/img/blog-2.jpg" alt=""/>
                </div>
                <div class="bc-comment d-flex mt-3">
                  <a href="#" class="text-custom me-4"><span><i class="fas fa-user"></i></span>Elex Janto </a>
                  <p class="text-custom me-4"><span><i class="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" class="text-custom"><span><i class="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div class="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" class="read-more-btn mt-3">read more <span><i
                      class="fas fa-arrow-right"></i></span></a>
              </div>
              <div class="single-blog mb-5">
                <div class="blog-img">
                  <img src="assets/img/blog-3.jpg" alt=""/>
                </div>
                <div class="bc-comment d-flex mt-3">
                  <a href="#" class="text-custom me-4"><span><i class="fas fa-user"></i></span>Elex Janto </a>
                  <p class="text-custom me-4"><span><i class="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" class="text-custom"><span><i class="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div class="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" class="read-more-btn mt-3">read more <span><i
                      class="fas fa-arrow-right"></i></span></a>
              </div>
              <div class="single-blog mb-5">
                <div class="blog-img">
                  <img src="assets/img/blog-4.jpg" alt=""/>
                </div>
                <div class="bc-comment d-flex mt-3">
                  <a href="#" class="text-custom me-4"><span><i class="fas fa-user"></i></span>Elex Janto </a>
                  <p class="text-custom me-4"><span><i class="fas fa-calendar-week"></i></span> 01 Feb 2022</p>
                  <a href="#" class="text-custom"><span><i class="fas fa-tag"></i></span>Web Design</a>
                </div>
                <div class="blog-title mt-2">
                  <h3>Objectively conceptualize value-added human capital for high standards in web services.</h3>
                </div>

                <a href="blog-details.html" class="read-more-btn mt-3">read more <span><i
                      class="fas fa-arrow-right"></i></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            {/* <!-- Search Start --> */}
            <div class="product-search mb-3 mobile-hide">
              <h3 class="sidebar-title mb-4">Search</h3>
              <div class="search-box">
                <input type="text" placeholder="Search Here"/><span><i class="fas fa-search"></i></span>
              </div>
            </div>
            {/* <!-- Search End -->

            <!-- Recent Post Start --> */}
            <div class="recent-post-wrapper mb-5">
              <h3 class="sidebar-title mb-4">Recent Post</h3>
              <ul class="recent-post-collection">
                <li class="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-1.jpg" alt="" class="rp-sm-img me-3"/>
                  <div class="rp-text d-inline-block">
                    <a href="blog-details.html" class="rp-title">Design how it work</a>
                    <p class=""><span><i class="fas fa-calendar-week"></i></span> 14 May 2022</p>
                  </div>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-2.jpg" alt="" class="rp-sm-img me-3"/>
                  <div class="rp-text d-inline-block">
                    <a href="blog-details.html" class="rp-title">Many of the best UI?</a>
                    <p class=""><span><i class="fas fa-calendar-week"></i></span> 25 Dec 2022</p>
                  </div>
                </li>
                <li class="d-flex align-items-center mb-3">
                  <img src="assets/img/blog-4.jpg" alt="" class="rp-sm-img me-3"/>
                  <div class="rp-text d-inline-block">
                    <a href="blog-details.html" class="rp-title">User Experience Role</a>
                    <p class=""><span><i class="fas fa-calendar-week"></i></span> 03 Sep 2022</p>
                  </div>
                </li>
              </ul>
            </div>
            <hr/>
            {/* <!-- Recent Post End -->

            <!-- Category Section Start --> */}
            <div class="categories-wrapper mb-5">
              <h3 class="sidebar-title mb-4">Categories</h3>
              <ul class="categories-collection">
                <li><a href="#">Minimal <span>(20)</span> </a></li>
                <li><a href="#">User Experience <span>(15)</span> </a></li>
                <li><a href="#">Web Design <span>(17)</span> </a></li>
                <li><a href="#">Motion Design <span>(10)</span> </a></li>
                <li><a href="#">Inspiration <span>(13)</span> </a></li>
                <li><a href="#">Trendy <span>(18)</span> </a></li>
              </ul>
            </div>
            <hr/>
            {/* <!-- Category Section End --> */}


            {/* <!-- Tags Section Start --> */}
            <div class="tags-wrapper mb-5">
              <h3 class="sidebar-title mb-4">Tags</h3>
              <ul class="tags-collection blog-tag-colloection">
                <li><a href="#" class="tags-choice">Design</a></li>
                <li><a href="#" class="tags-choice">Minimal</a></li>
                <li><a href="#" class="tags-choice">Art Design</a></li>
                <li><a href="#" class="tags-choice">Typography </a></li>
                <li><a href="#" class="tags-choice">Colorful</a></li>
                <li><a href="#" class="tags-choice">Development</a></li>
                <li><a href="#" class="tags-choice">Native Apps</a></li>
              </ul>
            </div>
            <hr/>`
            {/* <!-- Tags Section End --> */}

            {/* <!-- Social Section Start --> */}
            <div class="categories-wrapper mb-5">
              <h3 class="sidebar-title mb-4">Follow Us</h3>
              <ul class="footer-social social-collection">
                <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
            {/* <!-- Social Section End --> */}
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Pagination Section Start --> */}
  <div class="pagination-section section-padding-bottom">
    <div class="container">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item d-none"><a class="page-link" href="#"><span><i class="fas fa-arrow-left"></i></span>
              Previous</a></li>
          <li class="page-item"><a class="page-link active" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">Next <span><i class="fas fa-arrow-right"></i></span></a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
  {/* <!-- Pagination Section End --> */}
    </div>
  )
}

export default BlogAll