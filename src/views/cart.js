/** @jsx jsx */
import React from "react";
import { useCart } from "./../selectors";
import { useIncreaseProduct, useDecreaseProduct } from "./../action-hooks";
import { jsx } from "@emotion/core";

function Cart() {
  const [action, setAction] = React.useState("");
  const cart = useCart();
  const increaseProduct = useIncreaseProduct();
  const decreaseProduct = useDecreaseProduct();

  function handleClick(e) {
    setAction(e.target.dataset.action);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const idProduct = e.target.elements.idProduct.value;
    switch (action) {
      case "increase":
        increaseProduct(idProduct);
        break;
      case "decrease":
        decreaseProduct(idProduct);
        break;
      default:
        break;
    }
  }

  return (
    <>
      <h1>Cart</h1>
      <table
        width="100%"
        border="1"
        border-collapse="collapse"
        cellSpacing="1"
        cellPadding="5"
      >
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <React.Fragment key={product.id}>
              <tr>
                <td>
                  <b>{product.name}</b>
                  <div
                    css={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <span>${product.price}</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="hidden"
                        value={product.id}
                        name="idProduct"
                      />
                      <button onClick={handleClick} data-action="decrease">
                        -
                      </button>
                      <span>{product.cant}</span>
                      <button onClick={handleClick} data-action="increase">
                        +
                      </button>
                    </form>
                  </div>
                </td>
                <td>9</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>$999</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Cart;
