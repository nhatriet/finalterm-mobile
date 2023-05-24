import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Drawer from 'react-native-drawer';
import { NavigationContainer } from '@react-navigation/native';
import Menu from './Menu';
import Shop from './Shop/Shop';

export default class Main extends Component {
  componentDidMount() {
      getToken()
      .then(token => checkLogin(token))
      .then(res => global.onSignIn(res.user))
      .catch(err => console.log('LOI CHECK LOGIN', err));
  }
  closeControlPanel = () => {
      this.drawer.close();
  };
  openControlPanel = () => {
      this.drawer.open();
  };
  render() {
      const { navigator } = this.props;
      return (
          <Drawer
              ref={(ref) => { this.drawer = ref; }}
              content={<Menu navigator={navigator} />}
              openDrawerOffset={0.4}
              tapToClose
          >
              <Shop open={this.openControlPanel.bind(this)} />
          </Drawer>
      );
  }
}
// =============================
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
