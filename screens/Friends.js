import React from 'react';
import {Platform,Button, ScrollView,StyleSheet, TextInput,Text, View} from 'react-native';

export default class Friends extends React.Component {
  render() {
    return (
       <ScrollView 
              style={{padding: 20}}>
                  <Text 
                      style={{fontSize: 27,textAlign:'center'}}>
                      Your Buddy
                  </Text>
                
                <View style={{margin:30}} />
               
               <Button
                    title="Go Login"
                    onPress={() => this.props.navigation.navigate('Login')}/>
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
