import React, { Component } from 'react';
import { 
    StatusBar,
    View,
    Text,
    SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import Authentication from './Authentication/Authentication';
import ChangeInfo from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
import SignIn from "./Authentication/SignIn";
import SignUp from './Authentication/SignUp';
// import refreshToken from '../api/refreshToken';

StatusBar.setHidden(true);

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// export default App;

export default class App extends Component {
  componentDidMount() {
      // setInterval(refreshToken, 30000);
  }
  render() {
      return (
          // <Navigator 
          //     initialRoute={{ name: 'MAIN' }}
          //     renderScene={(route, navigator) => {
          //         switch (route.name) {
          //             case 'MAIN': return <Main navigator={navigator} />;
          //             case 'CHANGE_INFO': return <ChangeInfo navigator={navigator} user={route.user} />;
          //             case 'AUTHENTICATION': return <Authentication navigator={navigator} />;
          //             default: return <OrderHistory navigator={navigator} />;
          //         }
          //     }}
          //     configureScene={route => {
          //         if (route.name === 'AUTHENTICATION') return Navigator.SceneConfigs.FloatFromRight;
          //         return Navigator.SceneConfigs.FloatFromLeft;
          //     }}
          // />


          <SignUp/>
      );
  }
}