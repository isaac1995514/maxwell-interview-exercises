import React from "react";

/* Components */
import { List, Button, Image } from "semantic-ui-react";

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
  const itemNodes = Object.entries(selectedItems).map(([itemId, itemCount]) => {
    const item = itemMap.get(itemId);

    if (!item) return null;

    const itemPrice = getItemPrice(item.id, itemMap, selectedItems);
    const formattedItemPrice = itemPrice.toFixed(2);

    return (
      <List.Item className="selected-item">
        <div className="selected-item__info">
          <Image size="mini" src={item.imgSrc} />
          <div>{`${item?.itemName} x ${itemCount}`}</div>
          <div>{`$${formattedItemPrice}`}</div>
        </div>
        <div className="selected-item__control">
          <Button
            floated="right"
            circular
            color="red"
            icon="minus"
            size="mini"
            tabIndex={0}
            onClick={() => onItemRemoval(item.id)}
          />
        </div>
      </List.Item>
    );
  });

  return <List className="selected-item-list">{itemNodes}</List>;
}

export default SelectionList;
