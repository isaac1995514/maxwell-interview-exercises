import React from "react";

/* Components */
import { List, Button, Image } from "semantic-ui-react";

import { SelectionItemProps } from "./type";

const itemPropsAreEqual = (
  prevItem: SelectionItemProps,
  nextItem: SelectionItemProps
) => {
  return (
    prevItem.itemId === nextItem.itemId &&
    prevItem.itemCount === nextItem.itemCount
  );
};

const SelectionItem = ({
  itemPrice,
  item,
  itemCount,
  onItemRemoval,
}: SelectionItemProps) => {
  const formattedItemPrice = itemPrice.toFixed(2);

  return (
    <List.Item className="selected-item" key={item.id}>
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
};

export default React.memo(SelectionItem, itemPropsAreEqual);
