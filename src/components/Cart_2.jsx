import React from "react";
import Button from "./Button";
import { FaShopify } from "react-icons/fa";
import Image from "./Image";

const Cart_2 = ({ Cart_2_h1, Cart_2_p, Cart_2_h2, src}) => {
  return (
    <div
      className=" w-[1619px] h-[526px] rounded-[80px]  bg-[#604E8A]/30 backdrop-blur-sm  "
      style={{
        boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
      }}
    >
      <div className="flex">
        <div className="w-1/2 relative">
          <div className="scale-[150%] absolute bottom-10 left-35 hover:scale-[155%] duration-300 "
          >
          <Image img_class={""} src={src}/>
          </div>
        </div>
        <div className="w-1/2">
          {" "}
          <div className="space-y-10">
            <div className="font-Inter font-semibold text-[38px] text-main-text pt-[100px] ">
              <h1>{Cart_2_h1}</h1>
            </div>
            <div className="font-Inter font-semibold text-[20px] w-[732px] h-[48px] text-main-text">
              <p>{Cart_2_p}</p>
            </div>
            <div className="font-Inter font-semibold text-[38px] text-main-text pt-[10px]">
              <h2>{Cart_2_h2}</h2>
            </div>
            <div className="flex gap-x-6 pt-[10px]">
              <div className="inline-block">
                <Button Button_text={"Explore"} />
              </div>
              <div className="text-main-text text-[45px] p-[12px] bg-main-text/15  rounded-2xl hover:scale-[110%] duration-300 hover:bg-main-text/30">
                <FaShopify />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart_2;
