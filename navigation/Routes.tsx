import React from 'react';
import { NavigationContainer, Route } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from '../screens/Login';
import SignupPage from '../screens/Signup';
import { RouteParamList } from './RouteParameterList';

interface RouteProps {

}

export const Routes: React.FC<RouteProps> = ({}) => {
    const Stack = createStackNavigator<RouteParamList>();

    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginPage" screenOptions={{headerShown:false}}>
            <Stack.Screen name="LoginPage" component={LoginPage} />
            <Stack.Screen name="SignUpPage" component={SignupPage}/>
          </Stack.Navigator>
        </NavigationContainer>
    )


}