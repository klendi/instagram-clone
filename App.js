import React, { Component } from 'react';
import { StyleSheet, Text, View, Navigator } from 'react-native';
import { Root } from './src/config/router.js';

class App extends Component {
  render() {
    return(
    	<View style={{flex:1, marginTop:24}}>
    		<Root />
    	</View>
    );
  }
}

export default App;