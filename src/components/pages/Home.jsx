// import React, { useContext } from "react";
import { Categories } from "../Categories";
import { PageInformation } from "../PageInformation";
// import { ProductListContext } from "../../context/ProductListContext";
import ".././styles/Home.css";
import { Loader } from "../Loader";
import { useEffect, useState } from "react";
import { Footer } from "../Footer";
export const Home = () => {
  // const { state } = useContext(ProductListContext);
  const [isLoader, setIsLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoader && <Loader />}
      <div
        className="content"
        style={
          isLoader
            ? { overflowY: "hidden", height: "100%" }
            : { overflow: "auto", height: "auto" }
        }
      ></div>
      <div className="content">
        <PageInformation />
        <Categories />
        <Footer />
      </div>
    </>
  );
};
