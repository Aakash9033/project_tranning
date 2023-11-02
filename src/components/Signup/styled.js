import styled from "@emotion/styled";
import { Button, Grid, InputLabel, TextField, Typography } from "@mui/material";

export const SignupWrapper = styled(Grid)`
  max-width: 827px;
  width: 100%;
  margin: 0 auto;
  padding: 73px 0px 49px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SignupContainer = styled(Grid)`
  width: 100%;
  border: 1px solid #e1e1e1;
  background-color: #fff;
  margin-top: 64px;
  padding: 39px 55px 38px 72px;
`;

export const SignupTextStyled = styled(Typography)`
  color: #045cb4;
  font-family: Poppins;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
`;

export const LabelStyled = styled(Typography)`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
`;

export const BoxWrapper = styled(Grid)`
  display: flex;
  gap: 129px;
  align-items: center;
  justify-content: space-between;
`;

export const TextFieldStyled = styled(TextField)`
  width: 468px;
`;

export const CreateAccountStyled = styled(Button)`
  width: 228px;
  height: 57px;
  border-radius: 10px;
  background: #045cb4;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  text-transform: unset;

  &:hover {
    background: #045cb4;
  }
`;

export const StyledLabel = styled.label`
  color: #000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const AsterikStyled = styled.span`
  color: #c60000;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
