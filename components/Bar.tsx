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
                    <Text style={styles.infoTop}>Tobe Nwigwe</Text>
                    <Text style={styles.infoBottom}>@tnwigwe</Text>
                    <Text style={styles.infoBottom}>musician and non-profit ceo</Text>
                </View>
                <View style={styles.barItem}>
                    <Text style={styles.statsTop}>    10           120        2,040 </Text>
                    <Text style={styles.statsBottom}>  Posts               Following             Followers</Text>
                </View>
                <View style={styles.odioBar}>
                    <Text style={styles.odioItem}>VISUAL</Text>
                    <Text style={styles.odioItem}>AUDIO</Text>
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
    statsTop: {
        color: '#cf6d66',
        fontSize: 28,
        fontWeight: 'bold',    
    },
    statsBottom: {
        color: '#fff',
        fontSize: 14,  
    },
    infoTop: {
        color: '#fff',
        fontSize: 25,
        fontFamily:"Montserrat-Bold",
       marginTop:-10,
    },
    infoBottom:{
        color: '#fff',
        fontSize: 18,
        marginTop:2,
        marginBottom:3,
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
        borderBottomColor: 'rgba(129,238,203,1)',
        borderBottomWidth: 4,
        width:188,
    },
    odioItem:{
        flex:1,
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
        padding: 10,
        paddingHorizontal: 165,
        marginLeft:-130,
        borderBottomColor: 'rgb(0,0,0)',
        borderBottomWidth: 78,
        marginTop:-10
    },
   

});
