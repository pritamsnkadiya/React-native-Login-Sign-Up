
import React, {Component} from 'react';
import {Avatar, Card, Title, Paragraph } from 'react-native-paper';
import {Platform,Button, ScrollView,StyleSheet, TextInput,Text, View} from 'react-native';

export default class Login extends Component {
  render() {
    return (

        <ScrollView 
              style={{padding: 20}}>
                  <Text 
                      style={{fontSize: 27,textAlign:'center'}}>
                      Login
                  </Text>
                
                <TextInput placeholder='Username' />
                
                <TextInput placeholder='Password' />
                
                <View style={{margin:30}} />
               
               <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('Home')}/>
                    <View style={{margin:30}} />
                <Button
                    title="Craete a new account !"
                    onPress={() => this.props.navigation.navigate('Signup')}/>
                  </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
 container_button: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

});
