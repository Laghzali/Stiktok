import React, { Component, createContext, useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { Avatar } from 'react-native-paper';
import Styles from './Styles';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Post = (props) => {
  const { post, viewable, navigation } = props
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  React.useEffect(() => {
    if (viewable) {
      if (viewable.length) {
        if (viewable[0].id === post.id) {
          // video.current.playAsync();
        } else { video.current.pauseAsync(); }
      }
    }
  }, [viewable]);
  return (
    <View style={Styles.container}>

      <TouchableWithoutFeedback onPress={() => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();

      }
      }>
        <View style={{ height: Dimensions.get('window').height - 72 }}>

          <Video

            style={Styles.Video}
            shouldPlay={false}
            ref={video}
            rate={1.0}
            resizeMode='cover'
            source={{
              uri: post.videoUrl,
            }}
            onPlaybackStatusUpdate={status => setStatus(() => status)}
          />

          <View style={Styles.uiContainer}>
            <View style={Styles.rightContainer}>
              <TouchableOpacity >
                <AntDesign name="like1" size={35} color={post.isLiked ? 'tomato' : 'white'} />
                <Text style={Styles.iconText}>{post.likes}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Comments', { post: post })}>
                <FontAwesome name="comments" size={35} color="white" />
                <Text style={Styles.iconText}>{post.comments.count}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="share" size={35} color={post.isShared ? 'tomato' : 'white'} />
                <Text style={Styles.iconText}>{post.shares}</Text>
              </TouchableOpacity>

            </View>

            <View>
              <Text style={Styles.handle}>@{post.user.username}</Text>
              <Text style={Styles.description}>{post.description}</Text>
              <View style={{ alignSelf: 'flex-end', position: 'absolute', paddingRight: 8 }}>
                <TouchableOpacity style={{ borderColor: '#fff', borderRadius: 25, borderWidth: 1 }}>
                  <Avatar.Image size={35} source={require('../../assets/profile.jpg')} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>

    </View>
  )
}
export default Post