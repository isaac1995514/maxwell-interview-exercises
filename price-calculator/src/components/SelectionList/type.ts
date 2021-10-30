import { GroceryItemMap, SelectedItemMap } from "../../types";
import type { onItemRemovalCallback } from "../SelectionSideMenu/type";

export interface SelectionListProps {
  itemMap: GroceryItemMap;
  selectedItems: SelectedItemMap;
  onItemRemoval: onItemRemovalCallback;
}
