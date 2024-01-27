import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Product from "./Product";

const Fav = () => {
  const { itemsInFav, storeProducts } = useContext(GlobalContext);

  return (
    <div>
      <div className="row">
        {itemsInFav.length === 0 ? (
          <button className="btn btn-danger disabled">
            No Items In Favorites
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="row">
        {itemsInFav.map((id, index) => {
          const product = storeProducts.filter((el) => el.id === id)[0];
          return <Product {...product} sender="fav" key={index} />;
        })}
      </div>
    </div>
  );
};

export default Fav;
