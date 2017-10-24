import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import Icon from 'react-native-vector-icons/Ionicons';
import FeedPhoto from '../../components/feedPhoto.js';
import Stories from '../../components/stories.js';

export default class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}


	componentWillMount() {
		this.fetchData();
	}

	fetchData = async () => {
		const response = await fetch("https://randomuser.me/api?results=10");
		const json = await response.json();
		this.setState({ data: json.results });
	}

  render() {
    return (
    	<View style={styles.container}>
    		<View style={styles.header}>
    				<View style={styles.cameraSectionBtn}>
	    			<TouchableOpacity onPress={() => this.props.navigation.navigate("Camera")}>
		    			<Icon name="ios-camera-outline" size={40} color="#000"/>
			    	</TouchableOpacity>
			    	</View>
		    		
		    		<Text style={styles.headerText}>Instagram</Text>
		    		
		    		<View style={styles.messagesSectionBtn}>
			    		<TouchableOpacity onPress={() => this.props.navigation.navigate("Messages")}>
			    			<Icon name="ios-paper-plane-outline" size={35} color="#000" />
				    	</TouchableOpacity>
			    	</View>
		    	</View>
    		
    		<View style={styles.feeds}>
    			<ScrollView style={{flex:1}}>
    				<Stories
    					data={this.state.data}
    				/>

    				<FlatList
			          data={this.state.data}
			          keyExtractor={(x, i) => i}
			          renderItem={({ item }) =>
			            <FeedPhoto
			            	pic={item.picture.large}
			            	thumbnail={item.picture.thumbnail}
			            	username={item.login.username}
			             />
			            }
			        />

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
		backgroundColor: '#fafafa',
		paddingTop: 5,
		paddingBottom: 5,
		shadowColor: '#000',
	  shadowOffset: { width: 0, height: -50 },
	 	shadowOpacity: 0.8,
	 	shadowRadius: 0,
	 	elevation: 3,
	 	zIndex: 1,
	  flexDirection: 'row',
	  justifyContent: 'space-between',
	},
	headerText: {
		fontSize: 25,
		alignSelf: 'center',
	},
	back: {
		alignSelf: 'flex-start',
	},
	backBtn: {
		height: 28,
		width:28,
	},
	feeds: {
		flex:2,
	},
	messagesSectionBtn: {
		marginRight: 10,
		marginTop: 3,
	},
	cameraSectionBtn: {
		marginLeft: 10,
	},

})