import styled from "@emotion/styled";
import React from "react";
import InputBase from "@mui/material/InputBase";
import { AppBar, Grid, Select, Tab, Toolbar, Typography } from "@mui/material";
import Image from "mui-image";
import Slider from "react-slick";

export const CustomAppBar = styled(AppBar)`
  background-color: white !important;
  box-shadow: none !important;
  display: flex;
  justify-content: space-between;
`;
export const CustomToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0px 85px !important;
`;

export const NavImg = styled(Image)`
  height: 30px;
`;

export const HeadingGrid = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  gap: 16px;
`;
export const MainHeadingGrid = styled(Grid)`
  width: 100%;

  display: flex;
  flex-direction: column !important;
  align-items: center;
  padding-top: 70px;
  gap: 40px;
`;
export const Heading = styled(Typography)`
  font-size: 64px;
  font-family: "Manrope", sans-serif;
  text-align: center;
  font-weight: 800;
`;
export const SubHeading = styled(Typography)`
  width: 580px;
  height: 80px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 0px;
  font-family: "Nunito Sans", sans-serif;
  line-height: 40px;
`;
export const SearchMain = styled(Grid)`
  width: 950px;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  box-shadow: 8px 0px 20px 0 #d4d4d4;
`;
export const SubSearch = styled(Grid)`
  width: 935px;
  height: 58px;
  display: flex;
  justify-content: space-between;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  // vertical padding + font size from searchIcon
  width: 40%;
  padding: 20px;
`;
export const NavIteams = styled(Tab)`
  && {
    text-transform: none;
  }
  color: black;
  font-family: "Nunito Sans", sans-serif;
  font-weight: bold;
`;
export const OutLineSymbol = styled(Typography)`
  color: white;
  text-shadow: -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000,
    2px 2px 0 #000;
  letter-spacing: 1.5px;
`;
export const SelectGrid = styled(Grid)`
  display: flex;
  align-items: center;
`;
export const SliderMain = styled(Grid)`
  width: 100%;
  // padding-left: 64px;
  padding-top: 60px;
`;
export const SliderHeading = styled(Grid)`
  padding-left: 64px;
`;
export const ImageMain = styled(Grid)`
  display: flex;
  gap: 32px;
  padding-top: 32px;
`;
export const ImageGrid = styled(Grid)`
  width: 264px;
  height: 384px;
  border-radius: 10px;
  position: relative;
`;
export const DescriptionMain = styled(Grid)`
  display: flex;
  flex-direction: column !important;
  gap: 10px;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  z-index: 1;
  padding: 32px;
  background: linear-gradient(#FFFFF, #00000);
`;
export const CustomSelect = styled(Select)`
  .MuiOutlinedInput-notchedOutline {
    border: none;
    color: red;
  }
  #demo-simple-select-label {
    color: red;
  }
`;
export const TextWritter = styled(Typography)(
  ({
    fontSize,
    fontWeight,
    fontFamily,
    width,
    borderTop,
    lineHeight,
    padding,
  }) => ({
    color: "white",
    lineHeight: `${lineHeight || "1.5"}`,
    fontSize: `${fontSize || "32px"}`,
    fontWeight: fontWeight,
    textAlign: "center",
    fontFamily: fontFamily,
    width: width,
    borderTop: `${borderTop || "none"}`,
    padding: `${padding || "0px"}`,
  })
);
export const CustomSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 32px;
    margin-top: 32px;
  }
`;
// export const TextWritter = styled(Typography)`
//   color: white;
//   fontsize: 28px;
//   fontweight: 800;
//   text-align: center;
//   font-family: "Manrope", sans-serif !important;
// `;
// export const TextDescription = styled(Typography)`
//   color: black;
//   font-size: 14px;
//   text-align: center;
//   font-weight: 400;
//   font-family: "Nunito Sans", sans-serif;
// `;
// export const TextSubDescription = styled(Typography)`
//   color: black;
//   font-size: 14px;
//   text-align: center;
//   font-weight: 700;
//   font-family: "Nunito Sans", sans-serif;
// `;
