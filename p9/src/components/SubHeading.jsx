import React from 'react'
import img from '../constants/images'

const SubHeading = ({title}) => {
  return (
    <div className='header__subheading '>
      <p className='p__cormorant'>{title}</p>
      <img src={img.spoon} alt="spoon" />
    </div>
  )
}

export default SubHeading