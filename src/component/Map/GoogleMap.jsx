import React from 'react'

function GoogleMap() {
  return (
      <div>
           <div id="googleMap" className="google-map">
    <div className="google-map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d58391.92348905992!2d90.33451974553982!3d23.83654255462999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755c14a3366b005%3A0x901b07016468944c!2sMirpur%20DOHS%2C%20Dhaka!3m2!1d23.836468!2d90.36953919999999!5e0!3m2!1sen!2sbd!4v1642575818911!5m2!1sen!2sbd"
        allowFullScreen="" loading="lazy"></iframe>
    </div>
    <div className="container">
      <div className="contact-card-wrapper">
        <div className="contact-card">
          <p className="contact-card__icon"><i className="fa-solid fa-location-dot"></i></p>
          <p className="contact-card__text">255 Brooklyn, Sheet Name</p>
          <p className="contact-card__text">New York, USA</p>
        </div>
        <div className="contact-card">
          <p className="contact-card__icon"><i className="fa-solid fa-globe"></i></p>
          <p className="contact-card__text">info@yourmail.com</p>
          <p className="contact-card__text">www.yourwebsite.com</p>
        </div>
        <div className="contact-card">
          <p className="contact-card__icon"><i className="fa-solid fa-phone"></i></p>
          <p className="contact-card__text">(000) 123 456 987</p>
          <p className="contact-card__text">(000) 122 457 999</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default GoogleMap