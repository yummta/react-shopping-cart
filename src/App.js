import React from "react";
import { Router, Link } from "@reach/router";

import Catalog from "./views/catalog";
import ProductView from "./views/product-view";
import Cart from "./views/cart";

function App() {
  return (
    <>
      <header>
        <Link to="/">Catalog</Link>
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
