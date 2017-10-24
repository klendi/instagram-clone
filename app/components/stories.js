import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Stories extends Component {
	constructor(props) {
		super(props);
	}

	renderSeparator = () => {
    return (
      <View
        style={{
        	marginLeft: 20,
        }}
      />
    );
  };

	render(){
		return(
			<View>
    			<Text style={{fontSize: 16, marginLeft: 10, marginBottom: 5, marginTop: 5}}>Stories</Text>
    			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginBottom: 15}}>
					<View style={styles.container}>
						<FlatList 
								data={this.props.data}
				        keyExtractor={(x, i) => i}
				        renderItem={({ item }) =>
									<View style={{marginLeft: 15}}>
										<Image source={{uri: item.picture.thumbnail}} style={styles.storie} />
										<Text style={styles.username}>{item.login.username.substring(0,10)}</Text>
									</View>
			          }
				        showsHorizontalScrollIndicator={false}
          			// removeClippedSubviews={false}
          			horizontal
          			ItemSeparatorComponent={this.renderSeparator}
						/>
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
	username: {
		alignSelf: 'center',
	},
});