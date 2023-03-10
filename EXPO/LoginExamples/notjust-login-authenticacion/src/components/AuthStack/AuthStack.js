import React from "react";
import SignInScreen from '../../sreens/SignInScreen';
import SignUpScreen from "../../sreens/SignUpScreen";
import ConfirmEmailScreen from '../../sreens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../../sreens/ForgotPasswordScreen';
import NewPasswordScreen from '../../sreens/NewPasswordScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
            <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
            <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
            <Stack.Screen name="NewPassword" component={NewPasswordScreen}/>
        </Stack.Navigator>
    )
}

export default AuthStack;