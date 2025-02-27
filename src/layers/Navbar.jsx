import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import My_Logo from "../assets/My_Logo.png";
import BG1 from "../assets/BG1.png";
import Li from "../components/Li";
import Button from "../components/Button";

const Navbar = () => {
  return (
    <div>
      <section
        className="max-w-[1920px] mx-auto h-[153px] bg-[#8E7AC5]"
        style={{ backgroundImage: `url(${BG1})` }}
      >
        <Container>
          <div className="flex">
            <div className="w-4/12  h-[153px] ">
              <div className="flex items-center w-[150px] h-[150px] ">
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
      </section>
    </div>
  );
};

export default Navbar;
