import React from "react";
import { MenuItem, InputLabel, FormControl } from "@mui/material";

// import SearchIcon from '@mui/icons-material/Search';
import {
  HeadingGrid,
  MainHeadingGrid,
  Heading,
  SubHeading,
  SearchMain,
  CustomSearchIcon,
  StyledInputBase,
  SubSearch,
  OutLineSymbol,
  SelectGrid,
  CustomSelect,
  CustomImage,
} from "../Styled-component/Styled";
import SliderContent from "../slider/slider";
import Header from "../Header/header";
import ring from "../../assets/ring.png";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <MainHeadingGrid>
        <HeadingGrid>
          <Heading variant="h1">
            <CustomImage src={ring} />
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
                <CustomSelect label="Topic">
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </CustomSelect>
              </FormControl>
              <CustomSearchIcon />
            </SelectGrid>
          </SubSearch>
        </SearchMain>
      </MainHeadingGrid>
      <SliderContent />
    </React.Fragment>
  );
};
export default Home;
