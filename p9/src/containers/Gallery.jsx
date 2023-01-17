import React, { useRef } from 'react'
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from 'react-icons/bs'
import { SubHeading } from '../components'
import { images } from '../constants'

const galleryImg = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
]

const Gallery = () => {
  const scrollRef = useRef(null)
  const scroll = (direction) => {
    const { current } = scrollRef

    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
          exercitationem illum non tenetur expedita dolorem, voluptatibus, modi
          ullam placeat aliquam enim neque! Reiciendis sequi officia vitae ea
          iusto dolorem illum.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-img">
        <div className="app__gallery-img_container" ref={scrollRef}>
          {galleryImg.map((image, index) => (
            <div
              className="app__gallery-img_card flex__center"
              key={`gallery_img-${index + 1}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="app__gallery-img-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-img_arrow">
          <BsArrowLeftShort
            className="app__gallery-img_arrow-icon"
            onClick={() => scroll('left')}
          />
          <BsArrowRightShort
            className="app__gallery-img_arrow-icon"
            onClick={() => scroll('right')}
          />
        </div>
      </div>
    </div>
  )
}

export default Gallery
