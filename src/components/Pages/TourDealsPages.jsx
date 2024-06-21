import React from 'react'
import PagesTitle from '../PagesTitle'
import TourDeals from '../Tour/TourDeals'
import Map from '../Map'
import Counter from '../Counter'

const TourDealsPages = () => {
  return (
    <>
    <PagesTitle title='Tour Deals'/>
    <TourDeals />
    <Map/>
    <Counter/>

    </>
  )
}

export default TourDealsPages