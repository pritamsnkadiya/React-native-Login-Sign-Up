
import React, {Component} from 'react';
import {Button,Image,Text, View} from 'react-native';
import Page1 from "../viewPager/Page1";
import Page2 from "../viewPager/Page2";

export default class Home extends Component {
  render() {
    switch ('B') {
      case 'A':
        return (
            <Page1/>
        );
      case 'C':
        return (
            <Page2/>
        );
      default:
        return (
            <Page2/>
        );
    }
  }
}