import { GroceryItem } from ".";

export interface SelectedItemMap {
  [itemId: string]: number;
}

export type GroceryItemMap = Map<string, GroceryItem>;
