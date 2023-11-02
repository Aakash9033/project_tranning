import React from "react";
import { Grid, Tab, Tabs, Button } from "@mui/material";
import Image from "mui-image";
import nav_logo from "../../assets/navbar-icon.png";
// import App from "../App";
import {
  CustomAppBar,
  NavImg,
  CustomToolBar,
  NavIteams,
} from "../Styled-component/Styled";
const Header = () => {
  return (
    <React.Fragment>
      <CustomAppBar>
        <CustomToolBar>
          <Grid>
            <NavImg src={nav_logo} alt="image not found" />
          </Grid>
          <Tabs>
            <NavIteams label="How it works"></NavIteams>
            <NavIteams label="About us"></NavIteams>
            <NavIteams label="Categories"></NavIteams>
            <NavIteams label="FAQs"></NavIteams>
          </Tabs>
          <Grid sx={{ display: "flex", gap: "20px" }}>
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
          </Grid>
        </CustomToolBar>
      </CustomAppBar>
    </React.Fragment>
  );
};
export default Header;
