import React from "react";
import { BigText, Logo, WelcomeText } from "../global/Global";

export const InitialInfo = () => {
  return (
    <>
      <Logo source={require("../assets/rn_login_logo.png")} />
      <BigText>Login System</BigText>
      <WelcomeText>Welcome!! Type your data to log in</WelcomeText>
    </>
  );
};
