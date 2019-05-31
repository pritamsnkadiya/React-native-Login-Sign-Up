import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from './screens/Login';
import Signup from './screens/Signup';
import Home from './screens/Home';
import Friends from './screens/Friends';

  const AppNavigator = createStackNavigator({

  	Login: 
    { 
    	screen: Login,
    	navigationOptions: {
      		header: null,
    	},
    },
    Signup: 
    { 
    	screen: Signup
    },
  	Home: 
    { 
    	screen: Home
    },
    Friends: 
    { 
    	screen: Friends
    },

  });

  export default createAppContainer(AppNavigator);