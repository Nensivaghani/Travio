import React from 'react'
import CounterItem from './Items/CounterItem'


const Counter = () => {
    const counter = [
{
    img: 'assets/img/shape-5.png',
    Count:'2000',
    plus:'+',
    title:'Awesome Hikers'
},
{
    img: 'assets/img/shape-6.png',
    Count:'70',
    plus:'+',
    title:'Stunning Places'   
},
{
    img: 'assets/img/shape-7.png',
    Count:'1200',
    plus:'+',
    title:'Miles to Hike'
},
{
    img: 'assets/img/shape-8.png',
    Count:'15',
    title:'Years in Service'
}
    ]
  return (
    <>
    <div className="counter-main">
        <div className="bg-shape">
            <div className="shape1"></div>
            <div className="shape2"> </div>
        </div>
        <div className="container">
            <div className="counter-inner">
                <div className="row">
                {
                            counter.map((i) =><CounterItem value={i}/>)
                        }
                  
                </div>
            </div>
        </div>
    </div>
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Counter