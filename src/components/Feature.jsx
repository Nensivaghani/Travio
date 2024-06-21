import React from 'react'
import FeatureItem from './Items/FeatureItem'

const Feature = () => {
    const feature = [
        {
            img:'assets/img/feature-1.jpg',
            info:'2000+ Our Worldwide Guides'
        },
        {
            img:'assets/img/feature-2.jpg',
            info:'100% Trusted Tour Agency'
        },
        {
            img:'assets/img/feature-3.jpg',
            info:'12+ Years of Travel Experience'
        },
        {
            img:'assets/img/feature-4.jpg',
            info:'98% of Our Travelers are Happy'
        }
    ]
    return (
        <>
            <div className="feature-main">
                <div className="container">
                    <div className="title">
                        <p>Travio Specials</p>
                        <h2>Why Travel with Tutive?</h2>
                    </div>
                    <div className="feature-inner">
                        {
                            feature.map((i) =><FeatureItem value={i}/>)
                        }
                    
                    </div>
                </div> 
            </div>
        </>
    )
}

export default Feature