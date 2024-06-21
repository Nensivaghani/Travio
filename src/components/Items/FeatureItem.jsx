import React from 'react'
import { Link } from 'react-router-dom'

const FeatureItem = (props) => {


    return (
        <>
            <div className="item">
                <div className="item-inner">
                    <div className="img-content">
                        <img src={props.value.img} alt="" />
                    </div>
                    <div className="text-content">
                        <div className="icon-box">
                            <Link to="/"><img src="assets/img/icon1.png" alt="" /></Link>
                        </div>
                        <h4><Link to="/">{props.value.info}</Link>
                        </h4>
                    </div>
                </div>
            </div>


        </>
    )
}

export default FeatureItem