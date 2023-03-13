import React from 'react'

function Footer() {
  return (
    <div>
      <footer id="footer">
    <div className="footer-section">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row mb-5 row-align">
            <div className="col-lg-6 col-md-3 mb-4">
              <a href="index.html"><img className="main-logo" src="assets/img/logo.png" alt=""/></a>
            </div>
            <div className="col-lg-6 col-md-9">
              <div className="footer-faq">
                <h5>Need Any Help?</h5>
                <ul className="footer-top-ul">
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Get Started</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-lg-5 col-md-6 mb-5 pe-lg-5">
              <h5 className="footer-top-title mb-4">About Company</h5>
              <p className="footer-desc mb-4">Nisl vel pretium lectus quam id leo in vitae turpis. Id leo in vitae turpis.
                Eget nullam non nisi est sit amet Id leo Nisl vel pretium turpis. Eget nullam non nisi est sit amet Id
                leo Nisl vel pretium
              </p>

              <p className="copyright">&copy;Copyright Luminouslabs 2022</p>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 ">
              <h5 className="footer-top-title mb-4">Information</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6 mb-5 ">
              <h5 className="footer-top-title mb-4">SUPPORT</h5>
              <ul className="footer-item-collection">
                <li><a href="#">Newsletter</a></li>
                <li><a href="#">Community Guidelines</a></li>
                <li><a href="#">Advertise Online</a></li>
                <li><a href="#">Privacy Notice</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 ">
              <h5 className="footer-top-title mb-4">Contact</h5>
              <ul className="footer-item-collection mb-4">
                <li><a href="#">(+00) 123 456 789</a></li>
                <li><a href="#">Infor@yourmail.com</a></li>
                <li><a href="#">www.yourdomain.com</a></li>
                <li><a href="#">255 Sheet, Your City Name</a></li>
              </ul>

              <ul className="footer-social">
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>

  {/* <!-- Footer Section End -->

  <!-- scroll top start --> */}
  <a className="material-scrolltop">
    <i className="fas fa-arrow-circle-up"></i>
  </a>
  {/* <!-- scroll top end --> */}
      </div>
        
  )
}

export default Footer