import React, { useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { AuthContext } from "../../context/AuthContext";
import AppStack from "../components/AppStack/AppStack";
import AuthStack from "../components/AuthStack/AuthStack";

const Navigation = () => {
    const {isLoading,userToken} = useContext(AuthContext);

    console.log('isLoading',isLoading);

    if(isLoading){
        return(
            <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size={'large'}></ActivityIndicator>
            </View>
        )
    }

    return (
        <NavigationContainer>
            {userToken !== null ? <AppStack/> : <AuthStack/> }
        </NavigationContainer>
    )
};

export default Navigation;