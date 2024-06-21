import React from 'react'
import CountUp from 'react-countup'

const CounterItem = (props) => {
    return (
        <>
            <div className="item ">
                <div className="item-inner col-lg-3 col-md-6 col-sm-12  ">
                    <div className="inner-box">
                        <div className="pattern"><img src={props.value.img} alt="" /></div>
                        <div className="text-content">
                            <span><CountUp end={props.value.Count} durction={5} /></span>
                            <span>{props.value.plus}</span>
                            <p>{props.value.title}</p>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default CounterItem