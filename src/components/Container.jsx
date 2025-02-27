import React from 'react'

const Container = ({children, container_class}) => {
  return (
    <div className={container_class}>
        <div className='w-[1728px] h-[] mx-auto'>
            <h1>{children}</h1>
        </div>
    </div>
  )
}

export default Container