/* Types */
import type { GroceryItemApiResponse } from "../types";

/* Mock Data */
const mockGroceryItemResponse = require("../__mocks__/groceryItemsInfoMock.json");

async function getGroceryItems(): Promise<GroceryItemApiResponse> {
  return mockGroceryItemResponse as GroceryItemApiResponse;
}

export default getGroceryItems;
