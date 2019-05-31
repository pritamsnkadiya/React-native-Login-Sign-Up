
import React, {Component} from 'react';
import {Platform,Button, ScrollView,StyleSheet, TextInput,Text, View} from 'react-native';

export default class Signup extends React.Component {
  render() {
    return (
     
           <ScrollView 
              style={{padding: 20}}>
                  <Text 
                      style={{fontSize: 27,textAlign:'center'}}>
                      Signup
                  </Text>
                

                <TextInput placeholder='First name' />
                
                <TextInput placeholder='Last name' />

                <TextInput placeholder='Email id' />
                
                <TextInput placeholder='Contact number' />
                
                <TextInput placeholder='Alternate Contact number' />
                
                <View style={{margin:30}} />
               
               <Button
                    title="Submit"
                    onPress={() => this.props.navigation.navigate('Home')}/>
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
