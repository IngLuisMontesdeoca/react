import React from "react";
import {View,Text, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeHolder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            placeholder={placeHolder}
            secureTextEntry={secureTextEntry}
            style={styles.input}>
            </TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    },
    input: {
        width: '100%',
        borderColor: 'white',
        borderWidth: 0,
        padding: 0,
        paddingTop:10,
        margin:0,
        paddingBottom: 10,
        borderRadius: 5
    }
});

export default CustomInput;