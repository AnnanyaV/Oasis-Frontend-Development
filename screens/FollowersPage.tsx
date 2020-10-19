import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Followers from '../components/Followers';
import NavBar from '../components/NavBar';
import { TextInput } from 'react-native-gesture-handler';
import {Ionicons} from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';



export default function NotificationPage() {
    return (
      <View>
      <LinearGradient 
      colors={['#736994', '#b06e77', '#a36d7a']}
      locations = {[0, 0.9, 1]}
      start = {{ x: 0, y: 0 }}
      end = {{ x: 1, y: 1 }}>
        <NavBar>

        </NavBar>
          <View style = {styles.background}>
          <AntDesign style={styles.arrow} name="arrowleft" />
                  <Text 
                  style = {styles.postText}>Followers
                  
                  </Text>
                  <TextInput
                  style={styles.searchButton}>
                      Search
                    </TextInput>
                    
                  <Followers
                      title = {"Jordan Gonzalez"}
                      
                  >
                      <AntDesign name="plus" size={24} color="black" />
                  </Followers>

                  <Followers
                      title = {"Elena Smith"}
                  ></Followers>

                  <Followers
                      title = {"Noah Tothe"}
                  ></Followers>

                   <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>

                <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>
                <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>
                  <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>
                  <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>
                  <Followers
                      title = {"Lexi Benjamin"}
                  ></Followers>
                  
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
        top: 40,
        left: 110,
        right: 20,
        marginLeft: 27,
        fontFamily: 'Montserrat-Bold',
        fontSize: 25,
        color: '#FFFFFF',
        
    }, 
    searchButton: {
            width: 380,
            height: 35,
            left: 10,
            top: 100,
            marginLeft: 20,
            marginTop: -50,
            backgroundColor: '#808080',
            padding:10,
            paddingLeft:30,
            borderRadius: 20,
            fontSize:20,
            // shadowColor: '#000000',
            // shadowOpacity: .2,
            // shadowOffset: {
            //     width: 0,
            //     height: 1
            // }
        },

        search: {
            fontSize:20,
            color:"white",
            top:160,
            marginLeft:20,
        },

        arrow:{
            top:70,
            left:0,
            fontSize:28,
            color:"white",
            marginLeft:20,
        }


})

