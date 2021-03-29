import React from "react";
import styled from "styled-components";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavbarContainer = styled.nav`
  width: 250px;
`;

function ListItemComponent(props) {
  <NavbarContainer>
    <ListItem button text={props.key}>
      <ListItemText text={props.primary} />
    </ListItem>
  </NavbarContainer>;
}

export default ListItemComponent;
