import React from "react";
import styled from "styled-components";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const NavbarContainer = styled.nav`
  width: 250px;
`;

function ListItemComponent(props) {
  <NavbarContainer>
    {/* <List> */}
    <ListItem button text={props.key}>
      <ListItemText text={props.primary} />
    </ListItem>
    {/* </List> */}
  </NavbarContainer>;
}

export default ListItemComponent;
