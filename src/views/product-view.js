/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useProduct } from "./../selectors";
import { useAddProduct } from "./../action-hooks";
import { Redirect } from "@reach/router";

function ProductView({ productId }) {
  const product = useProduct(productId);
  const addProduct = useAddProduct();
  const [addedProduct, setAddedProduct] = React.useState(false);

  function handleClick() {
    addProduct(product);
    setAddedProduct(true);
  }

  if (addedProduct) return <Redirect to="/cart" noThrow />;
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid lightgray",
        padding: 16
      }}
    >
      <h1 css={{ fontSize: 16, margin: "0" }}>{product.name}</h1>
      <span>${product.price}</span>
      <br />
      <button onClick={handleClick}>Add product</button>
    </div>
  );
}

export default ProductView;
