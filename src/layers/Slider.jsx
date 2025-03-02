// import React from 'react'
// import Container from '../components/Container'
// import Carts from '../components/Carts'
// import Create from "../assets/Create.png"

// const Slider = () => {
//   return (
//     <div> {/* =================================
//         Card slider section
//         ================================= */}
//         <Container container_class={" pt-[] relative "}>
//           <div className="absolute bottom-[-200px] right-[80px]">
//             {/* <Carts /> */}
//             <Carts showArrow={true} Cards_h1={"Let’s Build & Elevate!"} Carts_p1={"Looking for a skilled web designer & frontend developer? Let's work together!"} class_name={"pb-[]"} src={Create} img_class={"scale-[150%] bottom-[350px] hover:scale-[160%]"} />
//             {/* <Carts showArrow={false} /> // Arrow will be hidden */}
//           </div>
//         </Container></div>
//   )
// }

// export default Slider

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Container from "../components/Container";
import Carts from "../components/Carts";
import Create from "../assets/Create.png";

const Slider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Delay of 1 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* =================================
        Card slider section
        ================================= */}
      <Container container_class={"pt-[] relative"}>
        <motion.div
          className="absolute bottom-[-200px] right-[80px]"
          initial={{ x: "100vw", opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Carts
            showArrow={true}
            Cards_h1={"Let’s Build & Elevate!"}
            Carts_p1={"Looking for a skilled web designer & frontend developer? Let's work together!"}
            class_name={"pb-[]"}
            src={Create}
            img_class={"scale-[150%] bottom-[350px] hover:scale-[160%]"}
          />
        </motion.div>
      </Container>
    </div>
  );
};

export default Slider;
