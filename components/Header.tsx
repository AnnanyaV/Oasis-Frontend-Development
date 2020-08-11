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

                    <Image style={styles.icons} source={require('../assets/images/favicon.png')} />
                    <Image style={styles.icons} source={require('../assets/images/favicon.png')} />

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
    icons: {
        height: 45,
        width: 45,
        alignSelf: 'flex-end',
        marginLeft: -200,       
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
        top: -90,
        width: null,
        alignSelf: 'stretch',
        borderRadius: 100,
    },
    
});
