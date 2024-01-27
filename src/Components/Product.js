import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";

const Product = ({
  id,
  images,
  title,
  description,
  price,
  discountPercentage,
  sender,
}) => {
  const { addToCart, addToFav, RemoveFromCart, RemoveFromFav } =
    useContext(GlobalContext);

  const addItemToCart = (id) => {
    addToCart(id);
    RemoveFromFav(id);
  };

  return (
    <div
      className={sender === "main" ? "col-xl-3 col-md-6 col-sm-12" : "col-12"}
    >
      <div className="card w-20 m-2">
        <img
          src={images[0]}
          className="card-img-top p-2 "
          alt={title}
          style={{ height: 200, borderRadius: 20 }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          {sender === "main" ? (
            <p className="card-text" title={description}>
              {description.length <= 50
                ? description
                : description.slice(0, 50 - description.length) + "..."}{" "}
            </p>
          ) : (
            ""
          )}
          {sender === "main" ? (
            <h6 className="card-text">
              Price:{" "}
              <span style={{ textDecoration: "line-through", color: "red" }}>
                {" "}
                {price.toLocaleString("en-US")} ILS
              </span>
            </h6>
          ) : (
            ""
          )}
          <h6 className="card-text">
            Sale:{" "}
            {(price - (discountPercentage * price) / 100).toLocaleString(
              "en-US"
            )}
            ILS
          </h6>
          {sender === "main" ? (
            <div>
              <button
                onClick={() => addToCart(id)}
                className="btn btn-success w-25"
              >
                🛒
              </button>{" "}
              <button
                onClick={() => addToFav(id)}
                className="btn btn-primary w-25"
              >
                ❤️
              </button>
            </div>
          ) : (
            ""
          )}
          {sender === "cart" ? (
            <div>
              <button
                onClick={() => RemoveFromCart(id)}
                className="btn btn-success w-50"
              >
                ❌
              </button>
            </div>
          ) : (
            ""
          )}
          {sender === "fav" ? (
            <div>
              <button
                onClick={() => addItemToCart(id)}
                className="btn btn-success w-25"
              >
                🛒
              </button>{" "}
              <button
                onClick={() => RemoveFromFav(id)}
                className="btn btn-primary w-25"
              >
                ❌
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Product;
