import React from "react";

import { Card, Placeholder } from "semantic-ui-react";

import "./style.scss";

function MenuPlacehodler() {
  return (
    <div className="menu-placeholder-wrapper">
      <Card.Group itemsPerRow={3}>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Placeholder>
              <Placeholder.Image square />
            </Placeholder>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
}

export default MenuPlacehodler;
