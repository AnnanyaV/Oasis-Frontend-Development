import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, 
    View,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';

export default class PhotoGrid extends Component {
    render(){
        return (
            <ScrollView style={styles.scroll}>
                <View style ={styles.photoGrid}>

                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={require('../assets/images/profile-photo.jpg')} />
                    </View>

                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    photoGrid: {
        width: (Dimensions.get('window').width ),
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    photoWrap: {
        height: 250,
        width: (Dimensions.get('window').width / 2),
    },
    photo: {
        flex: 1,
        width: null, 
    },
    scroll: {
        top: -90,
    }

});
