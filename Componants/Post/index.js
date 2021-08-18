import React, { Component, useState } from 'react';
import { View, StyleSheet, Text , TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Avatar } from 'react-native-paper';
import Styles from './Styles';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';

const Post = (props) => {
    const {post} = props
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <View style={Styles.container}>
            <TouchableWithoutFeedback onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }>
              <Video
                style={Styles.Video}
                ref={video}
                rate={1.0}

                resizeMode='stretch'
                source={{
                  uri: post.videoUrl,
                }}
                onPlaybackStatusUpdate={status => setStatus(() => status)}
              />
            </TouchableWithoutFeedback>  
                <View style={Styles.uiContainer}>
                    <View style={Styles.rightContainer}>
                      <TouchableOpacity >
                          <AntDesign name="like1" size={35} color={post.isLiked ? 'tomato' : 'white'}/>
                          <Text style={Styles.iconText}>{post.likes}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                           <FontAwesome name="comments" size={35} color="white" />
                           <Text style={Styles.iconText}>{post.comments}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity>
                          <Entypo name="share" size={35} color={post.isShared ? 'tomato' : 'white'} />
                          <Text style={Styles.iconText}>{post.shares}</Text>
                      </TouchableOpacity>
                      
                    </View>
                    
                    <View>
                        <Text style={Styles.handle}>@{post.user.username}</Text>
                        <Text style={Styles.description}>{post.description}</Text>
                        <View style={{alignSelf:'flex-end',position:'absolute', paddingRight:8}}>
                        <TouchableOpacity style={{borderColor:'#fff' , borderRadius:25, borderWidth:1}}>
                            <Avatar.Image  size={35} source={require('../../assets/profile.jpg')}/>
                        </TouchableOpacity>
                      </View>
                    </View>
                </View>
          </View>
    )
}

export default Post