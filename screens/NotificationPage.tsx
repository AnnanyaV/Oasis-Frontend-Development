import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VisualPostButton from '../components/VisualPostButton';
import Notification from '../components/Notification'


export default function NotificationPage() {
    return (
      <View>
      <LinearGradient 
      colors={['#736994', '#b06e77', '#a36d7a']}
      locations = {[0, 0.9, 1]}
      start = {{ x: 0, y: 0 }}
      end = {{ x: 1, y: 1 }}>
          <View style = {styles.background}>
                  <Text 
                  style = {styles.postText}>Notifications
                  
                  </Text>

                  <Notification
                      title = {"Jordan Gonzalez is now following you"}
                      time = {"15 minutes ago"}
                  ></Notification>

                  <Notification
                      title = {"Jordan Gonzalez is now following you"}
                      time = {"15 minutes ago"}
                  ></Notification>

                  <Notification
                      title = {"Jordan Gonzalez is now following you"}
                      time = {"17 minutes ago"}
                  ></Notification>

                   <Notification
                      title = {"Jordan Gonzalez is now following you"}
                      time = {"20 minutes ago"}
                  ></Notification>

                  
                  <Notification
                      title = {"Jordan Gonzalez is now following you"}
                      time = {"27 minutes ago"}
                  ></Notification>
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
        width: 344,
        height: 37,
        textAlign: "center",
        top: 87,
        left: 110,
        right: 20,
        marginLeft: 27,
        fontFamily: 'Montserrat-Bold',
        fontSize: 31,
        color: '#FFFFFF',
        
    }, 


})

