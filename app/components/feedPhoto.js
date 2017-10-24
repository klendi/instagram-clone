import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TouchableNativeFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class FeedPhoto extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<View style={styles.container}>
				<View style={styles.owner}>
					
					<Image style={styles.ownerThumb} source={{uri: this.props.thumbnail}} />
					<TouchableOpacity>
						<Text style={styles.ownerText}>{this.props.username.substring(0,10)}</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.menuIcon}>...</Text>
					</TouchableOpacity>
				</View>
				<Image style={styles.image} source={{uri: this.props.pic}} />

				<View style={styles.likeAndCommentsSect}>
					<View style={styles.like}>
						<TouchableOpacity>
							<Icon name={'ios-heart-outline'} size={35} color='#000' />
						</TouchableOpacity>
					</View>
					
					<View style={styles.comment} >
						<TouchableOpacity >
							<Icon name={'ios-chatbubbles-outline'} size={35} color='#000' />
						</TouchableOpacity>
					</View>
					
					<View style={styles.share}>
						<TouchableOpacity>
							<Icon name={'ios-send-outline'} size={40} color='#000' />
						</TouchableOpacity>
					</View>
					
					<View style={styles.save}>
						<TouchableOpacity>
							<Icon name={'ios-bookmark-outline'} size={35} color='#000' />
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<TouchableOpacity>
						<Text style={styles.likesNum}>150M likes</Text>
					</TouchableOpacity>
					<View style={styles.commentSect}>
						<View style={styles.commentContent}>
							<TouchableOpacity>
								<Text style={styles.comentUser}>{this.props.username.substring(0,10)}</Text>
							</TouchableOpacity>
							<Text style={{marginLeft: 5, marginTop: 1.5}}>Hello World</Text>
						</View>
						<TouchableOpacity>
							<Text style={styles.viewAllComments}>View all 20 comments</Text>
						</TouchableOpacity>
						<Text style={{marginLeft:10, fontSize: 13, color: '#757575'}}>2 hours ago</Text>
					</View>
				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		flex:1,
		marginBottom: 30
	},
	image: {
		height: 300,
		width: '100%',
		alignSelf: 'center',
	},
	owner: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		width: '100%',
		height:55,
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	ownerText: {
		fontSize: 19,
		marginRight: 220,
	},
	ownerThumb: {
		height: 33,
		width: 33,
		borderRadius: 35,
		marginLeft: 10,
	},
	menuIcon: {
		fontSize: 30,
		marginRight: 0,
		transform: [{ rotate: '90deg'}],
	},
	likeAndCommentsSect: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		marginLeft: 10,
		marginTop: 8,
	},
	like: {
		marginLeft: 8,
	},
	comment: {
		marginLeft: 22,
	},
	share: {
		marginLeft: 22,
	},
	save: {
		marginLeft: 235,
	},
	commentSect: {
		marginTop: 3,
	},
	comentUser: {
		fontWeight: 'bold',
		fontSize: 16
	},
	commentContent: {
		marginLeft: 10,
		flexDirection: 'row',
	},
	viewAllComments: {
		marginTop: 5,
		marginLeft: 10,
		fontSize: 15,
		color: '#757575'
	},
	likesNum: {
		marginLeft: 12,
		fontSize: 17,
		fontWeight: 'bold',
	},
});