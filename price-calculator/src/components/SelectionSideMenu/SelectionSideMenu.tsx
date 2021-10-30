import React from "react";

/* Types */
import { SelectionSideMenuProps } from "./type";
import { SelectionList } from "..";

/* Service */
import { getTotalPrice, getDiscountedPrice } from "../../services";

import "./style.scss";

function SelectionSideMenu({
  selectedItems,
  itemMap,
  onItemRemoval,
}: SelectionSideMenuProps) {
  const total = getTotalPrice(itemMap, selectedItems);
  const discountedTotal = getDiscountedPrice(itemMap, selectedItems);
  const formattedTotal = total.toFixed(2);
  const formattedDiscountedTotal = discountedTotal.toFixed(2);
  const formattedSaved = (total - discountedTotal).toFixed(2);

  return (
    <aside className="selection-side-menu-wrapper">
      <SelectionList
        selectedItems={selectedItems}
        itemMap={itemMap}
        onItemRemoval={onItemRemoval}
      />
      <div className="price-card">
        <div className="total-price info">{`Total Price: $${formattedTotal}`}</div>
        <div className="discount info">{`Discounted Total: $${formattedDiscountedTotal}`}</div>
        <div className="saved info">{`You Saved: $${formattedSaved}`}</div>
      </div>
    </aside>
  );
}

export default SelectionSideMenu;
