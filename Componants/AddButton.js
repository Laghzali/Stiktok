import React from 'react';
import {View ,Text, StyleSheet, TouchableHighlight, Animated} from 'react-native'
import { Entypo } from '@expo/vector-icons'; 


class AddButton extends React.Component {
    buttonSize = new Animated.Value(1)
    pressHandler = () => {
        Animated.sequence([
            Animated.timing(this.buttonSize, {
                toValue: 0.95,
                duration : 200,
                useNativeDriver: true,
            }),
            Animated.timing(this.buttonSize,{
                toValue:1,
                useNativeDriver: true,

            }),
        ]).start()
    }
    render() {
        const sizeStyle = {
            transform: [{scale : this.buttonSize}]
        }
        return(
        <View style={{alignItems:'center',position:'absolute'}}>
            <Animated.View style={[Styles.Button, sizeStyle]}>
                 <View>
                    <Entypo name="plus" size={40} color="white" />
                 </View>
          
            </Animated.View>
        </View>
        )
    }
}

const Styles = StyleSheet.create({
    Button : {
        backgroundColor:'#997aff',
        alignItems:'center',
        justifyContent :'center',
        height:65,
        width:65,
        borderRadius:36,
        position:'absolute',
        top:-50,
        shadowColor:'#7F58FF',
        shadowRadius:5,
        shadowOffset: {height: 10},
        borderWidth:3,
        borderColor:'#FFF',
        elevation: 5,


    }
})

export default AddButton

