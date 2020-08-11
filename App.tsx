import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StatusBar, View } from "react-native";
// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PostOptions from './screens/PostOptions'
import LoadingPage from './screens/LoadingPage';
import Login from './screens/Login';
import Signup from './screens/Signup';


// const MainStack = createStackNavigator({
//   LoginScreen: {
//     screen: Login,
//     navigationOptions: {
//       headerShown: false,
//     }
//   },
//   SignupScreen: {
//     screen: Signup,
    // navigationOptions: {
    //   headerShown: false,
    // }
//   }
// });

// const App = createSwitchNavigator({
//   SplashScreen: {
//     screen: LoadingPage,
//     navigationOptions: {
//       headerShown: false,
//     },
//   },
//   MainStack: {
//     screen: MainStack,
//   },
// });


// export default createAppContainer(App);

// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Login></Login>
//       </SafeAreaProvider>
//     );
//   }
// }

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
