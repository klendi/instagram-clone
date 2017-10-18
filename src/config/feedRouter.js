import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Feed from '../components/screens/feed/feed.js';
import Notifications from '../components/screens/notifications/notifications.js';
import Profile from '../components/screens/profile/profile.js';
import Search from '../components/screens/search/search.js';
import Photos from '../components/screens/photos/photos.js';

export const FTabs = TabNavigator({
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
    screen: Photos,
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
  showIcons:true,
  animationEnabled: false,
  tabBarOptions: {
    activeTintColor: '#000',
    inactiveTintColor: '#616161',
    style: {
      backgroundColor: '#eeeeee',
      padding: 3,
    },
    indicatorStyle: {
      backgroundColor: '#616161',
      height: 0,
    },
    tabStyle: {
      padding: 10,
      backgroundColor: '#eeeeee',
    }
  },
});