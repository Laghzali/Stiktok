import React, { Component } from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Post from '../../Componants/Post'
import Styles from './Styles'
import posts from '../../Componants/data/posts'
const Home = ({ navigation }) => {

  return (

    <View >
      <FlatList showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').height - 72}
        data={posts}
        style={{ height: Dimensions.get('window').height - 72 }}
        renderItem={({ item }) => <Post shouldplay={true} post={item} />}></FlatList>
    </View>
  );
}

export default Home




