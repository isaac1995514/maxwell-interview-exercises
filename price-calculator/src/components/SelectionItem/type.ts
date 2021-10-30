import { onItemRemovalCallback } from "../SelectionSideMenu/type";
import type { GroceryItem } from "../../types";

export interface SelectionItemProps {
  itemId: string;
  itemCount: number;
  itemPrice: number;
  item: GroceryItem;
  onItemRemoval: onItemRemovalCallback;
}
