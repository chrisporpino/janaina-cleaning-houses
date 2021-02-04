import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import ListItemComponent from "./ListItemComponent";

const MainContainer = styled.div`
  display: none;

  @media (max-width: 700px) {
    display: flex;
    position: absolute;
    top: 36px;
    left: 15px;
  }
`;

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%",
    paddingTop: 80,
    backgroundColor: "#171604",
    color: "#EBDA08",
    paddingLeft: 20,
    paddingRight: 20,
  },
  fullList: {
    width: "auto",
    paddingTop: 0,
    
  },
});


const SideMenu = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: #171604; */
  color: #EBDA08;
  padding: 80px 20px 0 20px;

  margin: 0;
`

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* <SideMenu> */}
          {[
            "Schedule your time",
            "About Us",
            "Services",
            "Testimony",
            "Before and After",
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>

            // <ListItemComponent key={text} primary={text} />
          ))}
        {/* </SideMenu> */}
      </List>
    </div>
  );

  return (
    <MainContainer>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={toggleDrawer(anchor, true)} />
          </IconButton>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </MainContainer>
  );
}
