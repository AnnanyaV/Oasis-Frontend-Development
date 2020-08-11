import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function AddCoverImage() {
    return(
        <TouchableOpacity>
        <View style = {styles.container}>

        <View style = {styles.circle}>
            <Image source={require("../assets/images/camera.png")} />
        </View>
        <Text style = {styles.text}>Add Cover Image</Text>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    circle: {
        position: 'absolute',
        width: 61,
        height: 61,
        left: 67,
        top: 218,

        backgroundColor: '#414066',
/* login and sign up button shadow */

        //box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        borderRadius: 100,      
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOpacity: .5,
        shadowOffset: {
            height: 1,
            width: 1,
        }
    }, text: {
        position: 'absolute',
        width: 161,
        height: 22,
        left: 145,
        top: 237,

        fontFamily: 'Montserrat',
        fontSize: 18,
        lineHeight: 22,


        color: '#EDEDED',
    }
})