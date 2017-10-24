import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Camera extends Component {
		constructor(props) {
		super(props);
	}

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
    			<Text style={styles.headerText}>Camera</Text>
    				<TouchableOpacity onPress={() => this.props.navigation.navigate("Feed")} style={styles.back}>
							<Icon style={{alignSelf: 'center', transform: [{ rotate: '180deg'}],}} name="ios-arrow-round-back" size={55} color="#000"/> 
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
		backgroundColor: '#fafafa',
		shadowColor: '#000',
    shadowOffset: { width: 0, height: -50 },
   	shadowOpacity: 0.8,
   	padding: 2,
   	shadowRadius: 0,
   	elevation: 3.5,
   	zIndex: 1,
  	flexDirection: 'row',
  	justifyContent: 'space-between',
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
	},
	back: {
		alignSelf: 'flex-end',
		height: 50,
		width: 50,
		borderRadius: 20,
		marginRight: 10,
	},
})