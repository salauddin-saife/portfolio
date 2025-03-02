import React from "react";
import Container from "../components/Container";
import Cart_2 from "../components/Cart_2";
import Carts from "../components/Carts";
import Front_End from "../assets/Front_End.png"
import Aesthetic_Web from "../assets/Aesthetic_Web.png" 
import Dairy_Web from "../assets/Dairy_Web.png" 
import Farm_Web from "../assets/Farm_Web.png" 
import Cook_Web from "../assets/Cook_Web.png" 
import Medical_Web from "../assets/Medical_Web.png" 
// import Medicine_Web from "../assets/Medicine_web.png" 


const Six_part = () => {
  return (
    <div>
      <Container container_class={""}>
        <div className=" pt-[120px]">
          <Cart_2 Cart_2_h1={"High-Performance Frontend Development"} Cart_2_p={"Transform your website with a sleek, high-performance frontend! Expertly crafted with React.js, ensuring speed, responsiveness, and a seamless user experience"} Cart_2_h2={"Starting at $100 – Get a Free Consultation!"} src={Front_End}/>
        </div>
      </Container>
      <Container>
        <div className="font-Inter font-semibold text-[55px] text-main-text pt-[180px] text-center">
          <h1>Our Top Selling</h1>
        </div>
        <div className="flex justify-between items-center pt-[250px]">
          <Carts Cards_h1={"Aesthetic Website"} Carts_p1={"Enhancing beauty, refining confidence – where art meets precision."} src={Aesthetic_Web}/>
          <Carts Cards_h1={"Dairy Website"} Carts_p1={"Pure, Fresh, and Wholesome – Dairy at Its Best!"}  src={Dairy_Web}/>
          <Carts Cards_h1={"Farm Website"} Carts_p1={"Enhancing beauty, refining confidence – where art meets precision."}  src={Farm_Web}/>
        </div>
        <div className="flex justify-between items-center pt-[250px]">
          <Carts Cards_h1={"Cookware Set Website"} Carts_p1={"Enhancing beauty, refining confidence – where art meets precision."}  src={Cook_Web}/>
          <Carts Cards_h1={"Medical Website"} Carts_p1={"Enhancing beauty, refining confidence – where art meets precision."}  src={Medical_Web}/>
          <Carts Cards_h1={"Medicine Website"} Carts_p1={"Enhancing beauty, refining confidence – where art meets precision."}  src={""}/>
        </div>
      </Container>
    </div>
  );
};

export default Six_part;
