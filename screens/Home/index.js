import React, { Component } from 'react';
import { View, FlatList, Dimensions, SafeAreaView } from 'react-native';
import Post from '../../Componants/Post'
import posts from '../../Componants/data/posts'
const Home = ({ navigation }) => {

  const [Viewable, SetViewable] = React.useState([]);
  const ref = React.useRef(null);

  //no idea how this works
  const onViewRef = React.useRef((viewableItems) => {
    let viewableItemsList = [];
    for (var i = 0; i < viewableItems.viewableItems.length; i++) {
      viewableItemsList.push(viewableItems.viewableItems[i].item);
    }
    SetViewable(viewableItemsList);
  });
  const viewConfigRef = React.useRef({ itemVisiblePercentThreshold: 80 });

  return (

    <View >
      <FlatList showsVerticalScrollIndicator={false}
        decelerationRate={'fast'}
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').height - 72}
        data={posts}
        ref={ref}
        viewabilityConfig={viewConfigRef.current}
        onViewableItemsChanged={onViewRef.current}
        style={{ height: Dimensions.get('window').height - 72 }}
        renderItem={({ item }) => <Post navigation={navigation} post={item} viewable={Viewable} />}></FlatList>

    </View >
  );
}

export default Home




