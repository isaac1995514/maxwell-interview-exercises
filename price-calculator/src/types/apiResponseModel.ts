export interface GroceryItem {
  id: string;
  itemName: string;
  unitPrice: number;
  salePrice?: number;
  saleUnit?: number;
}

export type GroceryItemList = GroceryItem[];

export type GroceryItemApiResponse = GroceryItemList;
