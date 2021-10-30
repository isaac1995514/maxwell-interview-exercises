import React from "react";

/* Components */
import { List } from "semantic-ui-react";
import { SelectionItem } from "..";

/* Types */
import { SelectionListProps } from "./type";

/* Service */
import { getItemPrice } from "../../services";

import "./style.scss";

function SelectionList({
  itemMap,
  selectedItems,
  onItemRemoval,
}: SelectionListProps) {
  const itemNodes = Object.keys(selectedItems).map((itemId) => {
    const item = itemMap.get(itemId);
    if (!item) return null;

    const itemCount = selectedItems[itemId];

    const itemPrice = getItemPrice(itemId, itemCount, itemMap);

    return (
      <SelectionItem
        key={itemId}
        itemId={itemId}
        itemCount={itemCount}
        itemPrice={itemPrice}
        item={item}
        onItemRemoval={onItemRemoval}
      />
    );
  });

  return <List className="selected-item-list">{itemNodes}</List>;
}

export default SelectionList;
