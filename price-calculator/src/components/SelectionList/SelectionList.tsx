import React from "react";

/* Components */
import { Item, Button, Label } from "semantic-ui-react";

/* Types */
import { SelectionListProps } from "./type";

import "./style.scss";

function SelectionList({
  itemMap,
  selectedItems,
  onItemRemoval,
}: SelectionListProps) {
  const itemNodes = Object.entries(selectedItems).map(([itemId, itemCount]) => {
    const item = itemMap.get(itemId);

    if (!item) return null;

    const isSalesAvailable =
      item.salePrice !== undefined && item.saleUnit !== undefined;
    const isLabelApplied =
      isSalesAvailable && itemCount >= (item?.saleUnit || Infinity);

    return (
      <Item key={item.id} className="selected-item">
        <Item.Image size="mini" src={item.imgSrc} />
        <Item.Description>{`${item?.itemName} x ${itemCount}`}</Item.Description>
        {isLabelApplied && (
          <Item.Extra>{<Label color="red">Sales</Label>}</Item.Extra>
        )}
        <Item.Extra>
          <Button
            floated="right"
            circular
            color="red"
            icon="minus"
            size="mini"
            onClick={() => onItemRemoval(item.id)}
          />
        </Item.Extra>
      </Item>
    );
  });

  return <Item.Group relaxed>{itemNodes}</Item.Group>;
}

export default SelectionList;
