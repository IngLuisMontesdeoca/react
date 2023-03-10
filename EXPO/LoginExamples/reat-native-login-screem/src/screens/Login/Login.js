import React from "react";
import LoginScreen from "react-native-login-screen";
const Login = () => {
    return (
    <LoginScreen
        logoImageSource={require("../../../assets/logoFinder.png")}
        onLoginPress={() => {}}
        onSignupPress={() => {}}
        onEmailChange={() => {}}
        onPasswordChange={() => {}}
        disableSocialButtons={false}
        emailPlaceholder="Login"
        loginButtonText="Entrar"
        passwordPlaceholder="Contraseña"
        signupText="Recuperar contraseña"
    >
    </LoginScreen>
    )
}

export default Login