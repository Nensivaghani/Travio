import React from 'react'
import MapItem from './Items/MapItem'

const Map = () => {
    const maps = [
        {

            num: '1',
            title: 'Moscow City'
        },
        {

            num: '2',
            title: 'Affrican Park'
        },
        {

            num: '3',
            title: 'Norway Lake'
        },
        {
            num: '4',
            title: 'New York City'
        }
    ]
    return (
        <>
            <div className="map-main">
                <div className="main-inner">
                    <div class="title ">
                        <p>Modern & Beautiful</p>
                        <h2>Explore the World for Travel</h2>
                    </div>
                    <div className="map">
                        <div className="map-inner">
                            {
                                maps.map((i) => <MapItem value={i} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map