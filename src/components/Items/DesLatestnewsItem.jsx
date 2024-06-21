import React from 'react'
import { Link } from 'react-router-dom'

const DesLatestnewsItem = (props) => {
  return (
    <>
    
    <div className="news-content">
            <div className="img-content">
              <Link to="/"><img src={props.value.img} alt="" /></Link>
            </div>
            <span>{props.value.date}</span>
            <h4><Link to="/">{props.value.info}</Link></h4>
          </div>
    
    
    </>
  )
}

export default DesLatestnewsItem