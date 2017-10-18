import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Photos extends Component {
		constructor(props) {
		super(props);
	}

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
    			<Text style={styles.headerText}>Photos</Text>
    			<TouchableOpacity  onPress={() => this.props.navigation.navigate('Feed')} style={styles.back}>
		    		<Icon name="ios-arrow-round-back" size={55} color="#000"/>
		    	</TouchableOpacity>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
		backgroundColor: '#fff',
	},
	header: {
		backgroundColor: '#eeeeee',
		paddingTop: 10,
		paddingBottom: 10,
		// shadowColor: '#000',
  //   	shadowOffset: { width: 0, height: -50 },
  //   	shadowOpacity: 0.8,
  //   	shadowRadius: 0,
  //   	elevation: 3,
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
	},
	back: {
		right: 370,
		position: 'absolute'
	},
	backBtn: {
		height: 28,
		width:28,
	},
})