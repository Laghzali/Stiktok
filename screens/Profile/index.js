import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from '../Header'
import Styles from './Styles'



const  Home = ({ navigation })  => {
  return (
      
    <View style={Styles.body}>
        <Header/>
    </View>
  );
  }
export default Home
