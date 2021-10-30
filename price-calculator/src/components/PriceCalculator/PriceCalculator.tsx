import React, { useEffect, useState } from "react";

/* Components */
import { GroceryItemMenu, SelectionSideMenu } from "..";

/* Types */
import { GroceryItemMap, SelectedItemMap } from "../../types";

/* Services */
import { getGroceryItems } from "../../apis";
import { transformGroceryItemList } from "../../services";

import "./style.scss";

function PriceCalculator() {
  const [groceryItemMap, setGroceryItemMap] = useState<GroceryItemMap | null>(
    null
  );
  const [selectedItemMap, setSelectedItemMap] = useState<SelectedItemMap>({});

  useEffect(() => {
    const fetchGroceryData = async () => {
      setTimeout(async () => {
        const response = await getGroceryItems();
        const tResponse = transformGroceryItemList(response);
        setGroceryItemMap(tResponse);
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

  const handleItemRemoval = (itemId: string) => {
    setSelectedItemMap((prevSelection) => {
      const remain = prevSelection[itemId] - 1;

      const { [itemId]: target, ...rest } = prevSelection;

      if (remain === 0) {
        return {
          ...rest,
        };
      } else {
        return {
          ...prevSelection,
          [itemId]: remain,
        };
      }
    });
  };

  return (
    <main className="price-calculator-root">
      <GroceryItemMenu
        itemMap={groceryItemMap}
        onItemClicked={handleItemClicked}
      />
      <SelectionSideMenu
        itemMap={groceryItemMap}
        selectedItems={selectedItemMap}
        onItemRemoval={handleItemRemoval}
      />
    </main>
  );
}

export default PriceCalculator;
