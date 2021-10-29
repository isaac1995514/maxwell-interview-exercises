import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

/* Types */
import { ItemCardProps } from "./type";

function ItemCard(props: ItemCardProps) {
  const { itemName, unitPrice, salePrice, saleUnit } = props;

  const isItemOnSale = salePrice !== undefined && saleUnit !== undefined;

  const handleClick = () => {};

  return (
    <div
      className="item-card-wrapper"
      style={{ margin: 100, height: 300, width: 250 }}
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
        <Card.Content extra textAlign="center">
          {isItemOnSale && `Sales: $${salePrice.toFixed(2)} for ${saleUnit}`}
        </Card.Content>
      </Card>
    </div>
  );
}

export default ItemCard;
