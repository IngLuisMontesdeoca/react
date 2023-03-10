import React from "react";
import LoginScreen from 'react-native-login-screen';

const Login = () => {
    return (
        <LoginScreen
            logoImageSource={require("../../../assets/logoFinder.png")}
            onLoginPress={() => {}}
            onSignupPress={() => {}}
            onEmailChange={() => {}}
            onPasswordChange={() => {}}
        />
    )

}

export default Login;