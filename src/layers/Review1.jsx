import React from "react";
import Container from "../components/Container";
import Image from "../components/Image";
import { FaStar } from "react-icons/fa6";
import Review from "../assets/review.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Review1 = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of .5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Container container_class={"pt-[150px]"}>
        <motion.div
        //   className="absolute bottom-[-200px] right-[80px]"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
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
              Absolutely satisfied with the work ethics and output. Saife immediately got what my requirements were at...
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </div>
  );
};

export default Review1;
