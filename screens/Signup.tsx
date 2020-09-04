import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default class SignupPage extends React.Component {
  state={
    name:"",
    username:"",
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#726984', '#EE736A']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 600,
          }}
        />
        <Text style={styles.logo}>Welcome to Oasis</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Name" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({name:text})}/>
        </View>
        <View style={styles.underline}>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Username" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.underline}>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Email" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.underline}>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <View style={styles.underline}>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Already have an account?{"\n"}Log in</Text>
          {/* onPress={() => navigation.navigate(Signup)} */}
        </TouchableOpacity>

  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EE736A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:33,
    color:"#FFFFFF",
    marginBottom:40
  },
  inputView:{
    width:"80%",
    backgroundColor:"transparent",
    borderRadius:25,
    height:50,
    marginBottom:0,
    justifyContent:"center",
    padding:20
  },
  inputText:{
    height:50,
    color:"white",
    fontWeight:"bold",
  },
  forgot:{
    color:"black",
    fontSize:16,
    marginBottom:40
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#rgba(133, 255, 216, 0.9)",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:100,
    marginBottom:40
  },
  loginText:{
    fontWeight:"bold",
    color:"black",
    fontSize:18
  },
  signUpText:{
    color:"black",
    fontSize:16,
    textAlign: 'center'
  },
  underline:{
    height: 0,
    width: 260,
    borderTopColor: "white",
    borderTopWidth: 2,
    marginTop: 0,
    marginBottom:20
  }
});