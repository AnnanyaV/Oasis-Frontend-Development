import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, 
    View
} from 'react-native';

import Header    from '../components/Header';
import Bar       from '../components/Bar';
import PhotoGrid from '../components/PhotoGrid';

export default class Profile extends Component {
    render(){
        return (
            <View style={styles.container}>
                
                <Header />
                <Bar />
                <PhotoGrid />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }

});

AppRegistry.registerComponent('Profile',() => Profile);