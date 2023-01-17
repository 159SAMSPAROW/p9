import React from 'react'
import { SubHeading } from '../components'
import { images } from '../constants'

const Findus = () => {
 
  return (

    <div className='app__bg app__wrapper section__padding' id='contact'>
      <div className='app__wrapper_info app__findus'>
        <SubHeading title='Contact'/>
        <h1 className='headtext__cormorant'>Find Us</h1>
        <div className='app__wrapper-content app__findus-content'>
          <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW 7SG</p>
          <p className='p__cormorant app__wrapper-content app__findus-content_opening-hours'>Openings Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
          <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</p>
        </div>
        <button className='custom__button'>Visit Us</button>
      </div>

      <div className='app__wrapper_img'>
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  )
}

export default Findus