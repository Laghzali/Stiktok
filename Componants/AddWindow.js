import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableHighlight} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Divider } from 'react-native-elements';

const AddWindow = ({navigation}) => {
    return (
        <View style={Styles.container}>
            <View style={Styles.child}>
    
                <View style={Styles.HeaderContainer}>
                    <TouchableHighlight style={Styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableHighlight>
                        <Text style={Styles.TextHeader}>Create a tik</Text>
                    <TouchableHighlight style={Styles.postButton} onPress={() => navigation.goBack()}>
                        <Text style={Styles.Text}>Post</Text>
                    </TouchableHighlight>
    
                </View>
                <Divider style={{ backgroundColor: 'grey' }} />;
                
                <TouchableHighlight>
                    <View>

                        <Text style={Styles.Text}>
                        <View style={Styles.Textcontainer}>
                            <MaterialCommunityIcons name="upload" size={28} color="White" />
                            </View>
                             Upload</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight >
                    <View >
                        <Text style={Styles.Text}>
                            <View style={Styles.Textcontainer}>
                            <Feather name="radio" size={28} color="White" />
                            </View>
                            
                             Go Live</Text>
                    </View>
                </TouchableHighlight>
                

            </View>

            
        </View>
    )
}

const Styles = StyleSheet.create({
    postButton : {
        position:'absolute',
        right:20,
    },
    backButton : {
        marginTop:20,
        marginLeft:10
        
    },
    HeaderContainer : {
       
        marginBottom:10,
        flexDirection:'row',
        height:50,
    },
    Textcontainer : {
        backgroundColor:'#61605e',
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25,
        marginRight:10,

    },
    container : {
        justifyContent:'flex-end',
        flex:1,

    },
    child : {
        height:'100%',
        borderRadius:20,
        backgroundColor:'#343635'
    },
    TextHeader : {
        fontFamily:'sans-serif',
        marginTop:20,
        marginLeft:10,
        color:'white',
        fontWeight:'bold',
        fontSize:20,
    },
    Text : {
        margin:20,
        color:'white',
        fontSize:15,
        fontWeight:600,
        fontFamily:'sans-serif'
    }
})

export default AddWindow