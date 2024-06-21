import React from 'react'
import TousguidsItem from '../Items/TousguidsItem'

const GuidePage = () => {
    const team = [
        {
            img: "assets/img/team-1.jpg",
            name: "Merrie Lewis",
          },
          {
            img: "assets/img/team-2.jpg",
            name: "Parks Missie",
          },
          {
            img: "assets/img/team-3.jpg",
            name: "Mariana Buenos",
          },
          {
            img: "assets/img/team-4.jpg",
            name: "Stephen Fowler",
          },
          {
            img: "assets/img/team-5.jpg",
            name: "Daisy Phillips",
          },
          {
            img: "assets/img/team-6.jpg",
            name: "Gregory Bowman",
          },
    ]
  return (
    <>
    <div className="guide-main">
        <div className="container">
            <div className="guide-inner row">
            {
                            team.map((i) => <TousguidsItem value={i} />)
                        }
            </div>
        </div>
    </div>



    </>
  )
}

export default GuidePage