/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/components/App';
import {name as appName} from './app.json';
// import './assets/fonts/Poppins-Bold';
// import './assets/fonts/Poppins-Medium';
// import './assets/fonts/Poppins-Italic';
// import './assets/fonts/Poppins-Regular';


AppRegistry.registerComponent(appName, () => App);
