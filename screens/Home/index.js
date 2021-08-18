import React, { Component } from 'react';
import { View, FlatList , Dimensions } from 'react-native';
import Post from '../../Componants/Post'
import Styles from './Styles'
import posts from '../../Componants/data/posts'
const  Home = ({ navigation })  => {

    return (
      
      <View >
          <FlatList showsVerticalScrollIndicator={false} 
                    decelerationRate={'fast'} 
                    snapToAlignment={'start'} 
                    snapToInterval={Dimensions.get('window').height - 70} 
                    data={posts} 
                    renderItem={({item}) => <Post post={item}/>}></FlatList>
      </View>
    );
    }

export default Home




