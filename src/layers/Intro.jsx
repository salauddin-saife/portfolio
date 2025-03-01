import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import { FaCirclePlay } from "react-icons/fa6";

const Intro = () => {
  return (
    <div>
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
                  A passionate frontend developer with a CSE degree from the University of Greenwich, UK. I specialize in React.js, Tailwind CSS, and frontend redevelopment, bringing sleek and responsive designs to life. With expertise in HTML, CSS, JavaScript, Bootstrap, and WordPress, I craft intuitive and engaging user experiences. Let’s build something amazing together!
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
    </div>
  );
};

export default Intro;
