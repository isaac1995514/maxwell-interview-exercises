import { GroceryItemMap } from "../../types";

export type onItemClickedCallback = (itemId: string) => void;

export interface GroceryItemMenuProps {
  itemMap: GroceryItemMap | null;
  onItemClicked: onItemClickedCallback;
}
