import {
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  ButtonWrapper,
  FormParentWrapper,
  FormWrapper,
  ImageWrapper,
  LabelStyled,
  LinkButtonStyled,
  LoginButtonStyled,
  RegisterButtonStyled,
  TypographyStyled,
} from "./styled";
import Iconify from "../iconify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <Grid display={"flex"}>
      <ImageWrapper>
        <img src="/assets/LoginImage.png" alt="logo" />
      </ImageWrapper>
      <FormParentWrapper>
        <FormWrapper>
          <img src="/assets/header.svg" alt="logo" />
          <TypographyStyled mt={"42px"} mb={"77px"}>
            Welcome, let’s log in
          </TypographyStyled>
          <LabelStyled sx={{ marginBottom: "5px" }}>Email address</LabelStyled>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter Email"
            fullWidth
            sx={{ marginBottom: "20px" }}
          />
          <LabelStyled sx={{ marginBottom: "5px" }}>Password</LabelStyled>
          <TextField
            id="outlined-basic"
            variant="outlined"
            placeholder="**************"
            fullWidth
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    <Iconify
                      icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LinkButtonStyled variant="text" sx={{ marginTop: "35px" }}>
            Forgot Password?
          </LinkButtonStyled>
          <ButtonWrapper>
            <RegisterButtonStyled>Register</RegisterButtonStyled>
            <LoginButtonStyled>Login</LoginButtonStyled>
          </ButtonWrapper>
        </FormWrapper>
      </FormParentWrapper>
    </Grid>
  );
};

export default Login;
