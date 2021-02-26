import React, { Component } from 'react';
import { Text, View, StyleSheet , StatusBar } from 'react-native';
import ModernHeader from "react-native-modern-header";
import { Avatar } from 'react-native-paper';
import Styles from './Styles'

const HeaderAvatar = () => {
    return (
        <Avatar.Image  size={40} source={require('../../assets/profile.jpg')}/>
    )
}

class Header extends Component {
    render() {
        return (
            <View style={Styles.appBar}>
            <StatusBar hidden/>
            <ModernHeader backgroundColor='#fff' rightIconColor='#7F58FF' rightIconName="magnifying-glass" titleStyle={style.titleStyle} title="StikTik" leftIconComponent={<HeaderAvatar/>}/>
            </View>
        )

    }
}


const style = StyleSheet.create({
    titleStyle : {fontWeight: 'bold' , fontSize: 20, color : 'grey'}


})
export default Header