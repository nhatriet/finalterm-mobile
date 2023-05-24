import React, { Component } from 'react';
import { 
    StatusBar,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import Header from './Main/Shop/Header';
import SignIn from "./Authentication/SignIn";
import SignUp from './Authentication/SignUp';

StatusBar.setHidden(true);

const Stack = createNativeStackNavigator();


export default class App extends Component {
  componentDidMount() {
    //   setInterval(refreshToken, 30000);
  }
  render() {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Authentication' >
            <Stack.Screen name = 'Main' component = {Main} />
            <Stack.Screen name = 'ChangeInfo' component = {ChangeInfo} />
            <Stack.Screen name = 'Authentication' component = {Authentication} />
          </Stack.Navigator>
        </NavigationContainer>

          // <SignIn/>
      );
  }
}
