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
                    <Text style={styles.barBottom}>@tnwigwe</Text>
                    <Text style={styles.barBottom}>musician and non-profit ceo</Text>
                </View>
                <View style={styles.barItem}>
                    <Text style={styles.barTop}>    10      120    2,040 </Text>
                    <Text style={styles.barBottom}>post      following    followers</Text>
                </View>
                <View style={styles.odioBar}>
                    <Text style={styles.momentItem}>MOMENT</Text>
                    <Text style={styles.odioItem}>ODIO</Text>
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
        flexDirection: 'column',
        justifyContent: 'center',
        top:-60,
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
    odioBar:{
        flexDirection: 'row',
        padding: 18,
        flex:1,
        borderBottomColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 0,
    },
    odioItem:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
        paddingHorizontal: 95,
        marginLeft:-70,
        borderBottomColor: 'rgba(0,0,0,0)',
        borderBottomWidth: 78,
    },
    momentItem:{
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        padding: 10,
        paddingHorizontal: 95,
        marginLeft:-70,
        borderBottomColor: 'rgb(0,0,0)',
        borderBottomWidth: 78,
    },
    barBottom: {
        color: '#fff',
        fontSize: 14,  
    }

});
