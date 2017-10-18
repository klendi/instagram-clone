import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';

export default class Messages extends Component {
		constructor(props) {
		super(props);
	}

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
    			<TouchableOpacity  
    			onPress={() => this.props.navigation.navigate('FeedTabs')} 
    			style={styles.backButton}>
		    		<Icon name="ios-arrow-round-back" size={55} color="#000"/>
		    	</TouchableOpacity>
    			<Text style={styles.headerText}>Direct</Text>
    		</View>
    		<View style={styles.body}>
    		</View>
    		<View style={styles.footer}>
    		</View>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex:1,
	},
	header: {
		flex:1,
		backgroundColor: '#eeeeee',
		shadowColor: '#000',
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
		marginRight: '42.5%',
	},
	backButton: {
		justifyContent: 'flex-end',
		marginLeft: 10,
	},
	body: {
		flex:10,
		backgroundColor: '#fff',
	},
	footer: {
		backgroundColor:'#eee',
		flex: 1,
		width: '100%',
	}
})