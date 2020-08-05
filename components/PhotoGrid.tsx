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
            <ScrollView>
                <View style ={styles.photoGrid}>

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
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    photoWrap: {
        margin: 2,
        height: 120,
        width: (Dimensions.get('window').width / 2) - 4,
    },
    photo: {
        flex: 1,
        width: null,
        alignSelf: 'stretch'
    }

});
