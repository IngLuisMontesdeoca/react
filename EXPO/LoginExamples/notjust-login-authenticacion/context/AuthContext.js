import React, {createContext, useEffect, useState} from "react";
import axios from 'axios';
import { BASE_URL } from "../config";
import AsyncStorage from  "@react-native-async-storage/async-storage"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading,setIsLoading] = useState(false);
    const [userToken,setUserToken] = useState(null);
    const [msgError,setMsgError] = useState(null);

    const login = (username,password) => {
        setIsLoading(true);

        console.log('username',username);

        axios({
            method: 'post',
            url: `${BASE_URL}/getToken`,
            data: { 
                'email': username,
                'password': password
            }
        }).then(res => {
            console.log(res);
            if(res.data){
                if(res.data.token){
                    setUserToken(res.data.token);   
                    AsyncStorage.setItem('userToken', res.data.token);
                    setIsLoading(false);
                    return;
                }
            }
            setIsLoading(false);
            //setUserToken('hjhkashdas');
            //console.log('AsyncStorage',AsyncStorage);
        }).catch(e => {
            console.log(`Login error ${e}`);
            setMsgError(e.response.data.msg);
            setIsLoading(false);
        });
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedIn = async() => {
        try{
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
            setIsLoading(false);
        }catch(e){
            console.log(`isLogged In Error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedIn();
    },[]);

    return (
        <AuthContext.Provider value={{login,logout, isLoading, userToken,msgError}}>
            {children}
        </AuthContext.Provider>
    )
}