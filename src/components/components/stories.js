import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Stories extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<View>
    			<Text style={{fontSize: 16, marginLeft: 10, marginBottom: 10}}>Stories</Text>
    			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					<View style={styles.container}>
						<Image source={require('../../images/4.png')} style={styles.storie} />
						<Image source={require('../../images/m2.jpg')} style={styles.storie} />
						<Image source={require('../../images/m3.jpg')} style={styles.storie} />
						<Image source={require('../../images/m5.jpg')} style={styles.storie} />
						<Image source={require('../../images/p4.jpg')} style={styles.storie} />
						<Image source={require('../../images/m4.jpg')} style={styles.storie} />
						<Image source={require('../../images/m2.jpg')} style={styles.storie} />
						<Image source={require('../../images/m4.jpg')} style={styles.storie} />
						<Image source={require('../../images/p9.jpg')} style={styles.storie} />
						<FlatList
						horizontal={true}
						data={require('../../data/stories.json')}
						renderItem={({item}) => <Image style={styles.storie} source={item.thumb} />}/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
	},
	storie: {
		height: 70,
		width: 70,
		borderRadius: 70,
		marginLeft: 7,
		borderWidth: 3,
		borderColor: 'red',
	},
});