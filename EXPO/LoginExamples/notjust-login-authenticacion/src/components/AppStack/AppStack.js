import React from "react";
import HomeScreen from "../../sreens/HomeScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AppStack =  () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    )
};

export default AppStack;