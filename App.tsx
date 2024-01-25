import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native";
import {
  ButtonLogin,
  GlobalStyle,
  Login,
  SignUp,
  ViewLogin,
} from "./global/Global";
import { FormLogin } from "./screen/Form";
import { RecoveryPassword } from "./screen/RecoveryPassword";
import { FooterScreen } from "./screen/Footer";
import { InitialInfo } from "./screen/InitialInfo";
import { useState } from "react";
import { LoginType } from "./types/LoginTypes";

export default function App() {
  const [login, setLogin] = useState<LoginType>({
    email: "",
    password: "",
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const HandleLogin = () => {
    if(email && password) {
      alert(`********** Logged ********** \n\n Welcome,${email}`)
    }
  };

  return (
    <>
      <GlobalStyle>
        <ScrollView>
          <StatusBar style="auto" />
          <ViewLogin>
            <InitialInfo />
            <FormLogin 
              email={email} 
              password={password} 
              handleWithEmail={(email) => setEmail(email)}
              handleWithPassword={(pass) => setPassword(pass)}
              />
            <RecoveryPassword />
            <ButtonLogin onPress={HandleLogin}>
              <Login>Login</Login>
            </ButtonLogin>
            <SignUp />
            <FooterScreen />
          </ViewLogin>
        </ScrollView>
      </GlobalStyle>
    </>
  );
}
