import { GroceryItemList } from "../../types";

export type onItemClickedCallback = (itemId: string) => void;

export interface GroceryItemMenuProps {
  itemList: GroceryItemList;
  onItemClicked: onItemClickedCallback;
}
