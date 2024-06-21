import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Banner = () => {
    return (
        <>
            <div className="banner-main">
                <div className="container">
                    <div className="banner-inner">
                        <div className="content-box">
                            <div className="title-text">
                                <h2>Explore Y
                                    <span>our Travel</span>
                                </h2>
                                <p>Discover your next great adventure.</p>
                            </div>

                            <div className="form-inner">
                                <form className="booking-form" method='post'>
                                    <div class="form-group">
                                        <input type="text" name="service" placeholder="Where to?" required="" />
                                    </div>
                                    <div class="form-group input-date">
                                        <input type="date" name="date" placeholder="When?" id="datepicker" />
                                    </div>
                                    <div class="form-group">
                                        <div class="select-box">
                                            <select class="wide">
                                                <option data-display="Travel Type" selected disabled>Travel Type</option>
                                                <option value="1">Adventure Tours</option>
                                                <option value="2">City Tours</option>
                                                <option value="3">Couple Tours</option>
                                                <option value="4">Group Tours</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="btn-content">
                                        <Link to="/"className="button"><FaSearch /> Find Now</Link>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="layer"></div>
            </div>
        </>
    )
}

export default Banner