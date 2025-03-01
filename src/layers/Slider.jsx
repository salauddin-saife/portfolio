import React from 'react'
import Container from '../components/Container'
import Carts from '../components/Carts'

const Slider = () => {
  return (
    <div> {/* =================================
        Card slider section
        ================================= */}
        <Container container_class={" pt-[] relative "}>
          <div className="absolute bottom-[-200px] right-[80px]">
            {/* <Carts /> */}
            <Carts showArrow={true} />
            {/* <Carts showArrow={false} /> // Arrow will be hidden */}
          </div>
        </Container></div>
  )
}

export default Slider