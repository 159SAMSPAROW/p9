import React from 'react'
import images from '../constants/images'

const AboutUs = () => {
  return (
    <div
      className="app__aboutUs app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutUs-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutUs-content flex__center">
       
        <div className="app__aboutUs-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            cupiditate nulla molestias corrupti! Ullam aliquid non cupiditate,
            saepe cumque officia quidem nesciunt quam dolores. Consectetur
            inventore tenetur quae aperiam ipsa!
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>

        <div className='app__aboutUs-content_knife flex__center'>
          <img src={images.knife} alt="knife" />
        </div>

        <div className="app__aboutUs-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about spoon" className="spoon__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            cupiditate nulla molestias corrupti! Ullam aliquid non cupiditate,
            saepe cumque officia quidem nesciunt quam dolores. Consectetur
            inventore tenetur quae aperiam ipsa!
          </p>
          <button type='button' className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
