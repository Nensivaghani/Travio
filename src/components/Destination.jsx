import React from 'react'
import { Link } from 'react-router-dom'
import DestinationItem from './Items/DestinationItem'

const Destination = () => {
const dest=[
{
    img:'assets/img/place-1.jpg',
    name:'New York City'

},
{
    img:'assets/img/place-2.jpg',
    name:'Norway Lake'

},
{
    img:'assets/img/place-3.jpg',
    name:'Affrican Park'

},
{
    img:'assets/img/place-4.jpg',
    name:'Vietnam'

}

]
  return (
    <>
    <div className="destinations-main">
        <div className="bg-shape">
            <div className="shape1"></div>
            <div className="shape2"></div>
            <div className="shape3"></div>
        </div>
        <div className="container">
            <div className="destinations-inner row">
           
                <div className=" col-lg-4 col-md-6 col-sm-12 title-main">
                  
                    <div class="title">
                            <p>Choose Your place</p>
                            <h2>Popular Destinations</h2>
                        </div>
                        <div className="text">
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiu smod tempor incididunt.</p>
                        </div>
                    
                </div>
                {
                 dest.map((i) =><DestinationItem value={i}/>)
                    
                }
               <div className="col-lg-4 col-md-6 col-sm-12 item " >
                
                    <div className="link-box">
                            <h3>Find All <br/>Destination</h3>
                           <Link to="/" className="button">Find Now</Link>
                        </div>
                    </div>
               
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Destination