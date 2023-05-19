/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  SafeAreaView,
  ImageBackground,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
// import signIn from '../../api/signIn';
// import global from '../global';

// import saveToken from '../../api/saveToken';
// import Icon from 'react-native-vector-icons/FontAwesome';

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  goToSignUp() {
    const {} = this.props;
    navigation.push ({ name: 'SIGN UP'})
  }
  onSignIn() {
    const {email, password} = this.state;
    signIn(email, password)
      .then(res => {
        global.onSignIn(res.user);
        this.props.goBackToMain();
        saveToken(res.token);
      })
      .catch(err => console.log(err));
  }
  
  render() {
    const {inputStyle, bigButton, buttonText} = styles;
        const {email, password} = this.state;
        const image = {uri: 'https://reactjs.org/logo-og.png'};
        return (
          <View style = {styles.container}>
            <Text style = {{fontSize: 30, color: 'black', fontWeight: 900}}>Hello.</Text>
            <Text style = {{fontSize: 16, color: 'black', paddingBottom: 10}}>Kindly enter your login credentials.</Text>

            {/* Login account ======================================================== */}
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email: "
              value={email}
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password: "
              value={password}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry
            />

            {/* Forgot password ======================================================== */}
            <View style = {{ marginTop: 10, marginBottom: 15, alignItems: 'center'}}>
              <TouchableOpacity>
                <Text style = {{color: '#707070', textAlign:'right'}}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            {/* Button login ======================================================== */}
            <TouchableOpacity style={styles.bigButton} onPress={() => this.props.navigation.navigate("Main")}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            {/* or connect ======================================================== */}
            <View style = {{paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <View style = {{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
                <Text> or connect with </Text>
                <View style = {{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
              </View>
            </View>

            {/* social network ========================================================  */}
            <View style ={styles.subcontainer}>
              <View style = {styles.bottom}>
                <TouchableOpacity style={styles.smallButton1} onPress={this.onSignIn.bind(this)}>
                  <Text style={{color: '#000', textAlign:'center', justifyContent: 'center', marginLeft: 30}}>Facebook</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.smallButton2} onPress={this.onSignIn.bind(this)}>
                  <Text style={{color: '#000', textAlign:'right', justifyContent: 'center', marginRight: 30}}>Google</Text>
                </TouchableOpacity>
              </View>
              
           

            </View>
            <View style = {{ alignItems: 'center', paddingTop: 50}}>
              <TouchableOpacity onPress = {this.goToSignUp.bind(this)}>
                <Text style = {{color: '#707070', textAlign:'right'}}>Don't have an acount yet? Register today!</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    padding: 28

  },
  inputStyle: {
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 100,
    borderColor: '#000',
    paddingLeft: 30,
  },
  bigButton: {
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    fontFamily: 'Avenir',
    color: '#fff',
    fontWeight: '700',
    fontSize: 16
  },
  // image: {
  //   flex: 1,
  //   justifyContent: 'center',
  // },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  subcontainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  smallButton1: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 20,
    
  },
  smallButton2: {
    height: 50,
    width: 150,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#fff',
    justifyContent: 'center',
    borderRadius: 20,
    
  }
});

// export default SignIn