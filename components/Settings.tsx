import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Settings(props) {
    return(
        <TouchableOpacity>
        <View style = {styles.settingsButton}>
        <FontAwesome style={styles.icon} name="music" size={24} color="white" />
            <Text style = {styles.settingsText}>{props.title}</Text>
        </View>

    
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    settingsButton: {
        justifyContent: 'center',
        alignItems: 'center',

            width: 300,
            height: 55,
            left: 50,
            top: 230,

            marginTop: -45,
            backgroundColor: '#7a6870',
            opacity: .6,
            borderRadius: 10,
            shadowColor: '#000000',
            shadowOpacity: .4,
            shadowOffset: {
                width: 0,
                height: 1
            }


    }, settingsText: {
        top:-35,
        marginLeft:30,
        fontFamily: "Montserrat-Bold",
        fontSize: 15.5,
        color: 'white'
    },
    icon:{
        top:30,
        marginLeft:10,
        width: 100,
        height: 70,
        alignSelf: 'stretch',
        // borderRadius: 5,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderColor: '#fff',
        borderWidth: 0,
        fontSize:30,

    },

     


    
    
})