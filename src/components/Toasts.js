import React from "react";

const Toasts = ({ toast }) => {
  return (
    <div className="toast">
      <img src={toast.img} alt={toast.name} />
      <h1>{toast.name}</h1>
      <p>{toast.price}</p>
    </div>
  );
};

export default Toasts;
