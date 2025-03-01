import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import My_Logo from "../assets/My_Logo.png";
import BG1 from "../assets/BG1.png";
import Li from "../components/Li";
import Button from "../components/Button";
import { FaCirclePlay } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import Carts from "../components/Carts";
import Review from "../assets/Review.png";
import { FaStar } from "react-icons/fa";
import Cart_2 from "../components/Cart_2";
import BG2 from "../assets/BG2.png";
import Cart_3 from "../components/Cart_3";
import Review2 from "../assets/Review2.png";
import Review3 from "../assets/Review3.png";
import Review4 from "../assets/Review4.png";

const Navbar = () => {
  return (
    <div>
      <section>
        <div
          className="max-w-[1920px] mx-auto h-[2100px] bg-center bg-cover bg-no-repeat pt-[] bg-[#1B2316] mt-[]"
          style={{
            backgroundImage: `url(${BG1})`,
            backgroundPosition: " top -380px center",
            backgroundSize: "",
          }}
        >
          {/* =================================
          NAVBAR section
          ================================= */}
          <Container>
            <div className="flex pt-[20px] ">
              <div className="w-4/12  h-[153px] ">
                <div className="flex items-center justify- w-[150px] h-[150px] ">
                  <Image src={My_Logo} />
                </div>
              </div>
              <div className="w-8/12  h-[153px]  gap-x-8 flex justify-end items-center">
                <div className="font-Inter text-main-text font-medium text-[24px]">
                  <ul className="flex gap-x-10 ">
                    <Li
                      li_text={"Hello"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                    <Li
                      li_text={"About"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                    <Li
                      li_text={"Service"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                    <Li
                      li_text={"Portfolio"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                    <Li
                      li_text={"Testimonial"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                    <Li
                      li_text={"Skills"}
                      li_class={"hover:scale-[125%] duration-300"}
                    />
                  </ul>
                </div>
                <div>
                  <Button Button_text={"Hello"} />
                </div>
              </div>
            </div>
          </Container>

          {/* =================================
          Intro section
          ================================= */}
          <Container container_class={"pt-[200px] max-w-[1920px]  mx-auto  "}>
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

          {/* =================================
          Card slider section
          ================================= */}
          <Container container_class={" pt-[] relative "}>
            <div className="absolute bottom-[-200px] right-[80px]">
              {/* <Carts /> */}
              <Carts showArrow={true} />
              {/* <Carts showArrow={false} /> // Arrow will be hidden */}
            </div>
          </Container>
          {/* =================================
          Review part section
          ================================= */}
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
          </Container>

          {/* =================================
          Heading part section
          ================================= */}
          <Container>
            <div className="font-Inter text-main-text text-[100px] text-center font-bold pt-[150px]">
              <h1>Our Trendy plants</h1>
            </div>
          </Container>

          {/* =================================
          Cart 2 part section
          ================================= */}
          <Container>
            <div className="pt-[150px]">
              <Cart_2 />
            </div>
          </Container>
        </div>
      </section>

      {/* =================================
          6 Carts part section
          ================================= */}
      <section
        className="max-w-[1920px] pt-[200px] bg-center bg-cover bg-no-repeat mx-auto h-[2500px] bg-[#A793AC]"
        style={{
          backgroundImage: `url(${BG2})`,
        }}
      >
        <Container>
          <div>
            <Cart_2 />
          </div>
        </Container>
        <Container>
          <div className="font-Inter font-semibold text-[55px] text-main-text pt-[380px] text-center">
            <h1>Our Top Selling</h1>
          </div>
          <div className="flex justify-between items-center pt-[150px]">
            <Carts />
            <Carts />
            <Carts />
          </div>
          <div className="flex justify-between items-center pt-[150px]">
            <Carts />
            <Carts />
            <Carts />
          </div>
        </Container>
      </section>

      {/* =================================
           Customer review section
          ================================= */}
      <section
        className="max-w-[1920px] pt-[100px] bg-center bg-cover bg-no-repeat mx-auto h-[2500px] bg-[#A793AC]"
        style={{
          backgroundImage: `url(${BG2})`,
        }}
      >
        <Container>
          <div className=" ">
            <div className="font-Inter font-semibold text-[55px] text-main-text pt-[280px] text-center">
              <h1>Customer Review</h1>
            </div>
            <div className="flex justify-between pt-[150px]">
              <Cart_3 src={Review2} />
              <Cart_3 src={Review3} />
              <Cart_3 src={Review4} />
            </div>
          </div>
        </Container>

        {/* =================================
           Our Best section
          ================================= */}
        <Container>
          <div className="font-Inter font-semibold text-[55px] text-main-text pt-[100px] text-center">
            <h1>Our Best o2</h1>
          </div>
          <div className="pt-[100px]">
            <Cart_2 />
          </div>
        </Container>

        {/* =================================
           Our Best section
          ================================= */}

       <div className="pt-[100px]">
       <div
          className=" w-[1920px] h-[571px]  bg-[#604E8A]/30 backdrop-blur-sm  "
          style={{
            boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
          }}
        >
          <Container>
            <h1>Hwllo</h1>
          </Container>
        </div>
       </div>
      </section>
    </div>
  );
};

export default Navbar;
