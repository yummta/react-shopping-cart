/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Link } from "@reach/router";

function ProductItem({ product }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        borderBottom: "1px solid lightgray",
        padding: "8px 0"
      }}
    >
      <Link to={`/product/${product.id}`}>{product.name}</Link>
      <span>${product.price}</span>
    </div>
  );
}

export default ProductItem;
