import React, { Component } from 'react';
import {
    AppRegistry, 
    StyleSheet, 
    Text, 
    View, 
    Image,
    ImageBackground,
} from 'react-native';

import Bar       from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid';

export default class Header extends Component {
    render(){
        return (

            <ImageBackground style={styles.headerBackground} source={require('../assets/images/profile-coverphoto.jpg')}>  
                    <View style={styles.container}>
                        <Image style={styles.icons} source={require('../assets/images/settings-icon.png')} />
                        <Image style={styles.icons} source={require('../assets/images/edit-icon.png')} />
                    </View>
                <View style={styles.header}>
                    
                    <View style={styles.profilepicWrap}>
                        <Image style={styles.profilepic} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    
                    <Bar />
                    <PhotoGrid /> 
                    
                </View>

            </ImageBackground>

        );
    }
}

const styles = StyleSheet.create({
    headerBackground: {
        flex: 1,
    },
    container:{
        flexWrap:'wrap',
        flexDirection:'row-reverse',
    },
    icons: {
        height: 40,
        width: 40,
        alignSelf: 'flex-end',
        marginTop: 30,  
        marginHorizontal:5,     
    },
    header: {
        flex:0,
        alignItems: 'center',
    },
    profilepicWrap: {
        width: 140,
        top: 20,
        height: 140,
        marginBottom: 23
     },
    profilepic: {
        flex: 1,
        top: -60,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
    },
    
});
