import React from "react";
import { Form, InputField, Label } from "../global/Global";
import { Color } from "../theme/theme";

type Props = {
  email: string;
  password: string;
  handleWithEmail: (item:string) => void;
  handleWithPassword: (item:string) => void;
};

export const FormLogin = ({ email, password,handleWithEmail, handleWithPassword }: Props) => {
  return (
    <>
      <Form>
        <Label>E-mail</Label>
        <InputField
          placeholder="Enter you E-mail address"
          placeholderTextColor={Color.toDefaultDark}
          value={email}
          onChangeText={(email) => handleWithEmail(email)}
          autoCapitalize="none"
          keyboardType="email-address"
        />
      </Form>
      <Form>
        <Label>Password</Label>
        <InputField
          placeholder="**********"
          placeholderTextColor={Color.toDefaultDark}
          value={password}
          onChangeText={(password)=>handleWithPassword(password)}
          secureTextEntry
        />
      </Form>
    </>
  );
};
