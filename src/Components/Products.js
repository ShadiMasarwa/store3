import React from "react";
import { useContext } from "react";
import GlobalContext from "../Hooks/GlobalContext";
import Product from "./Product";

const Products = () => {
  const { storeProducts } = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="row">
        {storeProducts.map((el) => (
          <Product {...el} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
