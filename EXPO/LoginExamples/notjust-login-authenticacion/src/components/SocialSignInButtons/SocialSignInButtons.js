import React from "react";
import CustomButton from "../CustomButton";

const SocialSignInButtons = () => {

    const onSignWithInFacebook = () => {
        console.log('Sign with facebook')
    };

    const onSignWithInGoogle = () => {
        console.log('Sign with google');
    };

    const onSignWithInApple = () => {
        console.warn('Sign with Apple');
    };

    return (
        <>
            <CustomButton text="Sign in whit Facebook" bgColor="#E7EAF4" fgColor="#4765A9" onPress={onSignWithInFacebook}></CustomButton>
            <CustomButton text="Sign in with Google"   bgColor="#FAE9EA" fgColor="#DD4D44" onPress={onSignWithInGoogle}></CustomButton>
            <CustomButton text="Sign in with Apple"    bgColor="#e3e3e3" fgColor="#363636" onPress={onSignWithInApple}></CustomButton>
        </>
    )
}

export default SocialSignInButtons;