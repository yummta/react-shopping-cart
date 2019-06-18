import React from "react";
import { useDispatch } from "react-redux";

import {
  addProduct,
  removeProduct,
  increaseProduct,
  decreaseProduct
} from "./actions";

export function useAddProduct() {
  const dispatch = useDispatch();
  return React.useCallback(product => dispatch(addProduct(product)), [
    dispatch
  ]);
}

export function useRemoveProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(removeProduct(id)), [dispatch]);
}

export function useIncreaseProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(increaseProduct(id)), [dispatch]);
}

export function useDecreaseProduct() {
  const dispatch = useDispatch();
  return React.useCallback(id => dispatch(decreaseProduct(id)), [dispatch]);
}
