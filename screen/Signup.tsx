import React from "react";
import { SignUp, SignUpButton, TextSignup, TextSignupButton } from "../global/Global";

export const Signup = () => {
  return (
    <>
      <SignUp>
        <TextSignup>Don't have and account?</TextSignup>
        <SignUpButton>
          <TextSignupButton>Sign up Here 👌</TextSignupButton>
        </SignUpButton>
      </SignUp>
    </>
  );
};
