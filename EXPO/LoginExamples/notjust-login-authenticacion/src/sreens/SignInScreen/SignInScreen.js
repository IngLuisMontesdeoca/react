import React, { useContext, useState } from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/Logo_1.png';
import { StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { Context } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const SignInScreen = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {height} = useWindowDimensions();
    const navigation = useNavigation();
    const {login,msgError} = useContext(AuthContext);

    const onSignPressed =  () => {
        console.warn('Sign in',username);
        //Validate USER (Auth API)
        login(username,password);
        //navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        console.warn('Forgot Password');
        navigation.navigate('ForgotPassword');
    }

    const onSignUpPress = () => {
        console.warn('Sign up press');
        navigation.navigate('SignUp');
    }

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain'></Image>
                <CustomInput placeHolder='UserName' value={username} setValue={setUsername} secureTextEntry={false}></CustomInput>
                <CustomInput placeHolder='Password' value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
                <CustomButton text="Sign in" onPress={onSignPressed}></CustomButton>
                <CustomButton text="Forgot Password?" onPress={onForgotPasswordPressed} type="TERTIARY"></CustomButton>
                <SocialSignInButtons></SocialSignInButtons>
                <CustomButton text="Dont'have an account? create one" onPress={onSignUpPress} type= "TERTIARY"></CustomButton>
                <Text>{msgError}</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20
    },
    logo:{
        width: 100,
        maxWidth:300,
        maxHeight:200
    }
});

export default SignInScreen;