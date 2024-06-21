import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaGooglePlusG, FaLinkedinIn, FaMicrophone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer-main">
        <div className="top">
          <div className="container">
            <div className="footer-inner row" >
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <div className="item-inner">
                  <div className="logo"><Link to='/'><img src="assets\img\footer-logo.png" alt="" /></Link></div>
                  <div className="text"><p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p></div>
                  <ul className="social-link">
                    <li> <Link to="/"><FaFacebookF /></Link></li>
                    <li>   <Link to="/"> <FaTwitter /></Link></li>
                    <li>  <Link to="/"><FaInstagram /></Link></li>
                    <li>   <Link to="/"><FaGooglePlusG /></Link></li>
                    <li>  <Link to="/"><FaLinkedinIn /></Link></li>
                  </ul>
                </div>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <div className="link-inner">
                  <div className="title">
                    <h3>Services</h3>
                  </div>
                  <div className="content">
                    <ul className='links-list'>
                      <li><Link to="/">About Us</Link></li>
                      <li><Link to="/">Listing</Link></li>
                      <li><Link to="/">How It Works</Link></li>
                      <li><Link to="/">Our Services</Link></li>
                      <li><Link to="/">Our Blog</Link></li>
                      <li><Link to="/">Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12">
                <div className="gallery-inner">
                  <div className="title">
                    <h3>Gallery</h3>
                  </div>
                  <ul className='img-list'>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-1.jpg" alt="" /></Link></div></li>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-2.jpg" alt="" /></Link></div></li>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-3.jpg" alt="" /></Link></div></li>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-4.jpg" alt="" /></Link></div></li>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-5.jpg" alt="" /></Link></div></li>
                    <li><div className="img-content"><Link to="/"><img src="assets/img/footer-gallery-6.jpg" alt="" /></Link></div></li>
                  </ul>
                </div>
              </div>
              <div className="item col-lg-3 col-md-6 col-sm-12 ">
                <div className="content-inner">
                  <div className="title">
                    <h3>Contacts</h3>
                  </div>
                  <div className="content">
                    <ul className='info-list'>
                      <li><IoLocationSharp />Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</li>
                      <li><FaMicrophone /><Link to="/">+2(305) 587-3407</Link></li>
                      <li>< MdEmail /><Link to="/">info@example.com</Link> </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <div className="bottom-inner">
              <div className="left">
                <p><Link to="/">Travio</Link> © 2021 All Right Reserved</p>
              </div>
              <div className="right">
                <ul>
                  <li><Link to="/">Terms of Service</Link></li>
                  <li><Link to="/">Privacy Policy</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer