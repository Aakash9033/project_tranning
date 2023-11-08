import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Grid, Tab, Tabs } from "@mui/material";
import Image from "mui-image";
import nav_logo from "../../assets/navbar-icon.png";
// import App from "../App";
import {
  CustomAppBar,
  NavImg,
  CustomToolBar,
  NavIteams,
  CustomMenuBarIcon,
  CustomNavTabs,
  CustomNavButtonsWrapper,
} from "../Styled-component/Styled";
const Header = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const anchor = "right";

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ paddingTop: "40px" }}>
        {["How it works", "About us", "Categories", "FAQs"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                {/* <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                <ListItemText primary={text} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List>
        {["Login", "Create an account"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list(anchor)}
      </SwipeableDrawer>
      <CustomAppBar>
        <CustomToolBar>
          <Grid>
            <NavImg src={nav_logo} alt="image not found" />
          </Grid>
          <Grid>
            <CustomMenuBarIcon onClick={toggleDrawer("right", true)} />
          </Grid>
          <CustomNavTabs>
            <NavIteams label="How it works"></NavIteams>
            <NavIteams label="About us"></NavIteams>
            <NavIteams label="Categories"></NavIteams>
            <NavIteams label="FAQs"></NavIteams>
          </CustomNavTabs>
          <CustomNavButtonsWrapper>
            <Button
              variant="text"
              sx={{
                color: "black",
                fontWeight: "700",
                textTransform: "capitalize",
                "&:hover": { color: "#E32320", backgroundColor: "white" },
              }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              sx={{
                background: "black",
                color: "white",
                "&:hover": { background: "black" },
                textTransform: "none",
                padding: "10px 25px",
              }}
            >
              Create an account
            </Button>
          </CustomNavButtonsWrapper>
        </CustomToolBar>
      </CustomAppBar>
    </React.Fragment>
  );
};
export default Header;
