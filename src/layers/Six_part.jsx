import React from "react";
import Container from "../components/Container";
import Cart_2 from "../components/Cart_2";
import Carts from "../components/Carts";
import Front_End from "../assets/Front_End.png";
import Aesthetic_Web from "../assets/Aesthetic_Web.png";
import Dairy_Web from "../assets/Dairy_Web.png";
import Farm_Web from "../assets/Farm_Web.png";
import Cook_Web from "../assets/Cook_Web.png";
import Drug from "../assets/Drug.png";
import Medical_Web from "../assets/Medical_Web.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Six_part = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Delay of .5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Container container_class={""}>
        <div className=" pt-[120px]">
          <Cart_2
            Cart_2_h1={"High-Performance Frontend Development"}
            Cart_2_p={
              "Transform your website with a sleek, high-performance frontend! Expertly crafted with React.js, ensuring speed, responsiveness, and a seamless user experience"
            }
            Cart_2_h2={"Starting at $100 – Get a Free Consultation!"}
            src={Front_End}
          />
        </div>
      </Container>
      <Container>
        <div className="font-Inter font-semibold text-[55px] text-main-text pt-[180px] text-center">
          <h1>Our Top Selling</h1>
        </div>
        <div className="flex justify-between items-center pt-[250px]">
          <motion.dev
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Carts
              Cards_h1={"Aesthetic Website"}
              Carts_p1={
                "Enhancing beauty, refining confidence – where art meets precision."
              }
              src={Aesthetic_Web}
            />
          </motion.dev>

          <motion.dev
            initial={{ y: "-10vw", opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <Carts
            Cards_h1={"Dairy Website"}
            Carts_p1={"Pure, Fresh, and Wholesome – Dairy at Its Best!"}
            src={Dairy_Web}
          />
          </motion.dev>

          <motion.dev
            initial={{ x: "100vw", opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <Carts
            Cards_h1={"Farm Website"}
            Carts_p1={
              "Fresh from Our Farm to Your Table – Naturally Grown, Purely Delicious!"
            }
            src={Farm_Web}
          />
          </motion.dev>
        </div>
        <div className="flex justify-between items-center pt-[250px]">
        <motion.dev
            initial={{ x: "-100vw", opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <Carts
            Cards_h1={"Cookware Set Website"}
            Carts_p1={
              "Premium Cookware for Every Chef – Cook with Style & Precision!"
            }
            src={Cook_Web}
          />
          </motion.dev>
          <motion.dev
            initial={{ y: "10vw", opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <Carts
            Cards_h1={"Medical Website"}
            Carts_p1={
              "Compassionate Care, Innovative Solutions – Your Trusted Medical Partner!"
            }
            src={Medical_Web}
          />
          </motion.dev>
          <motion.dev
            initial={{ x: "100vw", opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
          <Carts
            Cards_h1={"Medicine Website"}
            Carts_p1={
              "Your Health, Our Priority – Trusted Medicines at Your Fingertips!"
            }
            src={Drug}
          />
          </motion.dev>
        </div>
      </Container>
    </div>
  );
};

export default Six_part;
