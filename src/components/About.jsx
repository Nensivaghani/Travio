import React from 'react'
import { Link } from 'react-router-dom'
import { RiPlayCircleLine } from "react-icons/ri";

const About = () => {
    return (
        <>
            <div className="about-main">
                <div className="pattern-layer"> </div>
                <div className="bg-shape">
                    <div className="shape1"></div>
                    <div className="shape2"></div>
                </div>
                <div className="container">
                    <div className="about-inner row">
                        <div className="left  col-lg-6 col-md-12 col-sm-12">
                            <div className="left-inner ">
                                <div className="img-box">
                                    <div className="img-content">
                                        <img src="assets\img\about-4.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="text-content">
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt ut labore dolore magna aliqua.Quis ipsum suspen disse ultrices gravida.</p>
                                    <h3>Find Your Best <br />Destination</h3>
                                    <Link to="/"> <RiPlayCircleLine /></Link>
                                </div>
                            </div>

                        </div>
                        <div className="right col-lg-6 col-md-12 col-sm-12">
                            <div className="right-inner ">
                                <div className="text-content">
                                    <p>About travio</p>
                                    <h2>Best Travel Agency Since 2008.</h2>
                                </div>
                                <div className="img-box">
                                    <img src="assets\img\about-5.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default About