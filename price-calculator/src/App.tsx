import React from "react";
import { ItemCard } from "./components/ItemCard";

import "./App.scss";

import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <ItemCard
      id="mock-id"
      itemName={"Milk"}
      unitPrice={3.97}
      salePrice={2}
      saleUnit={2}
    />
  );
}

export default App;
