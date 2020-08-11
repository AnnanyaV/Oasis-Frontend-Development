import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function Notification(props) {
    return(
        <TouchableOpacity>
        <View style = {styles.notificationButton}>
            <Text style = {styles.notificationText}>{props.title}</Text>
            <Text style = {styles.timeText}>{props.time}</Text>
        </View>

        <Image style = {styles.profilepic} source={require('../assets/profile.jpg')} />
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    notificationButton: {
        justifyContent: 'center',
        alignItems: 'center',

            width: 393,
            height: 70,
            left: 10,
            top: 162,

            marginTop: -45,
            backgroundColor: '#7a6870',
            opacity: .6,
            borderRadius: 20,
            shadowColor: '#000000',
            shadowOpacity: .4,
            shadowOffset: {
                width: 0,
                height: 1
            }


    }, notificationText: {
        marginLeft:40,
        fontFamily: "Montserrat-Bold",
        fontSize: 15.5,
        color: 'white'
    },

     profilepic: {
        top:102,
        marginLeft:15,
        width: 50,
        height: 50,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 0
    },
    
    timeText: {
        marginLeft:-142,
        fontFamily: "Montserrat",
        fontSize: 15.5,
        color: 'white'
    }

    
    
})