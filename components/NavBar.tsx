import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
export default function NavBar(props) {
    return(
        <TouchableOpacity>
        <View style = {styles.navbarButton}>
        <MaterialCommunityIcons name="home-variant-outline" style={styles.iconsHome} />
        <MaterialCommunityIcons name="earth" style={styles.iconsWorld} />
        <AntDesign name="pluscircle" style={styles.iconsPlus}/>
        <Fontisto name="bell" style={styles.iconsBell}/>
        <FontAwesome name="user-circle-o" style={styles.iconsProfile}/>
        </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
navbarButton:{
    

            width: 900,
            height: 60,
            
            top: 880,
            

            marginTop: -45,
            backgroundColor: '#7a6870',
            opacity: .4,
            
            shadowColor: '#000000',
            shadowOpacity: 1,
            shadowOffset: {
                width: 0,
                height: 1
            }
},
iconsHome:{
    top:10,
    left:20,
    fontSize:40,
    color:"white",
},
iconsWorld:{
    top:-30,
    fontSize:40,
    color:"white",
    left:55,
    marginLeft:30,
},
iconsPlus:{
    top:-68,
    fontSize:40,
    color:"white",
    left:130,
    marginLeft:30,
},
iconsBell:{
    top:-110,
    fontSize:40,
    color:"white",
    left:220,
    marginLeft:30,
},
iconsProfile:{
    top:-150,
    fontSize:40,
    color:"white",
    left:230,
    marginLeft:100,
}
})