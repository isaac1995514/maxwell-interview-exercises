import React, { useEffect, useState } from "react";

/* Components */
import { GroceryItemMenu } from "..";

/* Types */
import { GroceryItemList } from "../../types";

/* Services */
import { getGroceryItems } from "../../apis";

function PriceCalculator() {
  const [groceryItemList, setGroceryItemList] = useState<GroceryItemList>([]);

  useEffect(() => {
    const fetchGroceryData = async () => {
      const response = await getGroceryItems();
      setGroceryItemList(response);
    };

    fetchGroceryData();
  }, []);

  return (
    <div className="price-calculator-root">
      <GroceryItemMenu itemList={groceryItemList} />
    </div>
  );
}

export default PriceCalculator;
