import React from "react";
import logo from "../images/logo.png";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";

const Header = () => {
  const { setShowSidebar, setWhatToShowInSidebar, itemsInCart, itemsInFav } =
    useContext(GlobalContext);
  const btnClicked = (btn) => {
    setWhatToShowInSidebar(btn);
    setShowSidebar(true);
  };

  return (
    <div
      className="container-fluid bg-warning p-4 mb-1 d-flex align-items-center justify-content-between"
      style={{ height: 100 }}
    >
      <img src={logo} style={{ width: 100 }} alt="Logo" />
      <div>
        <button className="btn btn-light" onClick={() => btnClicked("cart")}>
          🛒 <span className="badge bg-secondary">{itemsInCart.length}</span>
        </button>{" "}
        <button className="btn btn-light" onClick={() => btnClicked("fav")}>
          ❤️ <span className="badge bg-secondary">{itemsInFav.length}</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
