import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FTabs } from '../../../config/feedRouter.js';

class FeedTabs extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
    	<View style={styles.ftabs}>
    		<FTabs style={styles.ftabs}/>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
	ftabs: {
		flex:1,
	}
})

export default FeedTabs;