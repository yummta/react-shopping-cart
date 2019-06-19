/** @jsx jsx */
import { jsx } from "@emotion/core";
import React from "react";
import { useCart } from "./../selectors";
import { useTotalCart } from "./../selectors";
import {
  useIncreaseProduct,
  useDecreaseProduct,
  useRemoveProduct
} from "./../action-hooks";

function Cart() {
  const [action, setAction] = React.useState("");
  const cart = useCart();
  const totalCart = useTotalCart();
  const increaseProduct = useIncreaseProduct();
  const decreaseProduct = useDecreaseProduct();
  const removeProduct = useRemoveProduct();

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
      case "remove":
        removeProduct(idProduct);
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
                  <div
                    css={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center"
                    }}
                  >
                    <div>
                      <b>{product.name}</b>
                      <div>
                        <span>${product.price}</span>
                      </div>
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
                      <button
                        onClick={handleClick}
                        data-action="increase"
                        css={{ marginRight: 16 }}
                      >
                        +
                      </button>
                      <button onClick={handleClick} data-action="remove">
                        Remove
                      </button>
                    </form>
                  </div>
                </td>
                <td css={{ textAlign: "right" }}>{product.subtotal}</td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        <tfoot css={{ textAlign: "right" }}>
          <tr>
            <td>Total</td>
            <td>${totalCart}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Cart;
