function addProduct(id) {
  return { type: "ADD_PRODUCT", payload: { id, cant: 1 } };
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
