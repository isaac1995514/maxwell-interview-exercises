import type { GroceryItemMap, SelectedItemMap } from "../types";

import { sum } from "lodash";

/**
 * Get Price of selected items without any discount
 * @param itemMap
 * @param selectedItems
 */
export function getTotalPrice(
  itemMap: GroceryItemMap,
  selectedItems: SelectedItemMap
) {
  const totalPriceList = Object.entries(selectedItems).map(
    ([itemId, itemCount]) => {
      const item = itemMap.get(itemId);

      if (item) {
        return item.unitPrice * itemCount;
      }

      // Safe Guard: this case will not happen
      return 0;
    }
  );

  return sum(totalPriceList);
}

/**
 * Get Price of items with discount applied
 * @param itemId
 * @param itemMap
 * @param selectedItems
 */
export function getItemPrice(
  itemId: string,
  itemCount: number,
  itemMap: GroceryItemMap
) {
  const item = itemMap.get(itemId);

  // Safe Guard
  if (item) {
    // If the current item is onsale
    if (item.salePrice !== undefined && item.saleUnit !== undefined) {
      const unitNotDiscounted = itemCount % item.saleUnit; // Individual item which discount cannot be applied
      const batch = Math.floor(itemCount / item.saleUnit); // The number batch of items that can be purchase with the discount

      return unitNotDiscounted * item.unitPrice + batch * item.salePrice;
    } else {
      return item.unitPrice * itemCount;
    }
  }

  // Safe Guard. This case will not happen
  return 0;
}

/**
 * Get Price of individual selected item with discount applied.
 * @param itemMap
 * @param selectedItems
 */
export function getDiscountedPrice(
  itemMap: GroceryItemMap,
  selectedItems: SelectedItemMap
) {
  const totalPriceList = Object.keys(selectedItems).map((itemId) =>
    getItemPrice(itemId, selectedItems[itemId], itemMap)
  );

  return sum(totalPriceList);
}
