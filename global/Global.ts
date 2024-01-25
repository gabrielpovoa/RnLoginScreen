import React from "react";
import Styled from "styled-components/native";
import { Theme, Color, FontSize, BackgroundInput, Button } from "../theme/theme";

export const GlobalStyle = Styled.SafeAreaView`
background-color: ${Theme.bgDark};
height:100%;
`;

export const ViewLogin = Styled.View`
padding:15px;
align-items:center;
`;

export const BigText = Styled.Text`
font-size: ${FontSize.xl}px;
color: ${Color.toDefaultDark};
font-weight:bold;
margin:10px 0;
`;

export const WelcomeText = Styled.Text`
font-size: ${FontSize.m}px;
color: ${Color.toDefaultDarkSecondary};
`;

export const Logo = Styled.Image`
width:150px;
height:150px;
`;

export const Label = Styled.Text`
color: ${Color.toDefaultDarkSecondary};
font-size:${FontSize.m}px;
margin-bottom:10px;
`;

export const ButtonLogin = Styled.TouchableOpacity`
width: 100%;
background-color: ${Button.blueLight};
padding: 15px;
border-radius: 4px;
`;

export const Login = Styled.Text`
text-align:center;
font-size: ${FontSize.m};
color:${Color.toDefaultDark}
`;

export const Form = Styled.View`
width: 100%;
padding-top:20px;
`;

export const InputField = Styled.TextInput`
font-size: ${FontSize.m}px;
color: ${Color.toDefaultDark};
background-color: ${BackgroundInput.bgInput};
width: 100%;
height: 40px;
border-radius: 4px;
/* opacity:.4; */
padding: 8px 12px;
`;

export const ViewRestPassword = Styled.View`
width: 100%;
`;

export const ForgetPassword = Styled.TouchableOpacity`
align-self:flex-end;
padding: 20px 0;
`;

export const TextForgetPassword = Styled.Text`
color:${Button.blueLight};
font-size:${FontSize.s}px;
`;

export const SignUp = Styled.View`
width: 100%;
padding: 20px 0;
margin-top:30px;
flex-direction:row;
align-items:center;
justify-content:center;
gap:3px;
`;

export const TextSignup = Styled.Text`
font-size: ${FontSize.s}px;
color: ${Color.toDefaultDarkSecondary};

`;

export const SignUpButton = Styled.TouchableOpacity`
/* background-color:red; */
padding:5px;
background-color:${Button.blueLight};
border-radius:2px;
`;

export const TextSignupButton = Styled.Text`
font-size: ${FontSize.s}px;
color: ${Color.toDefaultDark};
`;

export const Footer = Styled.View`
margin: 100px 0;
`;


export const Madeby = Styled.Text`
font-size:${FontSize.m}px;
color:${Color.toDefaultDark};
align-items: center;
`;