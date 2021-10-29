import React, { useEffect, useState } from "react";

/* Components */
import { GroceryItemMenu } from "..";

/* Types */
import { GroceryItemList, SelectedItemMap } from "../../types";

/* Services */
import { getGroceryItems } from "../../apis";

function PriceCalculator() {
  const [groceryItemList, setGroceryItemList] = useState<GroceryItemList>([]);
  const [selectedItemMap, setSelectedItemMap] = useState<SelectedItemMap>({});

  useEffect(() => {
    const fetchGroceryData = async () => {
      setTimeout(async () => {
        const response = await getGroceryItems();
        setGroceryItemList(response);
      }, 1000);
    };

    fetchGroceryData();
  }, []);

  const handleItemClicked = (itemId: string) => {
    setSelectedItemMap((prevSelection) => ({
      ...prevSelection,
      [itemId]: 1 + (prevSelection[itemId] || 0),
    }));
  };

  return (
    <div className="price-calculator-root">
      <GroceryItemMenu
        itemList={groceryItemList}
        onItemClicked={handleItemClicked}
      />
    </div>
  );
}

export default PriceCalculator;
