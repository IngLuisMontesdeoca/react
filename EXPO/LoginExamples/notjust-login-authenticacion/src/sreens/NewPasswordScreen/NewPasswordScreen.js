import React, { useState } from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import { StyleSheet } from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const {code,setCode} = useState();
    const {password,setPassword} = useState();
    const navigator = useNavigation();

    const onSignPressed =  () => {
        console.warn('Sign in');
        navigator.navigate('SignIn');
    };

    const onSubmitPressed = () => {
        console.warn('onSubmitPressed');
        navigator.navigate('Home');
    }
    
    const onThermsOfUsePressed = () => {
        console.warn('onThermsOfUsePressed');
    };

    const onThermsOfPrivacyPressed = () => {
        console.warn('onThermsOfPrivacyPressed');
    };

    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={styles.root}>
                <Text style={styles.title}>Reset your Password</Text>
                <CustomInput placeHolder='Confirmation code' value={code} setValue={setCode} secureTextEntry={false}></CustomInput>
                <CustomInput placeHolder='Password' value={password} setValue={setPassword} secureTextEntry={true}></CustomInput>
                <CustomButton text="Submit" onPress={onSubmitPressed}></CustomButton>
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

export default NewPasswordScreen;