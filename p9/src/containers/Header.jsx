import React from 'react'
import SubHeading from '../components/SubHeading'
import { images } from '../constants'

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tempore
          fugit perferendis unde recusandae magnam doloribus inventore laborum
          reprehenderit eos, expedita odio tempora doloremque nihil repellendus
          amet ipsam ducimus dolorum.
        </p>
        <button type='button' className='custom__button'>Explore Menu</button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  )
}

export default Header
