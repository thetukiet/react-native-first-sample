
import React, { Component } from 'react';
import LocalDbHelper from './localdbHelper';
import {
  Alert,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  View
} from 'react-native';

const styles = require('../styles.js');


var LoginView = React.createClass({
    getInitialState() {        
        return {
            username:'zzz',
            password:''
        };
	},

    render(){
        return (
            <View style={styles.container}>
                <Image source={require('../Assests/Images/user.png')} style={{width:80,height:80,marginTop:30}}/>
                <View style={[{marginTop:40}]}>
                    <TextInput 
                        placeholder='User Name' 
                        style={{width:220,fontSize:17}}
                        value={this.state.username}
                        onChangeText={username => this.setState({username})} 
                    />

                    <TextInput secureTextEntry={true} 
                        style={[styles.default,{width:220,fontSize:17}]} 
                        placeholder='Password'
                        value={this.state.password}
                        onChangeText={password => this.setState({password})} 
                    />
                    
                    <TouchableHighlight style={styles.topButton} onPress={this.checkAndLogin}>
                        <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>LogIn</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }, 

    checkAndLogin(){
        if(this.state.username != 'test'){
            Alert.alert( 
                'Login fail', 
                'User name not exist'
            );
            return;
        }

        if(this.state.password != '123'){
            Alert.alert( 
                'Login fail', 
                'Wrong password'
            );
            return;
        }

        this.props.navigator.push({id: 2,});
    }   
});

module.exports = LoginView;