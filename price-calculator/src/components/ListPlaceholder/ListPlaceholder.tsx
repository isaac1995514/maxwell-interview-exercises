import React from "react";
import { List, Placeholder, Segment } from "semantic-ui-react";

import "./style.scss";

const PlaceholderExampleGrid = () => (
  <div className="selection-side-menu-placeholder">
    <List>
      {[...Array(4)].map((_, index) => (
        <List.Item>
          <Segment raised>
            <Placeholder key={index}>
              <Placeholder.Header image>
                <Placeholder.Line />
                <Placeholder.Line />
              </Placeholder.Header>
              <Placeholder.Paragraph></Placeholder.Paragraph>
            </Placeholder>
          </Segment>
        </List.Item>
      ))}
    </List>
  </div>
);

export default PlaceholderExampleGrid;
