import React, { useMemo } from "react";

/* Components */
import { ItemCard } from "..";

/* Types */
import { GroceryItemMenuProps } from "./type";

import "./style.scss";

function GroceryItemWrapper({ itemMap, onItemClicked }: GroceryItemMenuProps) {
  // Prevent item cards from rendering unless the itemMap changed
  const items = useMemo(() => {
    return [...itemMap].map(([itemId, item]) => (
      <ItemCard key={itemId} onItemClicked={onItemClicked} {...item} />
    ));
  }, [itemMap]);

  return <div className="grocery-items-menu-wrapper">{items}</div>;
}

export default GroceryItemWrapper;
