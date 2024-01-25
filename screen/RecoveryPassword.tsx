import React from "react";
import {
  ForgetPassword,
  TextForgetPassword,
  ViewRestPassword,
} from "../global/Global";

export const RecoveryPassword = () => {
  return (
    <>
      <ViewRestPassword>
        <ForgetPassword>
          <TextForgetPassword>Reset Password</TextForgetPassword>
        </ForgetPassword>
      </ViewRestPassword>
    </>
  );
};
