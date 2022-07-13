import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { Avatar } from 'react-native-paper';
import Styles from './Styles';
import { AntDesign, FontAwesome, Entypo } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const Post = (props) => {

  const { post, viewable, navigation, animate } = props
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [fade, setFade] = useState(0.1)
  React.useEffect(() => {
    if (viewable) {
      if (viewable.length) {
        if (viewable[0].id === post.id) {
          // video.current.playAsync();
        } else { video.current.pauseAsync(); }
      }
    }
  }, [viewable]);

  React.useEffect(() => {
    if (animate) {
      setFade(0.8)
    } else {
      setFade(1)
    }
  }, [animate]);
  return (
    <View style={Styles.container}>

      <TouchableWithoutFeedback onPress={() => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync();

      }
      }>
        <View intesity={10} tint="light" style={{ height: Dimensions.get('window').height - 72 }}>

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

          <View style={{ ...Styles.uiContainer, opacity: fade }}>
            <View style={Styles.rightContainer}>
              <TouchableOpacity >
                <AntDesign name="like1" size={35} color={post.isLiked ? 'tomato' : 'white'} />
                < Text style={Styles.iconText} > {post.likes}</Text >
              </TouchableOpacity >
              <TouchableOpacity onPress={() => navigation.navigate('Comments', { post: post })}>
                <FontAwesome name="comments" size={35} color="white" />
                <Text style={Styles.iconText}>{post.comments.count}</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo name="share" size={35} color={post.isShared ? 'tomato' : 'white'} />
                <Text style={Styles.iconText}>{post.shares}</Text>
              </TouchableOpacity>

            </View >

            <View>
              <Text style={Styles.handle}>@{post.user.username}</Text>
              <Text style={Styles.description}>{post.description}</Text>
              <View style={{ alignSelf: 'flex-end', position: 'absolute', paddingRight: 8 }}>
                <TouchableOpacity style={{ borderColor: '#fff', borderRadius: 25, borderWidth: 1 }}>
                  <Avatar.Image size={35} source={require('../../assets/profile.jpg')} />
                </TouchableOpacity>
              </View>
            </View>
          </View >
        </View >
      </TouchableWithoutFeedback >

    </View >
  )
}
export default Post