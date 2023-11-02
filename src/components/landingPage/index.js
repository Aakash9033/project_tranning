import React from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import SearchIcon from '@mui/icons-material/Search';
import {
  HeadingGrid,
  MainHeadingGrid,
  Heading,
  SubHeading,
  SearchMain,
  SearchIconWrapper,
  Search,
  StyledInputBase,
  SubSearch,
  OutLineSymbol,
  SelectGrid,
  CustomSelect,
} from "../Styled-component/Styled";
import SliderContent from "../slider/slidebar";
import Header from "../Header/header";
const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <MainHeadingGrid>
        <HeadingGrid>
          <Heading variant="h1">
            Meet your <OutLineSymbol variant="span">Icon</OutLineSymbol>
          </Heading>
          <SubHeading variant="h2">
            Icon delivers a once-in-a-lifetime opportunity to directly connect
            you with artists you admire.
          </SubHeading>
        </HeadingGrid>
        <SearchMain>
          <SubSearch>
            <StyledInputBase
              placeholder="Porfolio review, Photoshop, Canon... "
              inputProps={{ "aria-label": "search" }}
            />
            <SelectGrid>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Speciality
                </InputLabel>
                <CustomSelect
                  sx={{ width: "192px" }}
                  label="Speciality"
                  // color="red"
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </CustomSelect>
              </FormControl>
              <FormControl fullWidth sx={{ display: "flex" }}>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "black" }}
                >
                  Topic
                </InputLabel>
                <CustomSelect sx={{ width: "192px" }} label="Topic">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </CustomSelect>
              </FormControl>
              <SearchIcon
                sx={{
                  width: "50px",
                  height: "40px",
                  backgroundColor: "#E32320",
                  color: "white",
                  marginLeft: "16px",
                  borderRadius: "6px",
                  padding: "10px",
                }}
              ></SearchIcon>
            </SelectGrid>
          </SubSearch>
        </SearchMain>
      </MainHeadingGrid>
      <SliderContent />
    </React.Fragment>
  );
};
export default Home;
