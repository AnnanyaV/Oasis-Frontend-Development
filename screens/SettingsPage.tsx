import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import VisualPostButton from '../components/VisualPostButton';
import Settings from '../components/Settings';
import SettingsMain from '../components/SettingsMain';


export default function NotificationPage() {
    return (
      <View>
          
      <LinearGradient 
      colors={['#736994', '#b06e77', '#a36d7a']}
      locations = {[0, 0.9, 1]}
      start = {{ x: 0, y: 0 }}
      end = {{ x: 1, y: 1 }}>
          <Image style = {styles.profilepic} source={require('../assets/profile.jpg')} />
          <View style = {styles.background}>
          <MaterialIcons style={styles.iconSettings} name="settings" size={24} color="aquamarine" />
          <MaterialIcons style={styles.iconEdit} name="edit" size={24} color="white" />
                  <Settings
                      title = {"Add/Edit Greeting"}
                  ></Settings>
                  <SettingsMain
                  title = {"Settings"}
                  f1 ={"Change Password"}
                  f2 ={"Edit background Image"}
                  f3={"Change Email"}
                  f4={"Logout"}
                  >
                  </SettingsMain>
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
    profilepic:{
        top:90,
        marginLeft:155,
        width: 100,
        height: 100,
        alignSelf: 'stretch',
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 0

    },
    image:{
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"

    },

    iconSettings:{
        top:-20,
        marginLeft:350,
        fontSize:30,

    },
    iconEdit:{
        top:-50,
        marginLeft:305,
        fontSize:35,

    }


})