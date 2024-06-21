import React from 'react'
import { Link } from 'react-router-dom'
import { GoPlay } from "react-icons/go";

const Video = () => {
  return (
    <>
    <div className="video-main">
        <div className="container">
            <div className="text-content">
                    <h2>Explore Your Travel</h2>
                    <p>Your New Traveling Idea</p>
                    </div>
                    <div className="video-btn">
                       <Link to="https://www.youtube.com/watch?v=nfP5N9Yc72A&t=28s"> <GoPlay />
                            <span class="border-animation border-1"></span>
                            <span class="border-animation border-2"></span>
                            <span class="border-animation border-3"></span>
                        </Link>
                   
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Video