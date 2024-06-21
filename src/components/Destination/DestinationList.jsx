import React from 'react'
import Masonry from '@mui/lab/Masonry';
import DestinationItem from '../Items/DestinationItem';


const DestinationList = () => {
    const destination = [
        {
            img: 'assets/img/place-1.jpg',
            name: 'New York City'

        },
        {
            img: 'assets/img/place-5.jpg',
            name: 'Norway Lake'

        },
        {
            img: 'assets/img/place-13.jpg',
            name: 'Mont Blanc'

        },
        {
            img: 'assets/img/place-3.jpg',
            name: 'Costa Rica'

        },
        {
            img: 'assets/img/place-4.jpg',
            name: 'Vietnam'

        }

    ]

    return (
        <>
            <div className="destinations-main">
                <div className="container">
                    <div className="destination-list row">
                        <Masonry columns={3}>
                            {
                                destination.map((i) => <DestinationItem value={i} />)
                            }
                        </Masonry>

                    </div>
                </div>
            </div>

        </>
    )
}

export default DestinationList