import React from "react";
import { useCatalog } from "./../selectors";

import ProductItem from "./../components/product-item";

function Catalog() {
  const catalog = useCatalog();

  return (
    <>
      {catalog.map(product => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </>
  );
}

export default Catalog;
