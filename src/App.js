import "./App.css";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Sidebar from "./Components/Sidebar";
import GlobalContext from "./Hooks/GlobalContext";
import { useEffect, useState } from "react";

function App() {
  const [storeProducts, setStoreProducts] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);
  const [itemsInCart, setItemsInCart] = useState([]);
  const [itemsInFav, setItemsInFav] = useState([]);
  const [whatToShowInSidebar, setWhatToShowInSidebar] = useState("");

  const addToCart = (id) => setItemsInCart([...itemsInCart, id]);
  const addToFav = (id) => setItemsInFav([...itemsInFav, id]);
  const RemoveFromCart = (id) =>
    setItemsInCart(itemsInCart.filter((el) => el !== id));
  const RemoveFromFav = (id) =>
    setItemsInFav(itemsInFav.filter((el) => el !== id));

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((json) => setStoreProducts(json.products));
  }, []);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          storeProducts,
          setStoreProducts,
          addToCart,
          addToFav,
          setShowSidebar,
          setWhatToShowInSidebar,
          whatToShowInSidebar,
          itemsInCart,
          itemsInFav,
          RemoveFromCart,
          RemoveFromFav,
        }}
      >
        <Header />
        <div className="d-flex">
          <Products />
          {showSidebar ? <Sidebar /> : ""}
        </div>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
