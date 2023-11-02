import React, { useState } from "react";
import {
  AsterikStyled,
  BoxWrapper,
  CreateAccountStyled,
  LabelStyled,
  SignupContainer,
  SignupTextStyled,
  SignupWrapper,
  StyledLabel,
  TextFieldStyled,
} from "./styled";
import { formData } from "./data";
import {
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Iconify from "../iconify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SignupWrapper>
      <img
        src="/assets/header.svg"
        alt="logo"
        width={"270px"}
        height={"43px"}
      />
      <SignupContainer>
        <SignupTextStyled mb={"41px"}>Sign Up</SignupTextStyled>

        {formData?.map((item, index) => {
          const { label, required, type, placeholder } = item;

          if (type === "text") {
            return (
              <BoxWrapper mb={"22px"}>
                <LabelStyled>
                  {" "}
                  {required && <AsterikStyled>*</AsterikStyled>}
                  {label}:
                </LabelStyled>
                <TextFieldStyled
                  id="outlined-basic"
                  variant="outlined"
                  fullWidth
                  placeholder={placeholder}
                />
              </BoxWrapper>
            );
          } else if (type === "mobile") {
            return (
              <BoxWrapper mb={"22px"}>
                <LabelStyled>{label}:</LabelStyled>
                <Grid
                  display={"flex"}
                  maxWidth={"468px"}
                  width={"100%"}
                  gap={"10px"}
                >
                  <Grid>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={age}
                      label="Age"
                      sx={{ minWidth: "160px" }}

                      // onChange={handleChange}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </Grid>
                  <TextField id="outlined-basic" variant="outlined" fullWidth />
                </Grid>
              </BoxWrapper>
            );
          } else if (type === "password") {
            return (
              <Grid
                mb={"22px"}
                display={"flex"}
                justifyContent={"space-between"}
              >
                <LabelStyled>
                  {" "}
                  {required && <AsterikStyled>*</AsterikStyled>}
                  {label}:
                </LabelStyled>
                <Grid sx={{ maxWidth: "465px", width: "100%" }}>
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder="**************"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            <Iconify
                              icon={
                                showPassword
                                  ? "eva:eye-fill"
                                  : "eva:eye-off-fill"
                              }
                            />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
            );
          }
        })}
        <Grid display={"flex"} justifyContent={"end"}>
          <FormControlLabel
            control={<Checkbox />}
            label={
              <StyledLabel>
                I hereby accept Terms & Conditions & Privacy Policy
              </StyledLabel>
            }
          />
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          mt={"82px"}
        >
          <CreateAccountStyled>Create Account</CreateAccountStyled>
        </Grid>
      </SignupContainer>
    </SignupWrapper>
  );
};

export default Signup;
