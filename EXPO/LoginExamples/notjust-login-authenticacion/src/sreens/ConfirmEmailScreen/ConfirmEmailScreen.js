import React, { useState } from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const {height} = useWindowDimensions();
    const {code,setCode} = useState();
    const navigator = useNavigation();

    const onSignPressed =  () => {
        console.warn('Sign in');
        navigator.navigate('SignIn');
    };

    const onResendPressed = () => {
        console.warn('Resend');
    }

    const onConfirmPressed =  () => {
        console.warn('Confirm pressed');
        navigator.navigate('Home')
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
                <Text style={styles.title}>Confirm your email</Text>
                <CustomInput placeHolder='Enter your confirmation code' value={code} setValue={setCode} secureTextEntry={false}></CustomInput>
                <CustomButton text="Confirm" onPress={onConfirmPressed}></CustomButton>
                <CustomButton text="Resend Code" onPress={onResendPressed} type="SECONDARY"></CustomButton>
                <CustomButton text="Back to Sign in" onPress={onSignPressed} type="TERTIARY"></CustomButton>
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

export default ConfirmEmailScreen;