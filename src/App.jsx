import { useState } from "react";
import "./App.css";
import ProductsList from "./assets/components/ProductsList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Ecommerce</h1>
      <ProductsList />
    </div>
  );
}

export default App;
