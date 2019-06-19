function addProduct(product) {
  return { type: "ADD_PRODUCT", payload: product };
}

function removeProduct(id) {
  return { type: "REMOVE_PRODUCT", payload: { id } };
}

function increaseProduct(id) {
  return { type: "INCREASE_PRODUCT", payload: { id } };
}

function decreaseProduct(id) {
  return { type: "DECREASE_PRODUCT", payload: { id } };
}

export { addProduct, removeProduct, increaseProduct, decreaseProduct };
