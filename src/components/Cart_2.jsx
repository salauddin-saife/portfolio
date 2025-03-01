import React from "react";
import Button from "./Button";
import { FaShopify } from "react-icons/fa";

const Cart_2 = () => {
  return (
    <div
      className=" w-[1619px] h-[526px] rounded-[80px]  bg-[#604E8A]/30 backdrop-blur-sm  "
      style={{
        boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
      }}
    >
      <div className="flex">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          {" "}
          <div className="space-y-6">
          <div className="font-Inter font-semibold text-[38px] text-main-text pt-[100px] ">
            <h1>For Small Decs Ai Plat</h1>
          </div>
          <div className="font-Inter font-semibold text-[20px] w-[732px] h-[48px] text-main-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="font-Inter font-semibold text-[38px] text-main-text">
            <h1>Rs. 599/-</h1>
          </div>
          <div className="flex gap-x-6">
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
