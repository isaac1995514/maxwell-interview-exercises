import React from "react";

/* Components */
import { ItemCard } from "..";
import { Loader } from "semantic-ui-react";

/* Types */
import { GroceryItemMenuProps } from "./type";

import "./style.scss";

function GroceryItemWrapper({ itemList, onItemClicked }: GroceryItemMenuProps) {
  if (itemList.length === 0) return <Loader />;

  const items = itemList.map((item) => (
    <ItemCard key={item.id} onItemClicked={onItemClicked} {...item} />
  ));

  return <div className="grocery-items-menu-wrapper">{items}</div>;
}

export default GroceryItemWrapper;
