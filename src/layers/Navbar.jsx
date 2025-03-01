import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import My_Logo from "../assets/My_Logo.png";
import BG1 from "../assets/BG1.png";
import Li from "../components/Li";
import Button from "../components/Button";
import { FaCirclePlay } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
      <section
        className="max-w-[1920px] mx-auto h-[1530px] bg-center bg-cover bg-no-repeat pt-[] bg-[#1B2316] mt-[]"
        style={{ backgroundImage: `url(${BG1})`, backgroundPosition: "top -10px center"  }}
      >
        <Container>
          <div className="flex">
            <div className="w-4/12  h-[153px] ">
              <div className="flex items-center justify- w-[150px] h-[150px] ">
                <Image src={My_Logo} />
              </div>
            </div>
            <div className="w-8/12  h-[153px]  gap-x-8 flex justify-end items-center">
              <div className="font-Inter text-main-text font-medium text-[24px]">
                <ul className="flex gap-x-10 ">
                  <Li li_text={"Hello"} />
                  <Li li_text={"About"} />
                  <Li li_text={"Service"} />
                  <Li li_text={"Portfolio"} />
                  <Li li_text={"Testimonial"} />
                  <Li li_text={"Skills"} />
                </ul>
              </div>
              <div>
                <Button Button_text={"Hello"} />
              </div>
            </div>
          </div>
        </Container>

        <Container container_class={"pt-[150px] max-w-[1920px]  mx-auto "}>
          <div className="">
            <div className="text-main-text text-[38px] font-normal font-Inter">
              <h1>Hi, I am</h1>
            </div>
            <div className="text-main-text text-[118px] font-semibold font-Inter">
              <h1>Salauddin Saife</h1>
            </div>
            <div className="text-main-text text-[23px] font-medium font-Inter w-[893px] ">
              <h1>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h1>
            </div>
          </div>
          <div className="flex items-center  gap-x-10 pt-[50px]">
            <Button Button_text={"Explore"} />
            <div className="flex items-center gap-4">
              <FaCirclePlay className="text-[70px] text-main-text hover:text-main-text/70 duration-300  hover:scale-[110%]" />
              <div className="text-main-text font-Inter font-normal text-[20px]">
                <h1>Live Demo...</h1>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Navbar;
