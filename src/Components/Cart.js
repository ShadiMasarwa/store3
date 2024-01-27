import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Product from "./Product";

const Cart = () => {
  const { itemsInCart, storeProducts } = useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        {itemsInCart.length > 0 ? (
          <button className="btn btn-success">Check Out</button>
        ) : (
          <button className="btn btn-danger disabled">No Items In Cart</button>
        )}
      </div>
      <div className="row">
        {itemsInCart.map((id, index) => {
          const product = storeProducts.filter((el) => el.id === id)[0];
          return <Product {...product} sender="cart" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
