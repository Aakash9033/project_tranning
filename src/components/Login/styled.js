import styled from "@emotion/styled";
import { Button, Grid, InputLabel, Typography } from "@mui/material";

export const ImageWrapper = styled(Grid)`
  max-width: 831px;
  width: 100%;
`;

export const FormParentWrapper = styled(Grid)`
  padding: 202px 0px 270px 175px;
  min-height: 100vh;
  width: 100%;
`;

export const FormWrapper = styled(Grid)`
  max-width: 501px;
  width: 100%;
`;

export const TypographyStyled = styled(Typography)`
  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  color: #045cb4;
  letter-spacing: normal;
`;

export const LabelStyled = styled(InputLabel)`
  font-family: Poppins;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  letter-spacing: normal;
  line-height: 24px;
`;

export const LinkButtonStyled = styled(Button)`
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  color: #091f3b;
  width: 100%;
  text-transform: unset;
`;

export const ButtonWrapper = styled(Grid)`
  margin-top: 58px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const RegisterButtonStyled = styled(Button)`
  border-radius: 10px;
  border: 1px solid #045cb4;
  background: #fff;
  width: 141px;
  height: 57px;
  color: #045cb4;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  text-transform: unset;
  &:hover {
    background: #fff;
  }
`;

export const LoginButtonStyled = styled(Button)`
  border-radius: 10px;
  background: #045cb4;
  border: 1px solid #045cb4;
  width: 141px;
  height: 57px;
  color: #fff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: normal;
  text-transform: unset;
  &:hover {
    background: #045cb4;
  }
`;
