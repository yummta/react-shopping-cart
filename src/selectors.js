import React from "react";
import { useSelector, shallowEqual } from "react-redux";

function useCatalog() {
  return useSelector(state => Object.values(state.catalog), shallowEqual);
}

export { useCatalog };
