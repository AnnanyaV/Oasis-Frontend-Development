import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet, 
    View,
    Text,
    Dimensions
} from 'react-native';


export default class Bar extends Component {
    render(){
        return (
            <View style={styles.bar}>
                

                <View style={styles.barItem}>
                    <Text style={styles.barTop}>TOBE NWIGWE</Text>
                    <Text style={styles.barBottom}>@MUSICIAN</Text>
                </View>

             

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    bar: {
        width:(Dimensions.get('window').width ) ,
        height: 250,
        borderRadius: 40,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: '#545d60',
        opacity: .975,
        flexDirection: 'row',
        justifyContent: 'center',
        top:-90,
    },
    barTop: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        
    },
    barItem: {
    flex: 0,
    padding: 18,
    alignItems: 'center',
    },
    barBottom: {
        color: '#fff',
        fontSize: 14,
        
        
    }

});
