import React, { useState, useRef } from 'react';
import { View, FlatList, Dimensions, StatusBar } from 'react-native';
import Post from '../../Componants/Post'
import posts from '../../Componants/data/posts'

const Home = ({ navigation }) => {
  const [Viewable, SetViewable] = React.useState([]);
  const ref = React.useRef(null);
  const [animate, setAnimate] = useState(false)
  const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 80 });

  //no idea how this works
  const onViewRef = React.useRef((viewableItems) => {
    let viewableItemsList = [];
    for (var i = 0; i < viewableItems.viewableItems.length; i++) {
      viewableItemsList.push(viewableItems.viewableItems[i].item);
    }
    SetViewable(viewableItemsList);
  });

  //render
  return (
    <View  >
      <FlatList showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').height - StatusBar.currentHeight}
        data={posts}
        ref={ref}
        viewabilityConfig={viewConfigRef.current}
        onScrollBeginDrag={() => { setAnimate(true) }}
        onScrollEndDrag={() => { setAnimate(false) }}
        onViewableItemsChanged={onViewRef.current}
        style={{ height: Dimensions.get('window').height - StatusBar.currentHeight }}
        renderItem={({ item }) => <Post navigation={navigation} post={item} animate={animate} viewable={Viewable} />}></FlatList>

    </View >
  );
}

export default Home




