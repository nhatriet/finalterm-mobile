import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
  } from "react-navigation";
  import Main from "./Main/Main";
  import SignIn from "./Authentication/SignIn";

  
  const HomeStack = createStackNavigator({
    SignIn: { screen: SignIn },
    Main: { screen: Main }
  });
  
  const SettingsStack = createStackNavigator({
    Settings: { screen: SettingsScreen },
    Main: { screen: Main }
  });
  
  const AppNavigator = createBottomTabNavigator(
    {
      SignIn: {
        screen: HomeStack,
        navigationOptions: {
          title: "SignIn"
        }
      },
      Setting: {
        screen: SettingsStack,
        navigationOptions: {
          title: "Setting"
        }
      }
    }
  );
  
  export default createAppContainer(AppNavigator);
  
  