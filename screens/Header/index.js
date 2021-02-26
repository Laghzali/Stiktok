import React, { Component } from 'react';
import { Text, View, StyleSheet , StatusBar } from 'react-native';
import ModernHeader from "react-native-modern-header";
import { Avatar } from 'react-native-paper';
import Styles from './Styles'

class Header extends Component {
    render() {
        return (
            <View style={Styles.appBar}>
            <StatusBar hidden/>
            <ModernHeader rightIconName="magnifying-glass" titleStyle={{fontWeight: 'bold' , fontSize: 20, color : 'grey'}} title="StikTik" leftIconComponent={<Avatar.Image style={{borderWidth :1, borderColor :'purple'}} size={40} source={require('../../assets/live.png')} />}/>
            </View>
        )

    }
}

export default Header