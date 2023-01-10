import React from 'react'

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        <div className="app__menuItem-name">
          <p className="p__cormorant">{title}</p>
        </div>

        <div className="app__menuItem-dash" />

        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuItem-sub">
        <p className="open__sans">{tags}</p>
      </div>
    </div>
  )
}

export default MenuItem
