import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const UpdateItem = (props) => {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12 item">
              <div className="item-inner">
                <div className="img-content">
                  <Link to="/"><img src={props.value.img} alt="" /></Link>
                  <div className="post-date">
               <span><FaRegCalendarAlt /></span> {props.value.date}
                  </div>
                </div>
                <div className="text-content">
                <div className="category"><Link to="/">Lifestyle</Link></div>
                  <h3><Link to="/">{props.value.title}</Link></h3>
                  <div className="post-info">
                    <span>
                      <span>By</span>
                     <Link to="/"> Eva Green </Link>
                     </span>
                    <span>  -  October 13, 2020</span>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectur adip icing sed do eiusmod tempor incididunt labore dolore magna aliqua enim.</p>
                  <div className="btn-content">
                    <Link to="" className='button'>See Details</Link>
                  </div>
                </div>
              </div>
            </div>
    
    
    
    
    
    </>
  )
}

export default UpdateItem