import React from "react";
import { Link } from "@reach/router";

function ProductItem({ product }) {
  return (
    <>
      <Link to={`/product/${product.id}`}>
        <h4>{product.name}</h4>
      </Link>
      <span>${product.price}</span>
    </>
  );
}

export default ProductItem;
