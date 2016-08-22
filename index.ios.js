/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
	TextInput,
	TouchableOpacity,
  View
} from 'react-native';
import { firebaseApp } from './src/firebase';

class ArizeApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: ''
		};
	}

  render() {
    return (
      <View style={styles.container}>
				<TextInput
					style={{height: 40, padding: 20px, border; 1px solid #ddd}}
          placeholder='Type here to translate!'
          onChangeText={(text) => this.setState({text})}
				/>
				<TouchableOpacity onPress={this._handleSubmit.bind(this)}>
						<Text>{'Let\'s Go'.toUpperCase()}</Text>
				</TouchableOpacity>
      </View>
    );
  }

	_handleSubmit () {
		firebaseApp.database().ref().set({
			text: this.state.text
		})
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ArizeApp', () => ArizeApp);
