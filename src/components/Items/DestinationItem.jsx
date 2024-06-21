import React from 'react'
import { Link } from 'react-router-dom'

const DestinationItem = (props) => {
  return (
    <>
     <div className=" col-lg-4 col-md-6 col-sm-12 item">
                    <div className="item-inner">
                        <div className="inner-box">
                            <div className="img-content">
                                <img src={props.value.img} alt="" />
                            </div>
                            <div class="text">
                                    <h3><Link to="/">{props.value.name}</Link></h3>
                                </div>
                        </div>

                    </div>
                </div>
    
    
    
    
    </>
  )
}

export default DestinationItem