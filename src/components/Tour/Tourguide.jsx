import React from 'react'
import TousguidsItem from '../Items/TousguidsItem'


const Tourguide = () => {
    const team = [
        {
            img: 'assets/img/team-1.jpg',
            name: 'Merrie Lewis'
        },
        {
            img: 'assets/img/team-2.jpg',
            name: 'Parks Missie'
        },
        {
            img: 'assets/img/team-3.jpg',
            name: 'Mariana Buenos'
        }
    ]
    return (
        <>

            <div className="tour-main">
                <div className="bg-shape">
                    <div className="shape1"></div>
                    <div className="shape2"></div>

                </div>
                <div className="title">
                    <p>Tour Guide</p>
                    <h2>Expert Tour Guides</h2>
                </div>
                <div className="container">
                    <div className="tour-inner row">

                        {
                            team.map((i) => <TousguidsItem value={i} />)
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tourguide