import React from 'react'

const Image = ({src, img_class}) => {
  return (
    <div>
        <img  className={img_class} src={src} alt="" />
    </div>
  )
}

export default Image