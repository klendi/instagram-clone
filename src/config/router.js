import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import FeedTabs from '../components/screens/feed/feedTab.js';
import Messages from '../components/screens/messages/messages.js';
import Profile from '../components/screens/profile/profile.js';
import Camera from '../components/screens/camera/camera.js';



export const Tabs = TabNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: ({tintColor}) => (<Icon name="ios-camera-outline" size={30} color={tintColor} />),
    },
  },
  FeedTabs: {
    screen: FeedTabs,
     navigationOptions: {
      tabBarVisible: false,
      title: 'INSTAGRAM',
     },
  },
  Messages: {
    screen: Messages,
    navigationOptions: {
      tabBarVisible: false,
      tabBarLabel: ({tintColor}) => (<Icon name="ios-send-outline" size={30} color={tintColor} />),
     },
  },
}, 
{
  initialRouteName: 'FeedTabs',
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#000',
    style: {
      backgroundColor: '#f5f5f5',
    },
    indicatorStyle: {
      backgroundColor: '#888',
      height: 5,
    },
    labelStyle: {
      color: '#000'
    },
    tabStyle: {
      padding: 10,
    }
  },
});


export const Root = StackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: {

    },
  },
  Tabs: {
    screen: Tabs,
    navigationOptions: {

    },
  },
  Messages: {
    screen: Messages,
    navigationOptions: {

    }
  },
},
{
  mode: 'modal',
  headerMode: 'none',
  initialRouteName: 'Tabs',
});