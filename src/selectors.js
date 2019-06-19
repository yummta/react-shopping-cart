import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useCatalog() {
  return useSelector(state => Object.values(state.catalog), shallowEqual);
}

function useProduct(id) {
  return useSelector(state => {
    if (state.catalog.hasOwnProperty(id)) return state.catalog[id];
    return null;
  }, shallowEqual);
}

function useCart() {
  return useSelector(state => Object.values(state.cart), shallowEqual);
}

function useTotalCart() {
  return useSelector(state => state.totalCart, shallowEqual);
}

export { useCatalog, useProduct, useCart, useTotalCart };
