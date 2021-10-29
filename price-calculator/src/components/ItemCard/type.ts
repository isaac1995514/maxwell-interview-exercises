import type { onItemClickedCallback } from "../GroceryItemMenu/type";

export interface ItemCardProps {
  id: string;
  itemName: string;
  unitPrice: number;
  salePrice?: number;
  saleUnit?: number;
  onItemClicked: onItemClickedCallback;
}
