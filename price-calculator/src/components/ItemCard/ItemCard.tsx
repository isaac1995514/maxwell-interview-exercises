import React, { useState } from "react";
import { Card, Image } from "semantic-ui-react";

/* Types */
import { ItemCardProps } from "./type";

import "./style.scss";

function ItemCard(props: ItemCardProps) {
  const { id, itemName, unitPrice, salePrice, saleUnit, onItemClicked } = props;

  const [isItemHovered, setIsItemHovered] = useState(false);

  const isItemOnSale = salePrice !== undefined && saleUnit !== undefined;

  const handleClick = () => {
    onItemClicked(id);
  };

  const handleMouseEnter = () => {
    setIsItemHovered(true);
  };

  const handleMouseLeave = () => {
    setIsItemHovered(false);
  };

  return (
    <div
      className="item-card-wrapper"
      style={{ height: 300, width: 250 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card onClick={handleClick} fluid>
        <Image
          src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-milk-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
          wrapped
          ui={false}
        />
        <Card.Content textAlign="center">
          <Card.Header>{itemName}</Card.Header>
          <Card.Meta>Unit Price: ${unitPrice}</Card.Meta>
        </Card.Content>
        {isItemOnSale && (
          <Card.Content className="sale-message" extra textAlign="center">
            {`Sales: $${salePrice.toFixed(2)} for ${saleUnit}`}
          </Card.Content>
        )}
      </Card>
    </div>
  );
}

export default ItemCard;
