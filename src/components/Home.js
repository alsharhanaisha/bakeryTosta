import React from "react";
import ProductList from "./ProductList";
import products from "../products";

const Home = () => {
  return (
    <div class="hdrAlign">
      <title>tosta</title>
      <h1>t o s t a</h1>
      <p>Yummy Crisply Fluffy</p>
      <img
        className="img-align"
        src="https://248am.com//images/2021/09/kumorimix.jpg"
        alt="totsa's yummy selections"
      />
      {/* LIST OF PRODUCTS*/}
      <ProductList toast={products} />
    </div>
  );
};

export default Home;
