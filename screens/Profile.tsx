import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VisualPostButton from '../components/VisualPostButton';
import AudioPostButton from '../components/AudioPostButton'


export default function Profile() {
    return (
        <View>
            <LinearGradient 
            colors={['#414066', '#91BDC0', '#91BDC0']}
            locations = {[0, 0.9, 1]}
            start = {{ x: 0, y: 0 }}
            end = {{ x: 1, y: 1 }}>
                <View style = {styles.background}>
                        <Text style = {styles.postText}>Profile Page</Text>                     
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({

    background: {
        width: '100%',
        height: '100%',
        flexWrap: 'wrap',

        //background: linear-gradient(155.53deg, rgba(65, 64, 102, 0.66) 10.63%, #91BDC0 93.38%);
    },
    postText: {

        position: 'absolute',
        width: 344,
        height: 127,
        left: 20,
        top: 107,
        fontFamily: 'Montserrat-Bold',
        fontSize: 31,
        color: '#FFFFFF',
    }, 


})

