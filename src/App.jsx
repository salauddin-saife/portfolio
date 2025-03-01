import React from "react";
import Navbar from "./layers/Navbar";
import Intro from "./layers/Intro";
import BG1 from "../src/assets/BG1.png";
import Container from "./components/Container";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
  <>
  <Route path="/" element={<Home />}></Route>
  </>)
);

const App = () => {
  return (
    <div>
      {/* <Navbar />
      <Intro /> */}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
