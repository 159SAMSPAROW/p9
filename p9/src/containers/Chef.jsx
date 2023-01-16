import React from 'react'
import { SubHeading } from '../components'
import { images } from '../constants'

const Chef = () => {
  return (
    <div className='app__bg app__wrapper section__padding'>
      <div className='app__wrapper_img app__wrapper_img-reverse'>
        <img src={images.chef} alt="chef" />
      </div>

      <div className='app__wrapper_info'>
        <SubHeading title="Chef's Word"/>
        <h1 className='headtext__cormorant'>What We believe In</h1>

        <div className='app__chef-content'>
          <div className='app__chef-content_quote'>
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vel laudantium facilis dolores consectetur</p>
          </div>
          <p className='p__opensans'>consectetur adipisicing elit. Iusto vel laudantium facilis dolores consectetur, maiores optio facere itaque accusantium labore doloribus nulla corporis praesentium? Tenetur itaque repellat quasi voluptates fugiat!</p>
        </div>

        <div className='app__chef-sign'>
          <p>Kevin luo</p>
          <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>

      </div>
    </div>
  )
}

export default Chef