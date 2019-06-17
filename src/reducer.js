const initialState = {
  cart: {},
  catalog: {
    p1: {
      id: "p1",
      title: "Product 1",
      price: 1
    },
    p2: {
      id: "p2",
      title: "Product 2",
      price: 2
    },
    p3: {
      id: "p3",
      title: "Product 3",
      price: 3
    },
    p4: {
      id: "p4",
      title: "Product 4",
      price: 4
    },
    p5: {
      id: "p5",
      title: "Product 5",
      price: 5
    }
  }
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_PRODUCT": {
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: action.payload
        }
      };
    }
    case "REMOVE_PRODUCT": {
      const updateCart = { ...state.cart };
      delete updateCart[action.payload.id];
      return {
        ...state,
        cart: updateCart
      };
    }
    case "INCREASE_PRODUCT": {
      const updateProduct = { ...state.cart[action.payload.id] };
      updateProduct.cant = updateProduct.cant + 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: updateProduct
        }
      };
    }
    case "DECREASE_PRODUCT": {
      const updateProduct = { ...state.cart[action.payload.id] };
      updateProduct.cant = updateProduct.cant - 1;
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.payload.id]: updateProduct
        }
      };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
