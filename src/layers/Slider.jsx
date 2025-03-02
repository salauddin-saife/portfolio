import React from 'react'
import Container from '../components/Container'
import Carts from '../components/Carts'
import Create from "../assets/Create.png"

const Slider = () => {
  return (
    <div> {/* =================================
        Card slider section
        ================================= */}
        <Container container_class={" pt-[] relative "}>
          <div className="absolute bottom-[-200px] right-[80px]">
            {/* <Carts /> */}
            <Carts showArrow={true} Cards_h1={"Let’s Build & Elevate!"} Carts_p1={"Looking for a skilled web designer & frontend developer? Let's work together!"} class_name={"pb-[]"} src={Create} img_class={"scale-[150%] bottom-[350px] hover:scale-[160%]"} />
            {/* <Carts showArrow={false} /> // Arrow will be hidden */}
          </div>
        </Container></div>
  )
}

export default Slider