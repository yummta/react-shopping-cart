/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { Router, Link } from "@reach/router";

import Catalog from "./views/catalog";
import ProductView from "./views/product-view";
import Cart from "./views/cart";

function App() {
  return (
    <>
      <header
        css={{
          marginBottom: 16,
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <Link to="/">Catalog</Link>
        <Link to="/cart">Cart</Link>
      </header>
      <Router>
        <Catalog path="/" />
        <ProductView path="/product/:productId" />
        <Cart path="/cart" />
      </Router>
    </>
  );
}

export default App;
