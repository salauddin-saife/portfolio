import React from "react";
import Button from "./Button";
import { MdKeyboardArrowRight } from "react-icons/md";

const Carts = ({ showArrow }) => {
  return (
    <div>
      <div
        className="w-[512px] h-[644px] rounded-[80px]  bg-[#604E8A]/30 backdrop-blur-sm  "
        style={{
          boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
        }}
      >
        <div className="pl-[80px] space-y-6">
          <div className="font-Inter font-normal text-[23px] text-main-text pt-[350px]">
            <p>Trendy House Plant</p>
          </div>
          <div className=" font-Inter font-normal text-[38px] text-main-text flex justify-between pr-[50px] items-center">
            <h1>Calathea plant</h1>
            {showArrow && ( // Only show if the prop is true
              <div>
                <MdKeyboardArrowRight />
              </div>
            )}
          </div>
          <div className="inline-block">
            <Button Button_text={"Buy Now"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
