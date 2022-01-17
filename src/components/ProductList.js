import React from "react";
import Toasts from "./Toasts";

const ProductList = ({ toast }) => {
  return (
    <div className="row">
      {toast.map((toast) => (
        <Toasts toast={toast} />
      ))}
      ;
    </div>
  );
};

export default ProductList;
