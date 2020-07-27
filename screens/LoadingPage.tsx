import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LoadingPage() {
    return (
       <View>
          <ImageBackground
          source = {require('../assets/background.png')}
          style = {styles.background}
          >

          <View style = {styles.oas}>
         <Text style = {styles.oas_text}>OAS</Text>
         </View>

         <Image source = {require('../assets/Vector.png')} style = {styles.note}></Image>

         <View style = {styles.s}>
            <Text style = {styles.s_text}>S</Text>
         </View>
          </ImageBackground>
       </View>
    )
}

const styles = StyleSheet.create({
   background: {
      height: '100%',
      width: '100%'
   },

   oas: {

      position: 'absolute',
      width: 136.71,
      height: 72.3,
      left: 88,
      top: 295.81,
   },

   oas_text: {
      fontFamily: 'Montserrat-EX',
      fontWeight: '900',
      fontSize: 59.1552,
      color: '#85FFD8',
   },

   note: {
      position: 'absolute',
      left: '52.5%',
      right: '25%',
      top: '31.9%',
      bottom: '50.78%',
   }, 
   
   s: {
      position: 'absolute',
      width: 39.44,
      height: 72.3,
      left: 248.38,
      top: 295.81,
   }, s_text: {
      fontFamily: 'Montserrat-EX',
      fontWeight: '900',
      fontSize: 59.1552,
      color: '#85FFD8',
   }

})

