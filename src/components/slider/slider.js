import React from "react";
import { useRef } from "react";
import { SliderData } from "../data/data";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {
  BackwardButton,
  ButtonDescription,
  ButtonView,
  CustomSlider,
  DescriptionMain,
  ForwardButton,
  ImageGrid,
  ImageMain,
  SliderDescription,
  SliderHeading,
  SliderMain,
  TextWritter,
  WrapperBttonsGrid,
  WrapperMainGrid,
} from "../Styled-component/Styled";

import Image from "mui-image";
import { Grid, Typography } from "@mui/material";

const SliderContent = () => {
  const sliderRef = useRef(null);

  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    centerMode: true,
    dotsClass: "button__bar",
    className: "Custom_class",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // initialSlide: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };
  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };
  return (
    <SliderMain>
      <SliderHeading>
        <SliderDescription>Featured Icons</SliderDescription>
      </SliderHeading>
      <WrapperMainGrid>
        <WrapperBttonsGrid
          left={"0"}
          paddingLeft={"28px"}
          gradient={"linear-gradient(to left, transparent, black)"}
          // borderRadius={"10px 0 0 10px"}
          className="sliderbuttons"
        >
          <BackwardButton onClick={handlePrevClick} />
        </WrapperBttonsGrid>
        <WrapperBttonsGrid
          right={"0"}
          flexDirection={"row-reverse"}
          paddingRight={"18px"}
          gradient={"linear-gradient(to right, transparent, black)"}
          // borderRadius={"0 10px 10px 0 "}
          className="sliderbuttons"
        >
          <ForwardButton onClick={handleNextClick} />
        </WrapperBttonsGrid>
        <Slider ref={sliderRef} {...setting}>
          {/* <CustomSlider {...setting}> */}
          {/* <ImageMain> */}

          {SliderData.map((item) => (
            <ImageGrid>
              <DescriptionMain>
                <TextWritter
                  // fontSize={"28px"}
                  fontWeight={800}
                  fontFamily={'"Manrope", sans-serif'}
                  width={"150px"}
                  lineHeight={"32px"}
                >
                  {item.mainText}
                </TextWritter>
                <TextWritter
                  fontSize={"14px"}
                  fontWeight={400}
                  fontFamily={'"Nunito Sans", sans-serif'}
                >
                  {item.text}
                </TextWritter>
                <ButtonDescription variant="p" className="ViewDescription">
                  Business / Creative
                </ButtonDescription>
                <ButtonView variant="contained" className="View">
                  View Icon
                </ButtonView>

                <TextWritter
                  fontSize={"14px"}
                  fontWeight={700}
                  fontFamily={'"Nunito Sans", sans-serif'}
                  borderTop={"1px red solid"}
                  padding={"10px"}
                >
                  {item.SubText}
                </TextWritter>
              </DescriptionMain>
              <img
                src={item.imagelink}
                className="cardImage"
                alt={"image not found"}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                }}
              ></img>
            </ImageGrid>
          ))}
          {/* </ImageMain> */}
        </Slider>
      </WrapperMainGrid>
      {/* </CustomSlider> */}
    </SliderMain>
  );
};
export default SliderContent;
