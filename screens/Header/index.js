import React, { Component } from 'react';
import { Text, View, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import ModernHeader from "react-native-modern-header";
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles'

const HeaderAvatar = (props) => {

    return (
        <TouchableOpacity onPress={props.handler}>
            <Avatar.Image size={40} source={require('../../assets/profile.jpg')} />
        </TouchableOpacity>

    )
}

class Header extends Component {
    render() {
        return (
            <SafeAreaView style={Styles.appBar}>
                <StatusBar barStyle="dark-content"></StatusBar>
                <ModernHeader backgroundColor='#fff' rightIconColor='#7F58FF' rightIconName="magnifying-glass" titleStyle={style.titleStyle} title="StikTik" leftIconComponent={<HeaderAvatar handler={this.props.handler} />} />
            </SafeAreaView>
        )

    }
}


const style = StyleSheet.create({
    titleStyle: { fontWeight: 'bold', fontSize: 20, color: 'grey' }


})
export default Header