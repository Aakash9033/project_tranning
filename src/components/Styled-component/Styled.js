import styled from "@emotion/styled";
import React from "react";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

import {
  AppBar,
  Grid,
  Select,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import Image from "mui-image";
import Slider from "react-slick";
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

export const CustomAppBar = styled(AppBar)`
  background-color: white !important;
  box-shadow: none !important;
  display: flex;
  justify-content: space-between;
`;
export const CustomToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  padding: 0px 85px;
  @media (max-width: 900px) {
    padding: 0px 40px;
  }
  @media (max-width: 400px) {
    padding: 0px 16px;
  }
  &.MuiToolbar-root {
    @media (min-width: 600px) {
      padding: 0px 20px;
    }
    @media (min-width: 900px) {
      padding: 0px 85px;
    }
  }
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
  position: relative;
  @media (max-width: 900px) {
    font-size: 50px;
  }
  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
export const SubHeading = styled(Typography)`
  width: 580px;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 0px;
  font-family: "Nunito Sans", sans-serif;
  line-height: 40px;
  @media (max-width: 900px) {
    width: 395px;
    font-size: 20px;
    line-height: 20px;
  }
  @media (max-width: 400px) {
    width: 300px;
    font-size: 15px;
  }
`;
export const SearchMain = styled(Grid)`
  width: 950px;
  height: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  box-shadow: 8px 0px 20px 0 #d4d4d4;
  @media (max-width: 970px) {
    width: 720px;
    height: 50px;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
export const SubSearch = styled(Grid)`
  width: 99%;

  display: flex;
  justify-content: space-between;
`;

export const StyledInputBase = styled(InputBase)`
  color: inherit;
  // vertical padding + font size from searchIcon
  width: 40%;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 10px;
  }
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
  padding-left: 85px;
  padding-top: 60px;
  // padding-left: 53px;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    padding-left: 20px;
  }
  @media (max-width: 400px) {
    padding-left: 0px;
  }
`;
export const SliderHeading = styled(Grid)`
  // padding-left: 32px;
`;
// export const ImageMain = styled(Grid)`
//   display: flex;
//   // gap: 32px;
//   padding-top: 32px;
// `;
export const ImageGrid = styled(Grid)`
  width: 264px;
  height: 384px;
  border-radius: 10px;
  position: relative;
  margin-right: 32px;

  @media (max-width: 400px) {
    height: 300px;
  }
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
  width: 192px;

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
export const CustomImage = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  @media (max-width: 900px) {
    width: 130px;
    height: 40px;
  }
  @media (max-width: 400px) {
    width: 75px;
    height: 20px;
  }
`;
export const BackwardButton = styled(MdArrowBackIos)`
  font-size: 40px;
  cursor: pointer;
`;
export const ForwardButton = styled(MdArrowForwardIos)`
  font-size: 40px;
  cursor: pointer;
`;
export const WrapperBttonsGrid = styled(Grid)(
  ({ left, right, paddingLeft, flexDirection, paddingRight, gradient }) => ({
    position: "absolute",
    left: ` ${left || "unset"}`,
    right: `${right || "unset"}`,
    height: "384px",
    width: "132px",
    top: "32px",
    zIndex: 5,
    color: "white",
    paddingLeft: `${paddingLeft || "unset"}`,
    paddingRight: `${paddingRight || "unset"}`,
    display: "flex",
    flexDirection: `${flexDirection || "row"}`,
    alignItems: "center",
    background: `${gradient || "none"}`,
    opacity: 0,
    transition: "opacity 0.3s",
    "@media (max-width: 900px)": {
      display: "none",
    },
  })
);
export const WrapperMainGrid = styled(Grid)`
  position: relative;
  overflow: hidden;
  height: 420px;
  @media (max-width: 390px) {
    height: 430px;
  }
  @media (max-width: 400px) {
    padding: 16px 16px;
  }
  &:hover .sliderbuttons {
    opacity: 1;
  }
`;
export const CustomMenuBarIcon = styled(MenuIcon)`
  color: black;

  @media (min-width: 900px) {
    display: none;
  }
`;
export const CustomNavTabs = styled(Tabs)`
  @media (max-width: 900px) {
    display: none;
  }
`;
export const CustomNavButtonsWrapper = styled(Grid)`
  display: flex;
  gap: 20px;
  @media (max-width: 900px) {
    display: none;
  }
`;
export const CustomSearchIcon = styled(SearchIcon)`
  width: 40px;
  // height: 48px;
  background-color: #e32320;
  color: white;
  margin-left: 16px;
  border-radius: 6px;
  padding: 15px 13px;
  cursor: pointer;
  @media (max-width: 970px) {
    padding: 8px 4px;
  }
`;
export const SliderDescription = styled(Typography)`
  font-weight: 800;
  font-size: 28px;
  @media (max-width: 400px) {
    text-align: center;
  }
`;
export const ButtonView = styled(Button)`
  display: none;
  width: 70%;
  background-color: #e32320;
  padding: 10px 15px;
  font-size: 10px;
  font-family: "Nunito Sans", sans-serif;
  font-weight: 700;
  &:hover {
    background-color: #e32320;
  }
`;
export const ButtonDescription = styled(Typography)`
  display:none;
  color: white;
  font-size:14px;
  font-family:font-family: "Nunito Sans", sans-serif;
  font-weight:700
`;
// export const CustomSlider = styled(Slider)`
//   .slick-track {
//     display: flex;
//     gap: 32px;
//     margin-top: 32px;
//   }
//   ,
//   .slick-dots {
//     position: absolute;
//     top: 0;
//     right: 30px;
//     width: auto;
//     height: fit-content;
//   }
//   ,
//   .slick-dots li button::before {
//     font-size: 20px;
//     line-height: 20px;
//     text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
//       1px 1px 0 #000;
//     color: white;
//   }
//   ,
//   }
//   .slick-dots li.slick-active button::before {
//     color: black;
//   }

//   ,
//   .slick-active {
//     font-size: 32px;
//   }
//   ,
//   .slick-slider {
//     padding-left: 32px;
//   }
// `;

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
