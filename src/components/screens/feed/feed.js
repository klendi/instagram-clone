import React, { Component } from 'react';
import { StyleSheet, Text, View, 
	Image, 
	TouchableOpacity, 
	TouchableNativeFeedback, 
	FlatList,
	ScrollView  } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Messages from '../messages/messages.js';
import Camera from '../camera/camera.js';
import FeedPhoto from '../../components/feedPhoto.js';
import Stories from '../../components/stories.js';


export default class Feed extends Component {

	constructor(props) {
		super(props);
	}

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
	    		
	    		<TouchableOpacity style={styles.cameraSectionBtn}
	    		>
	    			<Icon name="ios-camera-outline" size={40} color="#000"/>
		    	</TouchableOpacity>
	    		
	    		<Text style={styles.headerText}>Instagram</Text>

	    		<TouchableOpacity style={styles.messagesSectionBtn}
	    		onPress={() => this.props.navigation.navigate(Messages)}>
	    			<Icon name="ios-paper-plane-outline" size={35} color="#000" />
		    	</TouchableOpacity>
    		</View>
    		<View style={styles.feeds}>
    			<ScrollView style={{flex:1}}>
    				<Text style={{fontSize: 16, marginLeft: 10, marginBottom: 10}}>Stories</Text>
    				
    				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    					<Stories />
    				</ScrollView>
    				
    				<FeedPhoto />
    				<FeedPhoto />
    				<FeedPhoto />

    			</ScrollView>
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
		backgroundColor: '#f5f5f5',
		paddingTop: 7,
		paddingBottom: 7,
		shadowColor: '#000',
		width: '100%',
    	shadowOffset: { width: 0, height: -50 },
    	shadowOpacity: 0.8,
    	shadowRadius: 0,
    	elevation: 3.5,
    	flexDirection: 'row',
    	justifyContent: 'space-between',
    	position: 'absolute',
    	zIndex: 99,
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
	},
	messagesSectionBtn: {
		justifyContent: 'flex-end',
		marginRight: 10,
	},
	cameraSectionBtn: {
		alignItems: 'flex-start',
		marginLeft: 10,
	},
	feeds: {
		flex:2,
		marginTop: 65,
	}
})