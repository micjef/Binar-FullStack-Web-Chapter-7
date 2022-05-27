import React from 'react'
import FacebookIcon from '../../assets/img/icon_facebook.png'
import InstagramIcon from '../../assets/img/icon_instagram.png'
import TwitterIcon from '../../assets/img/icon_twitter.png'
import MailIcon from '../../assets/img/icon_mail.png'
import TwitchIcon from '../../assets/img/icon_twitch.png'

const Footer = () => {
  return (
    <div>
      <section className="footer">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md my-1">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md my-1">
              <p>
                <a
                  href="#services"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Our services
                </a>
              </p>
              <p>
                <a
                  href="#why-us"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Why Us
                </a>
              </p>
              <p>
                <a
                  href="#testi"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Testimonial
                </a>
              </p>
              <p>
                <a
                  href="#faq"
                  className="text-decoration-none text-dark fw-bold"
                >
                  FAQ
                </a>
              </p>
            </div>
            <div className="col-md my-1">
              <p>Connect with us</p>
              <img src={FacebookIcon} alt="Facebook" />
              <img src={InstagramIcon} alt="Instagram" />
              <img src={TwitterIcon} alt="Twitter" />
              <img src={MailIcon} alt="Mail" />
              <img src={TwitchIcon} alt="Twitch" />
            </div>
            <div className="col-md my-1">
              <p>Copyright Binar 2022</p>
              <div className="navbar-brand"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer