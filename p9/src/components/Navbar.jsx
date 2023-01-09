import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import img from '../constants/images'

const Navbar = () => {

  const [toogleMenu, setToogleMenu] = useState(false)


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={img.gericht} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">Awards</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          Log in / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="app__navbar-smallscreen_GiHamburgerMenu"
          onClick={() => setToogleMenu(true)}
        />
        {toogleMenu && (
        <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <MdOutlineRestaurantMenu className='app__navbar-smallscreen overlay_MdOutlineRestaurantMenu' onClick={() => setToogleMenu(false)}/>
       
        <ul className="app__navbar-smallscreen_links">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
         </div>
         )}
      </div>
      
    </nav>
  )
}

export default Navbar
