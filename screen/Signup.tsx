import React from "react";
import {
  SignUp,
  SignUpButton,
  TextSignup,
  TextSignupButton,
} from "../global/Global";

type Props = {
  signUpAcc: () => void;
};
export const SignupAccount = ({ signUpAcc }: Props) => {
  return (
    <>
      <SignUp>
        <TextSignup>Don't have and account?</TextSignup>
        <SignUpButton onPress={signUpAcc}>
          <TextSignupButton>Sign up Here 👌</TextSignupButton>
        </SignUpButton>
      </SignUp>
    </>
  );
};
