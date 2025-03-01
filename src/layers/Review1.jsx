import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import { FaStar } from 'react-icons/fa6'
import Review from "../assets/review.png"


const Review1 = () => {
  return (
    <div>
        <Container container_class={"pt-[150px]"}>
          <div
            className=" w-[409px] h-[237px]  rounded-[50px] bg-[#604E8A]/30 backdrop-blur-sm  "
            style={{
              boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
            }}
          >
            <div className=" flex gap-x-6 items-center pl-[50px] pt-[30px]">
              <Image src={Review} />
              <div className="font-Inter font-normal text-main-text text-[22px]">
                <h1>alena Patel</h1>
                <div className="text-[#FFF84E] text-[15px] flex gap-x-2 items-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
            <div className="w-[341px] h-[63px] font-Inter font-normal text-[17px] text-main-text pl-[50px] pt-[30px]">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt...
              </p>
            </div>
          </div>
        </Container></div>
  )
}

export default Review1