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
    SignUp: { screen: SignUp},
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
      SignUp: {
        screen: SettingsStack,
        navigationOptions: {
          title: "SignUp"
        }
      }
    }
  );
  
  export default createAppContainer(AppNavigator);
  
  