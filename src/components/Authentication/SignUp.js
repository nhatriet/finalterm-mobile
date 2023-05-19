/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, 
    TextInput, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    Alert 
} from 'react-native';
// import register from '../../api/register';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        };
    }

    onSuccess() {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                { text: 'OK', onPress: this.props.gotoSignIn() }
            ],
            { cancelable: false }
        );
    }

    onFail() {
        Alert.alert(
            'Notice',
            'Email has been used by other',
            [
                { text: 'OK', onPress: () => this.removeEmail.bind(this) }
            ],
            { cancelable: false }
        );
    }

    removeEmail() {
        this.setState({ email: '' });
    }

    registerUser() {
        const { name, email, password, rePassword} = this.state;
        register(name, email, password, rePassword)
        .then(res => {
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
        });
    };

    onSignUp() {
        const {name, email, password, rePassword} = this.state;
        signUp(name, email, password, rePassword)
            .then(res => {
            // global.onSignUp(res.user);
            // this.props.goBackToMain();
            // saveToken(res.token);
            if (res === 'THANH_CONG') return this.onSuccess();
            this.onFail();
            })
            .catch(err => console.log(err));
    };


    render() {
        const { inputStyle, bigButton, buttonText } = styles;
        return (
            <View style = {styles.container}>
            <Text style = {{fontSize: 30, color: 'black', fontWeight: 900}}>Join us.</Text>
            <Text style = {{fontSize: 16, color: 'black', paddingBottom: 10}}>We are so excited to meet you! Sign up now to make the most out of Amour.</Text>

            {/* Sign up account ======================================================== */}
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your name: "
              value={this.state.name}
              onChangeText={text => this.setState({name: text})}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your email: "
              value={this.state.email}
              onChangeText={text => this.setState({email: text})}
            />
            <TextInput
              style={styles.inputStyle}
              placeholder="Enter your password: "
              value={this.state.password}
              onChangeText={text => this.setState({password: text})}
              secureTextEntry
            />
            <TextInput 
                style={styles.inputStyle} 
                placeholder="Re-enter your password: " 
                value={this.state.rePassword}
                secureTextEntry
                onChangeText={text => this.setState({ rePassword: text })}
            />

            {/* Button sign up ======================================================== */}
            <TouchableOpacity style={styles.bigButton} onPress={this.registerUser.bind(this)}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>

            {/* or sign up via ======================================================== */}
            <View style = {{paddingTop: 20, justifyContent: 'center', alignItems: 'center' }}>
              <View style = {{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 40}}>
                <View style = {{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
                <Text> or sign up via </Text>
                <View style = {{height: 1, width: '30%', backgroundColor: '#707070'}}></View>
              </View>
            </View>

            {/* social network ========================================================  */}
            <View style ={styles.subcontainer}>
              <View style = {styles.bottom}>
                <TouchableOpacity style={styles.smallButton1} onPress={this.onSignUp.bind(this)}>
                  <Text style={{color: '#000', textAlign:'center', justifyContent: 'center', marginLeft: 30}}>Facebook</Text>
                </TouchableOpacity>   

                <TouchableOpacity style={styles.smallButton2} onPress={this.onSignUp.bind(this)}>
                  <Text style={{color: '#000', textAlign:'right', justifyContent: 'center', marginRight: 30}}>Google</Text>
                </TouchableOpacity>
              </View>
              
           

            </View>
            <View style = {{ alignItems: 'center', paddingTop: 50}}>
              <TouchableOpacity onPress={this.registerUser.bind(this)}>
                <Text style = {{color: '#707070', textAlign:'right'}}>Already have an acount? Sign in now!</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
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