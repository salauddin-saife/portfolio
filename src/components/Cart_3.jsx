import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from './Image';

const Cart_3 = ({src}) => {
  return (
    <div>
        <div
              className=" w-[512px] h-[440px]  rounded-[50px] bg-[#604E8A]/30 backdrop-blur-sm  "
              style={{
                boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
              }}
            >
              <div className=" flex gap-x-6 items-center pl-[50px] pt-[60px]">
                <Image src={src} />
                <div className="font-Inter font-semibold text-main-text text-[38px]">
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
              <div className="w-[403px] h-[145px] font-Inter font-normal text-[24px] text-main-text pl-[50px] pt-[70px]">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
              </div>
            </div>
    </div>
  )
}

export default Cart_3