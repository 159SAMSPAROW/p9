import React from 'react'
import { images, data } from '../constants/'
import { SubHeading, MenuItem } from '../components'

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Menu That Fits You Palatte" />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu-wine flex__center">
          <h2>Wine & Beer</h2>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialMenu-menu-cocktails flex__center">
          <h2>Cocktails</h2>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags}/>
            ))}
          </div>
        </div>
        <div className="app__specialMenu_menu_btn">
          <button type="button" className="custom__button">
            View More
          </button>
        </div>
      </div>
    </div>
  )
}

export default SpecialMenu
