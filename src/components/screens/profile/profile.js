import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Profile extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
    	<View style={styles.container}>
    		<View style={styles.header}>
	    		<Text style={styles.headerText}>@klendigocci</Text>
	    		<TouchableOpacity  onPress={() => this.props.navigation.navigate('Feed')} style={styles.back}>
	    			<Icon name="ios-arrow-round-back" size={55} style={{transform: [{ rotate: '180deg'}]}} color="#000"/>
		    	</TouchableOpacity>
    		</View>
    	</View>
		)
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
		shadowColor: '#000',
    	shadowOffset: { width: 0, height: -50 },
    	shadowOpacity: 0.8,
    	shadowRadius: 0,
    	elevation: 3,
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
	},
	back: {
		right: 370,
		position: 'absolute',
	},
	txt: {
		transform: [{ rotate: '90deg'}]
	}
})