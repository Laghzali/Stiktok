import React, { Component } from 'react';
import { View, StyleSheet, Text , TouchableHighlight } from 'react-native';
import Styles from './Styles'
import Header from '../Header'
import Overlay from 'react-native-modal-overlay';
import { Entypo } from '@expo/vector-icons'; 


const  Home = ({ navigation })  => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding:10,height:10};
    return (
      
      <View style={Styles.Body}>
        
        <View style={{height:70}}><Header handler={showModal}/></View>
        <View style={{flex:1}}>
        <Overlay childrenWrapperStyle={styles.wrapper} containerStyle={styles.container} visible={visible} closeOnTouchOutside>
            <View>
              <TouchableHighlight underlayColor='none' style={Styles.backButton} onPress={hideModal}>
                <Entypo name="cross" size={24} color="tomato" />
              </TouchableHighlight>
            </View>
        </Overlay>
        </View>

      </View>
    );
    }

  styles = StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      
    },
    wrapper: {
      height:'80%',
      borderRadius:5,
      elevation:3
    }
  })
export default Home




