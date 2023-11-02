import React from "react";
import { SliderData } from "../data/data";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  CustomSlider,
  DescriptionMain,
  ImageGrid,
  ImageMain,
  SliderHeading,
  SliderMain,
  TextWritter,
} from "../Styled-component/Styled";

import Image from "mui-image";
import { Typography } from "@mui/material";

const SliderContent = () => {
  const setting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <SliderMain>
      <SliderHeading>
        <Typography style={{ fontWeight: "800", fontSize: "28px" }}>
          Featured Icons
        </Typography>
      </SliderHeading>
      <CustomSlider {...setting}>
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
            <Image
              src={item.imagelink}
              alt={"image not found"}
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            ></Image>
          </ImageGrid>
        ))}
        {/* </ImageMain> */}
      </CustomSlider>
    </SliderMain>
  );
};
export default SliderContent;
