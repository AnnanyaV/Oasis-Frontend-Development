import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
export default function Followers(props) {
    return(
        <TouchableOpacity>
        <View style = {styles.followersButton}>
            <Text style = {styles.followersText}>{props.title}</Text>
            
        </View>

        <Image style = {styles.profilepic} source={require('../assets/profile.jpg')} />
        <AntDesign name="plus" style={styles.plus}/>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    followersButton: {
        justifyContent: 'center',
        alignItems: "flex-start",

            width: 393,
            height: 60,
            left: 10,
            top: 170,

            marginTop: -55,
            backgroundColor: '#696969',
            opacity: .8,
            borderRadius: 20,
            shadowColor: '#000000',
            shadowOpacity: .2,
            shadowOffset: {
                width: 0,
                height: 1
            }


    }, followersText: {
        marginLeft:100,
        fontFamily: "Montserrat-Bold",
        fontSize: 19,
        color: 'white',
        textAlign:'left',
    },

     profilepic: {
        top:110,
        marginLeft:10,
        width: 85,
        height: 60,
        alignSelf: 'stretch',
        // borderRadius: 5,
        borderBottomLeftRadius:20,
        borderTopLeftRadius:20,
        borderColor: '#fff',
        borderWidth: 0
    },
    profilepicfollowers: {
        top:400,
        marginLeft:15,
        width: 50,
        height: 50,
        alignSelf: 'stretch',
        borderColor: '#fff',
        borderWidth: 0
    },

    searchButton: {
        justifyContent: 'center',
        alignItems: 'center',

            width: 380,
            height: 50,
            left: 10,
            top: 162,

            marginTop: -45,
            backgroundColor: '#a9a9a9',
            opacity: 1,
            borderRadius: 20,
            // shadowColor: '#000000',
            // shadowOpacity: .2,
            // shadowOffset: {
            //     width: 0,
            //     height: 1
            // }
        },

        searchText:{
        color: 'ghostwhite',
        },

        plus:{
            fontSize:24,
            color:"white",
            left:340,
            top:95,
            marginTop: -25,
        },

        
    
    
})