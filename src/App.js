import "./App.css";
import Products from "./Components/Products";
import Sidebar from "./Components/Sidebar";
import GlobalContext from "./Hooks/GlobalContext";
import { useEffect, useState } from "react";

function App() {
  const [storeProducts, setStoreProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((response) => response.json())
      .then((json) => setStoreProducts(json.products));
  }, []);

  return (
    <div className="d-flex">
      <GlobalContext.Provider value={{ storeProducts, setStoreProducts }}>
        <Sidebar />
        <Products />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
