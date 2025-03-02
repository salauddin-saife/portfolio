import React from 'react'
import Container from '../components/Container'
import Cart_2 from '../components/Cart_2'
import E_commerce from "../assets/E_commerce.png"

const Card_2_Part = () => {
  return (
    <div>
         {/* =================================
          Cart 2 part section
          ================================= */}
          <Container>
            <div className="pt-[150px] ">
              <Cart_2 Cart_2_h1={"Launch Your E-Commerce Store Today!"} Cart_2_p={"Transform your business with a high-performance online store tailored for success. Sell smarter, scale faster, and maximize your revenue with a seamless shopping experience."} Cart_2_h2={"Starting at $100 – Get a Free Consultation!"} src={E_commerce} />
            </div>
          </Container>
    </div>
  )
}

export default Card_2_Part