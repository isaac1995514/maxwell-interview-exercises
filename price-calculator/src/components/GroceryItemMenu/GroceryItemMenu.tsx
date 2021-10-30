import React from "react";

/* Components */
import { ItemCard } from "..";
import { Loader } from "semantic-ui-react";

/* Types */
import { GroceryItemMenuProps } from "./type";

import "./style.scss";

function GroceryItemWrapper({ itemMap, onItemClicked }: GroceryItemMenuProps) {
  if (!itemMap) return <Loader />;

  const items = [...itemMap].map(([itemId, item]) => (
    <ItemCard key={itemId} onItemClicked={onItemClicked} {...item} />
  ));

  return <div className="grocery-items-menu-wrapper">{items}</div>;
}

export default GroceryItemWrapper;
