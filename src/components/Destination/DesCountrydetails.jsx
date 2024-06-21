import React from 'react'
import { IoLocationSharp } from "react-icons/io5";
import { FaDollarSign, FaGlobe, FaPhone, FaRegComments, FaRegEnvelopeOpen, FaRegIdCard, FaRegMap } from "react-icons/fa";
const DesCountrydetails = () => {
  return (
    <>
      <div class="country-details">
        <div class="text">
          <h3>Country Details</h3>
          <p>Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
        <ul class="details-list">
          <li><IoLocationSharp /><span>Address:</span>New York City</li>
          <li><FaRegIdCard /><span>Visa Requirements:</span>Yes Requard</li>
          <li><FaGlobe /><span>Country:</span>New York City</li>
          <li><FaRegComments /><span>Languages spoken:</span>English &amp; Spanish</li>
          <li><FaDollarSign /><span>Currency Used:</span>USD</li>
          <li><FaPhone /><span>Suport Phone:</span><a href="tel:310215402">+310215402</a></li>
          <li><FaRegEnvelopeOpen /><span>Emergency Email:</span><a href="mailto:info@example.com">info@example.com</a></li>
          <li><FaRegMap /><span>Distance:</span>10.7m</li>
        </ul>
      </div>

    </>
  )
}

export default DesCountrydetails