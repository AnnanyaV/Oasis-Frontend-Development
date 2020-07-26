import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  state={
    username:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome back, {"\n"} Name</Text>
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
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <View style={styles.underline}>
        </View>
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Not your account?{"\n"}Sign Up</Text>
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
    fontSize:40,
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