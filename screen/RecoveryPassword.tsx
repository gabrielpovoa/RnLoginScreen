import React from "react";
import {
  ForgetPassword,
  TextForgetPassword,
  ViewRestPassword,
} from "../global/Global";

type Props = {
  recoveryPassWord: () => void;
};

export const RecoveryPassword = ({ recoveryPassWord }: Props) => {
  return (
    <>
      <ViewRestPassword>
        <ForgetPassword onPress={recoveryPassWord}>
          <TextForgetPassword>Reset Password</TextForgetPassword>
        </ForgetPassword>
      </ViewRestPassword>
    </>
  );
};
