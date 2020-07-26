import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VisualPostButton from '../components/VisualPostButton';
import AudioPostButton from '../components/AudioPostButton'


export default function PostOptions() {
    return (
        <View>
            <LinearGradient colors={['#91BDC0', '#91BDC0', '#91BDC0']}>
                <View style = {styles.background}>
                        <Text style = {styles.postText}>What would you like to post?</Text>

                        <View>
                        <VisualPostButton
                            title = {"Visual"}
                        ></VisualPostButton>
                        </View>

                        <AudioPostButton
                            title = {"Audio"}
                        ></AudioPostButton>
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

