import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';

export default function AddCaption() {
    const [value, onChangeText] = React.useState('');
    return(
        <TextInput
        style = {styles.border}
        placeholder = {"Add Caption"}
        placeholderTextColor = {"white"}
        onChangeText={text => onChangeText(text)}
        value={value}
        />
    )
}

const styles = StyleSheet.create({
    border: {
        position: 'absolute',
        width: 303,
        height: 95,
        left: 36,
        top: 408,

        borderRadius: 14,
        borderWidth: 1,
        borderColor: '#85FFD8',
    }
})