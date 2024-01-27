import React from "react";

const Product = ({
  id,
  images,
  title,
  description,
  price,
  discountPercentage,
}) => {
  return (
    <div className="col-xl-3 col-md-6 col-sm-12">
      <div className="card w-20 m-2">
        <img
          src={images[0]}
          className="card-img-top p-2 "
          alt={title}
          style={{ height: 200, borderRadius: 20 }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description.length <= 50
              ? description
              : description.slice(0, 50 - description.length) + "..."}{" "}
          </p>
          <h6 className="card-text">
            Price:{" "}
            <span style={{ textDecoration: "line-through", color: "red" }}>
              {" "}
              {price.toLocaleString("en-US")} ILS
            </span>
          </h6>
          <h6 className="card-text">
            Discount:{" "}
            {(price - (discountPercentage * price) / 100).toLocaleString(
              "en-US"
            )}
            ILS
          </h6>
        </div>
      </div>
    </div>
  );
};
export default Product;
