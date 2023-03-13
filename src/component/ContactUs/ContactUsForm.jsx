import React from 'react'

function ContactUsForm() {
  return (
      <div>
           <section id="contact-us" className="contact-us section-padding">
    <div className="contact-us-section">
      <div className="container">
        {/* <!-- Section Top Title --> */}
        <div className="section-top-box text-center">
          <h2 className="st-title">Get in Touch</h2>
          <p className="st-desc">Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Mauris pellentesque pulvinar
            pellentesque.</p>
        </div>
        {/* <!-- Section Top Title --> */}
        <div className="row"> 
          <form className="contact-form" method="post" action="php/mail.php" id="cf">
            <div className="cf-msg"></div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group mb-4">
                  <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Name"/>
                </div>
              </div>
            </div> 
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-4">
                  <input type="text" className="form-control" id="sub-input" placeholder="Phone Number"/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group mb-4">
                  <textarea className="form-control" id="msg" name="msg" rows="7" placeholder="Write your comment..."></textarea>
                </div>
              </div>
            </div> 
            <button id="submit" name="submit" type="submit" className="btn btn-custom btn-custom-primary cf-btn">Submit</button> 
          </form>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default ContactUsForm