import React from "react";
import Button from "./Button";
import { MdKeyboardArrowRight } from "react-icons/md";
import Image from "./Image";


const Carts = ({ showArrow, Cards_h1, Carts_p1,src , class_name, img_class}) => {
  return (
    <div>
      <div
        className="w-[512px] h-[644px] rounded-[80px]  bg-[#604E8A]/30 backdrop-blur-sm  "
        style={{
          boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
        }}
      >
        <div className="pl-[60px] space-y-3 relative ">
          <div className={`scale-[50%] hover:scale-[55%] cursor-pointer duration-300 flex items-center justify-center absolute bottom-[-10px] left-0 ${img_class}`}>
            <Image src={src} img_class={"rounded-[100px] "}/>
          </div>
          <div className={`font-Inter font-normal text-[23px] text-main-text pt-[380px] ${class_name}`}>
            <p>{Carts_p1}</p>
          </div>
          <div className=" font-Inter font-normal text-[38px] text-main-text flex justify-between pr-[50px] items-center">
            <h1>{Cards_h1}</h1>
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
