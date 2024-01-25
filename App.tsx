import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import { ButtonLogin, GlobalStyle, Login, ViewLogin } from "./global/Global";

import { FormLogin } from "./screen/Form";
import { RecoveryPassword } from "./screen/RecoveryPassword";
import { FooterScreen } from "./screen/Footer";
import { InitialInfo } from "./screen/InitialInfo";
import { useState } from "react";
import { SignupAccount } from "./screen/Signup";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogin = () => {
    if (email && password)
      alert(`********** Logged ********** \n\n Welcome,${email}`);
  };

  const handleWithRecoveryPassword = () => alert(`You're password is: ${new Date().getMilliseconds().toFixed(0)}`);

  const signupAccount = () => alert(`🟢 You account has been created 🟢\n\n `);

  return (
    <>
      <GlobalStyle>
        <ScrollView>
          <StatusBar style="light" />
          <ViewLogin>
            <InitialInfo />
            <FormLogin
              email={email}
              password={password}
              handleWithEmail={(email) => setEmail(email)}
              handleWithPassword={(pass) => setPassword(pass)}
            />
            <RecoveryPassword recoveryPassWord={handleWithRecoveryPassword} />
            <ButtonLogin onPress={HandleLogin}>
              <Login>Login</Login>
            </ButtonLogin>
            <SignupAccount signUpAcc={signupAccount} />
            <FooterScreen />
          </ViewLogin>
        </ScrollView>
      </GlobalStyle>
    </>
  );
}
