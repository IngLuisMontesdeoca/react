import Rext from  'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';

const CustomButton = ({onPress, text, type="PRIMARY", bgColor, fgColor}) => {
    return(
        <Pressable 
            onPress={onPress} 
            style={[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor}: {}
            ]}
        >
            <Text 
                style={[
                    styles.text,styles[`text_${type}`],
                    fgColor ? {color:fgColor} : {}
                ]}>{text}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: '#3B71F3',
    },
    container_SECONDARY: {
        borderColor: '#3B71F3',
        borderWidth: 2
    },
    container_TERTIARY: {
        backgroundColor: 'white'
    },
    text_PRIMARY:{
        fontWeight: 'bold',
        color: 'white'
    },
    text_SECONDARY:{
        fontWeight: 'bold',
        color: '#3B71F3'
    },
    text_TERTIARY:{
    }
});

export default CustomButton;
