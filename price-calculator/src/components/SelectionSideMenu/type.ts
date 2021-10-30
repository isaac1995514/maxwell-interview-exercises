import { SelectedItemMap, GroceryItemMap } from "../../types";

export type onItemRemovalCallback = (itemId: string) => void;

export interface SelectionSideMenuProps {
  itemMap: GroceryItemMap;
  selectedItems: SelectedItemMap;
  onItemRemoval: onItemRemovalCallback;
}
