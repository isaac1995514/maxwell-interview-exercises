import React from "react";

/* Components */
import { ItemCard } from "..";

/* Types */
import { GroceryItemMenuProps } from "./type";

import "./style.scss";

function GroceryItemWrapper({ itemList }: GroceryItemMenuProps) {
  const items = itemList.map((item) => <ItemCard {...item} />);

  return <div className="grocery-items-menu-wrapper">{items}</div>;
}

export default GroceryItemWrapper;
