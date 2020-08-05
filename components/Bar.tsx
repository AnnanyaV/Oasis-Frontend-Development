import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, 
    View,
    Text
} from 'react-native';


export default class Bar extends Component {
    render(){
        return (
            <View style={styles.bar}>
                <View style={[styles.barItem, styles.barseparator]}>
                    <Text style={StyleSheet.barTop}>12K</Text>
                    <Text style={StyleSheet.barBottom}>Followers</Text>
                </View>

                <View style={styles.barItem}>
                    <Text style={StyleSheet.barTop}>322</Text>
                    <Text style={StyleSheet.barBottom}>Following</Text>
                </View>

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        borderTopColor: '#fff',
        borderTopWidth: 4,
        backgroundColor: '#ec2e4a',
        flexDirection: 'row'
    },
    barseparator: {
        borderRightWidth: 4
    },
    barTop: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    barItem: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    },
    barBottom: {
        color: '#000',
        fontSize: 14,
        fontWeight: 'bold',
    }

});
