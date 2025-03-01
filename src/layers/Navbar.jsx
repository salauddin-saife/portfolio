import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import My_Logo from "../assets/My_Logo.png";
import BG1 from "../assets/BG1.png";
import Li from "../components/Li";
import Button from "../components/Button";
import Carts from "../components/Carts";
import Cart_2 from "../components/Cart_2";
import BG2 from "../assets/BG2.png";
import Cart_3 from "../components/Cart_3";
import Review2 from "../assets/Review2.png";
import Review3 from "../assets/Review3.png";
import Review4 from "../assets/Review4.png";
import BG3 from "../assets/BG3.png";
import Intro from "./Intro";
import Slider from "./Slider";
import Review1 from "./Review1";
import Heading from "./Heading";
import Card_2_Part from "./Card_2_Part";
import Six_part from "./Six_part";

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

          <Intro />
          {/* =================================
          Card slider section
          ================================= */}
          <Slider />
          {/* =================================
          Review part section
          ================================= */}
          <Review1/>

          {/* =================================
          Heading part section
          ================================= */}
          <Heading/>

          {/* =================================
          Cart 2 part section
          ================================= */}
          <Card_2_Part/>
        </div>
      </section>

      {/* =================================
          6 Carts part section
          ================================= */}
      <section
        className="max-w-[1920px] pt-[100px] bg-center bg-cover bg-no-repeat mx-auto h-[2500px] bg-[#A793AC]"
        style={{
          backgroundImage: `url(${BG3})`,
        }}
      >
        <Six_part/>
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
            <div className="font-Inter font-semibold text-[55px] text-main-text pt-[80px] text-center">
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
          <div className="font-Inter font-semibold text-[55px] text-main-text pt-[50px] text-center">
            <h1>Our Best o2</h1>
          </div>
          <div className="pt-[100px]">
            <Cart_2 />
          </div>
        </Container>

        {/* =================================
          Footer section
          ================================= */}

        <div className="pt-[350px]">
          <div
            className=" w-[1920px] h-[540px]  bg-[#604E8A]/30 backdrop-blur-sm  "
            style={{
              boxShadow: "10px 13px 17px -3px rgba(96,78,138,0.75)",
            }}
          >
            <Container>
              <div className="flex justify-between pt-[100px]">
                <div className="">
                  <div className="flex mt-[-60px] w-[250px] h-[250px]">
                    <Image src={My_Logo} />
                  </div>
                  <div className="w-[580px] h-[102px] font-Inter font-medium text-[28px] text-main-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="">
                  <div className="font-Inter font-extrabold text-main-text text-[28px]">
                    <h1>Quick Link’s</h1>
                  </div>
                  <div className=" font-Inter font-medium text-main-text text-[24px] ">
                    <ul className="space-y-10 pt-[70px]">
                      <Li li_text={"Home"} />
                      <Li li_text={"Type’s Of plant’s"} />
                      <Li li_text={"Contact"} />
                      <Li li_text={"Privacy"} />
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="font-Inter font-extrabold text-main-text text-[28px] pb-[40px]">
                    <h1>For Every Update.</h1>
                  </div>
                  <div className="border-2 border-main-text  w-[562px] h-[74px] flex justify-between rounded-2xl">
                    <input
                      type="text"
                      placeholder="Enter Email"
                      className="w-full text-main-text font-Inter pl-[20px] font-medium text-[24px]"
                    />
                    <div className="inline-block ">
                      <Button Button_text={"Subscribe"} />
                    </div>
                  </div>
                  <div className=" text-main-text font-Inter font-medium text-[24px] pt-[250px]">
                    <h1>planto © all right reserve</h1>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
