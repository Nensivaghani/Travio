import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DealItem from './Items/DealItem';
const Deal = () => {
    const deal = [
        {
            img: 'assets/img/deals-1.jpg',
        },
        {
            img: 'assets/img/deals-2.2.jpg',
        },   
        {
            img: 'assets/img/deals-1.jpg',
        },
        {
            img: 'assets/img/deals-2.2.jpg',
        }


    ]
    return (
        <>
            <div className="deal-main">
                <div className="container">

                    <div className="deal-inner">
                        <div className="title">
                            <p>Deals & Offers</p>
                            <h2>Last Minute Amazing Deals</h2>
                        </div>
                        <div className="content">
                        <OwlCarousel className='owl-theme' loop margin={10} nav items={1} autoplay autoplayTimeout={4000} autoplaySpeed={3000}>

                            {
                                deal.map((i) => <DealItem value={i} />)
                            }

                        </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default Deal