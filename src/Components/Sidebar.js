import React from "react";
import GlobalContext from "../Hooks/GlobalContext";
import { useContext } from "react";
import Cart from "./Cart";
import Fav from "./Fav";

const Sidebar = () => {
  const { setShowSidebar, whatToShowInSidebar } = useContext(GlobalContext);

  return (
    <div className="container-fluid col-2 sticky-bottom">
      <div className="row">
        <div className="bg-secondary min-vh-100">
          <div className="d-flex flex-column gap-2">
            <div className="d-flex justify-content-between">
              {whatToShowInSidebar === "cart" ? (
                <p style={{ fontSize: 30 }}>🛒</p>
              ) : (
                <p style={{ fontSize: 30 }}>❤️</p>
              )}
              <button
                className="btn btn-light p mt-1"
                onClick={() => setShowSidebar(false)}
              >
                X
              </button>
            </div>
            {whatToShowInSidebar === "cart" ? <Cart /> : <Fav />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
