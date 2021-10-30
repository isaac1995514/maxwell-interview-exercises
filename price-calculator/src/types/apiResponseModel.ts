export interface GroceryItem {
  id: string;
  itemName: string;
  unitPrice: number;
  salePrice?: number;
  saleUnit?: number;
  imgSrc: string;
}

export type GroceryItemList = GroceryItem[];

export type GroceryItemApiResponse = GroceryItemList;
