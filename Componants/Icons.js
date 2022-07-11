import React, { Component } from 'react';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export class LiveIcon extends React.Component {
    render() {
        return (
            <Feather name="radio" size={28} color={this.props.tintcolor} />
        )
    }
}
export class VideoIcon extends React.Component {

    render() {
        return (

            <Entypo name="video-camera" size={22} color={this.props.tintcolor} />

        )
    }
}


export class ProfileIcon extends React.Component {
    render() {
        return (

            <AntDesign name="user" size={28} color={this.props.tintcolor} />
        )
    }
}
export class StoreIcon extends React.Component {
    render() {
        return (
            <MaterialIcons name="store" size={28} color={this.props.tintcolor} />)
    }
}

