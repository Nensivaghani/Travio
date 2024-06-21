import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Sticky from 'react-sticky-el';
import SignUp from './SignUp';

export const Header = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <header>
        <Sticky>
          <Navbar expand="lg" >
            <div className="left">
              <Navbar.Brand href="/home">
                <div className="img-content">
                  <img src="assets/img/logo.png" alt="" />
                </div>

              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" className='' />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <NavDropdown title="Denstination" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/destinations">Destinations</NavDropdown.Item>
                    <NavDropdown.Item href="/destinationsdetail"> Destinations Detail </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Tours" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/tourelist"> Tours List</NavDropdown.Item>
                    <NavDropdown.Item href="/touredetails"> Tours Details</NavDropdown.Item>
                    <NavDropdown.Item href="/touredeals"> Tours Deals</NavDropdown.Item>
                    <NavDropdown.Item href="/tourguide"> Tours Guides</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/bookingprocress">Booking Process</NavDropdown.Item>
                    <NavDropdown.Item href="/gallery"> Gallary</NavDropdown.Item>
                    <NavDropdown.Item href="/faq"> FAQ's</NavDropdown.Item>
                    <NavDropdown.Item href="/error"> 404</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Blog" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/blogList">Blog List</NavDropdown.Item>
                    <NavDropdown.Item href="/blogdetails"> Blog Detail </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
           
              <div class="contact-info">
                <h4>Contact Info</h4>
                <ul>
                  <li>Chicago 12, Melborne City, USA</li>
                  <li><Link to="tel:+8801682648101">+88 01682648101</Link></li>
                  <li><Link to="mailto:info@example.com">info@example.com</Link></li>
                </ul>
                 </div>
              <div class="social-links">
                <ul class="clearfix">
                  <li><Link to="/"><span class="fab fa-twitter"></span></Link></li>
                  <li><Link to="/"><span class="fab fa-facebook-square"></span></Link></li>
                  <li><Link to="/"><span class="fab fa-pinterest-p"></span></Link></li>
                  <li><Link to="/"><span class="fab fa-instagram"></span></Link></li>
                  <li><Link to="/"><span class="fab fa-youtube"></span></Link></li>
                </ul>
                 </div>
                 </Navbar.Collapse>
            </div>
            <div className="right">
              <div className="menu-icons">
                <div className="search">
                  <Link to="/"><FaSearch /></Link>
                </div>
                <div className="search">
                  <Link to="/" onClick={handleShow}><FaUser /></Link>

                  <Modal show={show} onHide={handleClose}>
                  
                  <SignUp/>
                  </Modal>

                </div>
              </div>
              <div className="btn-content">
                <Link to="/" className='button'>Book A Tour</Link>
              </div>
            </div>

          </Navbar>
        </Sticky>
      </header>



    </>
  )
}
