import React from 'react'
import About from '../About'
import Destination from '../Destination'
import Video from '../Video'
import PagesTitle from '../PagesTitle'
import Tourguide from '../Tour/Tourguide'

const AboutUs = () => {
  return (
    <>
  <PagesTitle  title='About us'/>
    <About/>
    <Video/>
    <Destination/>
     <Tourguide/>

    </>
  )
}

export default AboutUs