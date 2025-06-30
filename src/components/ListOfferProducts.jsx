import React from "react";
import { useSelector } from "react-redux";
import ProductRender from "./ProductRender";
const ListOfferProducts = () => {
  const { data, status, error } = useSelector((state) => state.products);
  return (
    <>
      {data.map((product) => {
        if (product.discountPercentage > 12) {
          return <ProductRender product={product} key={product.id} />;
        }
        return null;
      })}
    </>
  );
};

export default ListOfferProducts;
