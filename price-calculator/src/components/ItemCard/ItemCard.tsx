import React, { KeyboardEvent } from "react";

/* Components */
import { Card, Image } from "semantic-ui-react";

/* Types */
import { ItemCardProps } from "./type";

import "./style.scss";

function ItemCard(props: ItemCardProps) {
  const {
    id,
    itemName,
    unitPrice,
    salePrice,
    saleUnit,
    imgSrc,
    onItemClicked,
  } = props;

  const isItemOnSale = salePrice !== undefined && saleUnit !== undefined;

  const handleClick = () => {
    onItemClicked(id);
  };

  const handleEnterPressed = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onItemClicked(id);
    }
  };

  return (
    <div
      className="item-card-wrapper"
      role="button"
      onKeyPress={handleEnterPressed}
    >
      <Card onClick={handleClick} fluid tabIndex={0}>
        <Image src={imgSrc} wrapped ui={false} size="tiny" />
        <Card.Content textAlign="center">
          <Card.Header>{itemName}</Card.Header>
          <Card.Meta>{`Unit Price: $${unitPrice}`}</Card.Meta>
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
