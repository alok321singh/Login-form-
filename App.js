import * as React from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import login from './Login';
import sign from './Signup';
import Splash from './Splash';

export default class App extends React.Component {

    render(){
      return ( 
      <AppContainer />
      );
    }


     }
 
    
     const RootStack = createStackNavigator(
      {
        Screen:Splash , 
        Login: login,
        Signup: sign,
          
      },
      {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        },
      },
      {
        initialRouteName: 'Screen',
      }
    );
    
    const AppContainer = createAppContainer(RootStack);