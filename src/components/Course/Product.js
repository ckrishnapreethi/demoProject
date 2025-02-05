import React from "react";
import ProductItems from "./Product_Items";

const Product = ({ ListOfItems }) => {
  return (
    <div>
      Product items
      <div>
        {ListOfItems.map((item, index) => (
          <ProductItems item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Product;
