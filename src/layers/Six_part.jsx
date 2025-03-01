import React from "react";
import Container from "../components/Container";
import Cart_2 from "../components/Cart_2";
import Carts from "../components/Carts";

const Six_part = () => {
  return (
    <div>
      <Container container_class={""}>
        <div className="">
          <Cart_2 />
        </div>
      </Container>
      <Container>
        <div className="font-Inter font-semibold text-[55px] text-main-text pt-[180px] text-center">
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
    </div>
  );
};

export default Six_part;
