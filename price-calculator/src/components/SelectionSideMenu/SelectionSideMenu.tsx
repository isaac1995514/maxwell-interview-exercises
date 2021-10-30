import React from "react";

/* Types */
import { SelectionSideMenuProps } from "./type";
import { SelectionList } from "..";

import "./style.scss";

function SelectionSideMenu({
  selectedItems,
  itemMap,
  onItemRemoval,
}: SelectionSideMenuProps) {
  if (!itemMap) return null;

  return (
    <div className="selection-side-menu-wrapper">
      <SelectionList
        selectedItems={selectedItems}
        itemMap={itemMap}
        onItemRemoval={onItemRemoval}
      />
    </div>
  );
}

export default SelectionSideMenu;
