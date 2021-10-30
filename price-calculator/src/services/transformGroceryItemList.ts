import { GroceryItemList, GroceryItemMap } from "../types";

/**
 * Transformation layer to convert grocery item list from API to obj form
 * @param itemList
 */
function transformGroceryItemList(itemList: GroceryItemList) {
  const itemMap: GroceryItemMap = new Map();

  itemList.forEach((item) => {
    itemMap.set(item.id, item);
  });

  return itemMap;
}

export default transformGroceryItemList;
