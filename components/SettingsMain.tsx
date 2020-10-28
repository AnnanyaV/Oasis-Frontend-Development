import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SettingsMain(props) {
    return(
        <TouchableOpacity>
        <View style = {styles.settingsMainButton}>
        <AntDesign style={styles.close} name="closecircle" size={24} color="white" />
            <Text style = {styles.settingsText}>{props.title}</Text>
            {/* <AntDesign style={styles.line} name="minus" size={24} color="white" /> */}
            <Entypo style={styles.lock} name="lock" size={24} color="white" />
            <Text style = {styles.f1}>{props.f1}</Text>
            <FontAwesome style={styles.image} name="image" size={24} color="white" />
            <Text style = {styles.f2}>{props.f2}</Text>
            <MaterialIcons style={styles.email} name="email" size={24} color="aquamarine" />
            <Text style = {styles.f3}>{props.f3}</Text>
            <Entypo style={styles.logout} name="log-out" size={24} color="white" />
            <Text style = {styles.f4}>{props.f4}</Text>
        </View>

    
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    settingsMainButton: {
        justifyContent: 'center',
        alignItems: 'center',

            width: 420,
            height: 350,
            top: 450,
            marginTop: -55,
            backgroundColor: '#7a6870',
            opacity: .6,
            borderTopLeftRadius: 40,
            borderTopRightRadius:40,
            shadowColor: '#000000',
            shadowOpacity: .4,
            shadowOffset: {
                width: 0,
                height: 1
            }


    }, settingsText: {
        top:-70,
        fontFamily: "Montserrat-Bold",
        fontSize: 21.5,
        color: 'white',
        alignSelf:'center',
    },
    f1:{
        top:-50,
        fontFamily: "Montserrat",
        fontSize: 15.5,
        color: 'white',
        right:70,

    },
    lock:{
        left:-160,
        top:-31,
        fontSize:15,
    },
    image:{
        left:-160,
        top:-35,
        fontSize:15,
    },
    email:{
        left:-160,
        top:-35,
        fontSize:15,
        color:"white",
    },
    logout:{
        left:-160,
        top:-35,
        fontSize:15,
        color:"aquamarine",
    },
    close: {
        left:180,
        top:-70,
    },
    f2:{
        top:-50,
        fontFamily: "Montserrat",
        fontSize: 15.5,
        color: 'white',
        right:45,

    },
    f3:{
        top:-50,
        fontFamily: "Montserrat",
        fontSize: 15.5,
        color: 'white',
        right: 85,

    },
    f4:{
        top:-56,
        fontFamily: "Montserrat",
        fontSize: 15.5,
        color: 'aquamarine',
        right: 105,

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