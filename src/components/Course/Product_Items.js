import React from "react";
import style from "./Product.css";

const ButtonClick = () => {
  return (
    <>
      <button>Click me </button>
    </>
  );
}; 

const ProductItems = ({ item }) => {
  return (
    <>
      <p>{item} </p>
      <ButtonClick />
    </>
  );
};

export default ProductItems;
