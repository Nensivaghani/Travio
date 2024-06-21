import React from 'react'
import Summary from './Sidebar/Summary'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'

const BookingProgress = () => {
  return (
    <>
    <section className="booking-section-main">
            <div className="container">
                <div className="row bookind-section-inner">
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="booking-process-content ">
                            <ul>
                                <li className="current"><span>1.</span>Personal Info</li>
                                <li><span>2.</span>Payment Info</li>
                                <li><span>3.</span>Confirm</li>
                            </ul>
                            <div className="form-inner">
                                <h3>Personal Info</h3>
                                <form  method="post" className="processing-form">
                                    <div className="row ">
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>First Name</label>
                                                <input type="text" name="fname" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Last Name</label>
                                                <input type="text" name="lname" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Address 1</label>
                                                <input type="text" name="address1" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Address 2</label>
                                                <input type="text" name="address2" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>City</label>
                                                <input type="text" name="city" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Zip Code</label>
                                                <input type="text" name="zip" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>State</label>
                                                <input type="text" name="state" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Country</label>
                                                <input type="text" name="country" required=""/>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="form-inner">
                                                <label>Message</label>
                                                <textarea name="message"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-md-12 col-sm-12 column">
                                            <div className="content-btn">
                                                <Link className="button">Next<IoIosArrowForward /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                        <div className="process-sidebar">
                           <Summary/>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    
    
    </>
  )
}

export default BookingProgress