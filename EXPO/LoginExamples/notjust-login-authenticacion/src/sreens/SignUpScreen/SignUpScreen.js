import React, { useState } from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const {height} = useWindowDimensions();
    const {username,setUsername} = useState();
    const {email,setEmail} = useState();
    const {password,setPassword} = useState();
    const {confirmPassword,setConfirmPasword} = useState();
    const navigator = useNavigation();

    const onSignPressed =  () => {
        console.warn('Sign in');
        navigator.navigate('SignIn');
    };

    const onRegisterPress = () => {
        console.warn('Register press');
        navigator.navigate('ConfirmEmail');
    };

    const onThermsOfUsePressed = () => {
        console.warn('onThermsOfUsePressed');
    };

    const onThermsOfPrivacyPressed = () => {
        console.warn('onThermsOfPrivacyPressed');
    };

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Create an account</Text>
                <CustomInput placeHolder='UserName' value={username} setValue={setUsername} secureTextEntry={false}></CustomInput>
                <CustomInput placeHolder='Email' value={email} setValue={setEmail} secureTextEntry={false}></CustomInput>
                <CustomInput placeHolder='Password' vaue={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
                <CustomInput placeHolder='Confirm Password' vaue={confirmPassword} setValue={setConfirmPasword} secureTextEntry={true}></CustomInput>
                <CustomButton text="Register" onPress={onRegisterPress}></CustomButton>

                <Text style={styles.text}>
                    By registering, you confirm that you accept our
                    <Text style={styles.link} onPress={onThermsOfUsePressed}>Therms of Use</Text> and 
                    <Text style={styles.link}> onPress={onThermsOfPrivacyPressed} Privacy Policy</Text>
                </Text>
                <SocialSignInButtons></SocialSignInButtons>
                <CustomButton text="Have an account? Sign In" onPress={onSignPressed} type= "TERTIARY"></CustomButton>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10
    },
    text: {
        color: 'gray',
        marginVertical:10
    },
    link:{
        color: '#FBD075'
    }
});

export default SignUpScreen;