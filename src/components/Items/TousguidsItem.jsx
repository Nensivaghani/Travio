import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6'


const TousguidsItem = (props) => {
  return (
    <>
    
    <div className="team col-lg-4 col-md-6 col-sm-12">
                    <div className="inner-item">
                        <div className="img-content">
                            <img src={props.value.img}  alt="" />
                        </div>
                        <div className="text-content">
                        <h3><Link to="/">{props.value.name}</Link></h3>
                        <span className="designation">Tour Guide</span>
                        <ul class="social-links">
                        <li><Link to='/'> <FaFacebookF /> </Link></li>
                        <li><Link to='/'> <FaTwitter /> </Link></li>
                        <li><Link to='/'> <FaInstagram /> </Link></li>
                                    </ul>
                        </div>
                    </div>
                </div>
    
    </>
  )
}

export default TousguidsItem