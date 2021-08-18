import React, { Component } from 'react';
import { View } from 'react-native';
import Post from '../../Componants/Post'
import Styles from './Styles'

const  Home = ({ navigation })  => {
  const post1 = {
    id: 'p1',
    user: {
      id: 'u1',
      username : 'xeighty6',
      userImage : 'ggg.jpg'
    },
    description : 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
    likes : 300,
    isLiked : true,
    isShared : true,
    comments : 200,
    shares : 50,
    videoUrl : 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',

  }

    return (
      
      <View >
        <Post post={post1}/>
      </View>
    );
    }

export default Home




