import React from 'react'

function Faq() {
  return (
    <div> <section id="faq" className="faq-section section-padding section-bg">
    <div className="container">
      {/* <!-- Section Top Title --> */}
      <div className="section-top-box text-center">
        <h2 className="st-title">Frequently Asked Questions</h2>
      </div>
      {/* <!-- Section Top Title --> */}
      <div className="row">
        <div className="col-md-6">
          <div className="faq-wrapper">
            <div className="accordion accordion-flush" id="faq-main">
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-heading-1">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-collapese-1" aria-expanded="false" aria-controls="faq-collapese-1">
                    What's early-bird pricing?
                  </button>
                </h2>
                <div id="faq-collapese-1" className="accordion-collapse collapse" aria-labelledby="faq-heading-1"
                  data-bs-parent="#faq-main">
                  <div className="accordion-body">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
                    assumenda maiores deleniti est eaque, accusantium repellendus.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-heading-2">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-collapese-2" aria-expanded="false" aria-controls="faq-collapese-2">
                    What are the page & storage limits?
                  </button>
                </h2>
                <div id="faq-collapese-2" className="accordion-collapse collapse" aria-labelledby="faq-heading-2"
                  data-bs-parent="#faq-main">
                  <div className="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe explicabo
                    provident quos! Minima, at est. Totam, nostrum. Recusandae maiores aperiam eveniet eligendi
                    veritatis laborum, nisi, laudantium nihil velit cupiditate numquam!</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-heading-3">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-collapese-3" aria-expanded="false" aria-controls="faq-collapese-3">
                    5 Tips for offshore software development?
                  </button>
                </h2>
                <div id="faq-collapese-3" className="accordion-collapse collapse" aria-labelledby="faq-heading-3"
                  data-bs-parent="#faq-main">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
                    voluptatibus veniam fugit rerum nobis ratione aliquid aspernatur rem fuga. Voluptate distinctio
                    commodi molestias doloremque iste neque, modi maiores repellendus obcaecati harum, unde quis illo
                    tempore delectus molestiae odio, officiis culpa enim possimus. Recusandae eaque, provident saepe
                    fuga excepturi quia ex rem magnam harum dolor repudiandae.</div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="faq-heading-4">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#faq-collapese-4" aria-expanded="false" aria-controls="faq-collapese-4">
                    What's early-bird pricing?
                  </button>
                </h2>
                <div id="faq-collapese-4" className="accordion-collapse collapse" aria-labelledby="faq-heading-4"
                  data-bs-parent="#faq-main">
                  <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veniam
                    maiores optio quasi corporis facere quam, alias enim, tempora debitis consequatur ad ea a.
                    Consequuntur, facilis modi? Nostrum, vel dolorem! Dicta libero earum sequi optio quas officia
                    tenetur veniam iusto harum nulla molestias quidem quibusdam et, fugit quod eaque exercitationem,
                    corporis id sed blanditiis fuga.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="home-contact">
            <h4 className="hc-heading mb-4">Need help? Contact Us</h4>
    
            <form className="contact-form" method="post" action="php/mail.php" id="cf"> 
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Name"/>
                  </div>
                </div>
              </div> 
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group mb-3">
                    <input type="text" className="form-control" id="sub-input" placeholder="Phone Number"/>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group mb-3">
                    <textarea className="form-control" id="msg" name="msg" rows="4" placeholder="Your Messages"></textarea>
                  </div>
                </div>
              </div> 
              <div className="cf-msg"></div>
              <button id="submit" name="submit" type="submit" className="btn btn-custom btn-custom-secondary w-100 cf-btn">Submit Request</button> 
            </form>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default Faq