import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Camera extends Component {
	constructor(props) {
		super(props);
	}
	render(){
		return(
    	<View style={styles.container}>
    		<View style={styles.header}>
	    		<Text style={styles.headerText}>Camera</Text>
	    		<TouchableOpacity  onPress={() => this.props.navigation.navigate('FeedTabs')} style={styles.backButton}>
	    			<Icon name="ios-arrow-round-back" size={55} color="#000" style={{transform: [{ rotate: '180deg'}]}}/>
		    	</TouchableOpacity>
    		</View>
    		<View style={styles.body}>
    		</View>
    	</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1
	},
	header: {
		flex:1,
		backgroundColor: '#eeeeee',
		shadowColor: '#000',
		marginTop: .5,
		marginBottom: .5,
    	shadowOffset: { width: 0, height: -50 },
    	shadowOpacity: 0.8,
    	shadowRadius: 0,
    	elevation: 3.5,
    	flexDirection: 'row',
    	justifyContent: 'space-between',
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
		justifyContent: 'center',
		marginLeft: '37.5%',
	},
	backButton: {
		justifyContent: 'flex-end',
		marginRight: 10,
	},
	body: {
		flex:10,
		backgroundColor: 'white',
	},
});