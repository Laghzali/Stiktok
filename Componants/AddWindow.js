import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableHighlight, TouchableOpacity} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import { Divider } from 'react-native-elements';
import { TextInput } from 'react-native-paper';

const AddWindow = ({navigation}) => {
const [text, setText] = React.useState('');

    return (
        <View style={Styles.container}>
            <View style={Styles.child}>
    
                <View style={Styles.HeaderContainer}>
                    <TouchableHighlight underlayColor='none' style={Styles.backButton} onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={24} color="white" />
                    </TouchableHighlight>
                        <Text style={Styles.TextHeader}>Create a tik</Text>
                    <TouchableHighlight underlayColor='tomato' style={Styles.postButton} onPress={() => console.log(text)}>
                        <Text style={Styles.Text}>Post</Text>
                    </TouchableHighlight>
    
                </View>
                <Divider style={{ backgroundColor: 'grey' }} />
            <View style={{marginBottom:10}}>
                <TextInput
                    value={text}
                    style={{margin:10,backgroundColor:'transparent'}}
                    underlineColor='grey'
                    multiline
                    placeholder={'Whats on your mind...?'}
                    maxLength={280}
                    onChangeText={text => setText(text)}
                />
            </View>
                <TouchableOpacity >
                    <View style={{marginBottom:50}}>

                            <Feather style={{position:'absolute', marginLeft:10}} name="upload" size={28} color="tomato" />
                            <Text style={{position:'absolute',color:'white',fontWeight:'bold', marginLeft:50,marginTop:5}}>Upload</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity >
                    <View style={{marginBottom:50}}>

                            <Feather style={{position:'absolute', marginLeft:10}} name="radio" size={28} color="tomato" />
                            <Text style={{position:'absolute',color:'white',fontWeight:'bold', marginLeft:50,marginTop:5}}>Live</Text>
                    </View>
                </TouchableOpacity>
                

            </View>

            
        </View>
    )
}

const Styles = StyleSheet.create({
    postButton : {
        padding:7,
        backgroundColor:'grey',
        borderRadius:5,
        alignItems:'center',
        top:15,
        width:60,
        height:35,
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
        backgroundColor:'#343635'
    },
    TextHeader : {
        fontFamily:'sans-serif',
        marginTop:20,
        marginLeft:10,
        color:'#fff',
        fontWeight:'bold',
        fontSize:20,
    },
    Text : {
        
        color:'#fff',
        fontSize:15,
        fontWeight:'600',
        fontFamily:'sans-serif'
    }
})

export default AddWindow