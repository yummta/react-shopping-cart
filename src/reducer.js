const initialState = {
  cart: {},
  totalCart: 0,
  catalog: {
    p1: {
      id: "p1",
      name: "Product 1",
      price: 1
    },
    p2: {
      id: "p2",
      name: "Product 2",
      price: 2
    },
    p3: {
      id: "p3",
      name: "Product 3",
      price: 3
    },
    p4: {
      id: "p4",
      name: "Product 4",
      price: 4
    },
    p5: {
      id: "p5",
      name: "Product 5",
      price: 5
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      const updateProduct = { ...action.payload };
      updateProduct.cant = 1;
      updateProduct.subtotal = action.payload.price;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: updateProduct
        },
        totalCart: state.totalCart + updateProduct.cant * updateProduct.subtotal
      };
    }
    case "REMOVE_PRODUCT": {
      const updateCart = { ...state.cart };
      const subtotal = updateCart[action.payload.id]["subtotal"];
      delete updateCart[action.payload.id];
      return {
        ...state,
        cart: updateCart,
        totalCart: state.totalCart - subtotal
      };
    }
    case "INCREASE_PRODUCT": {
      const updateProduct = { ...state.cart[action.payload.id] };
      updateProduct.cant = updateProduct.cant + 1;
      updateProduct.subtotal = updateProduct.cant * updateProduct.price;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: updateProduct
        },
        totalCart: state.totalCart + updateProduct.price
      };
    }
    case "DECREASE_PRODUCT": {
      const updateProduct = { ...state.cart[action.payload.id] };
      updateProduct.cant = updateProduct.cant - 1;
      updateProduct.subtotal = updateProduct.cant * updateProduct.price;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: updateProduct
        },
        totalCart: state.totalCart - updateProduct.price
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
