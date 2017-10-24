import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableNativeFeedback, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Messages from '../screens/Messages/messages.js';
import Camera from '../screens/Camera/camera.js';

import Feed from '../screens/Feed/feed.js';
import Search from '../screens/Search/search.js';
import Photo from '../screens/Photo/photo.js';
import Notifications from '../screens/Notifications/notifications.js';
import Profile from '../screens/Profile/profile.js';

export const FeedTabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBarVisible: true,
      title: 'Feed',
      tabBarLabel: ({tintColor, focused}) => (<Icon name={focused ? 'ios-home' : 'ios-home-outline'} size={35} color={tintColor} />),
    },
  },
  Search: {
    screen: Search,
     navigationOptions: {
      tabBarVisible: true,
      title: 'Search',
      tabBarLabel: ({tintColor, focused}) => (<Icon name={focused ? 'ios-search' : 'ios-search-outline'} size={35} color={tintColor} />),
     },
  },
  Photos: {
    screen: Photo,
    navigationOptions: {
      tabBarVisible: true,
      tabBarLabel: ({tintColor, focused}) => (<Icon name={focused ? 'ios-add-circle' : 'ios-add-circle-outline'} size={35} color={tintColor} />),
     },
  },
  Notifications: {
    screen: Notifications,
    navigationOptions: {
      tabBarVisible: true,
      tabBarLabel: ({tintColor, focused}) => (<Icon name={focused ? 'ios-heart' : 'ios-heart-outline'} size={35} color={tintColor} />),
     },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarVisible: true,
      tabBarLabel: ({tintColor, focused}) => (<Icon name={focused ? 'ios-contact' : 'ios-contact-outline'} size={35} color={tintColor} />),
  },
},
}, 
{
  initialRouteName: 'Feed',
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  lazyLoad: true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#616161',
    style: {
      padding: 3,
      backgroundColor: '#fafafa',
      width: '100%',
      borderTopWidth: .5,
      borderTopColor: '#000',
    },
    indicatorStyle: {
      backgroundColor: '#fafafa',
      height: 0,
    },
    tabStyle: {
      backgroundColor: '#fafafa',
    }
  },
});

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
      tabBarLabel: 'Instagram',
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
      backgroundColor: '#000',
      height: 2,
    },
    labelStyle: {
      color: '#000',
      fontSize: 20,
    },
    tabStyle: {
      padding: 10,
    }
  },
});