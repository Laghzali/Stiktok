import React, { Component, useState } from 'react';
import { View, TouchableHighlight, StyleSheet, Dimensions } from 'react-native';
import { Text, Card, Image, Icon } from '@rneui/themed';
import { StatusBar } from 'react-native';
import Styles from './Styles'
import { Avatar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { LiveIcon, VideoIcon } from '../../Componants/Icons'
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {
  const [activeList, setActiveList] = useState(0)
  return (<>
    <StatusBar barStyle="dark-content" />
    <View style={Styles.container}>
      <SafeAreaView style={Styles.Header}>
        <View style={{ alignItems: 'center', flexDirection: 'row', alignItems: 'flex-start' }}>
          <Avatar.Image size={70} source={require('../../assets/profile.jpg')} />
          <View>
            <Text h3={true} style={Styles.username}>Mohamed</Text>
            <Text style={{ ...Styles.username, color: 'grey' }}>@xeighty6</Text>
          </View>
          <TouchableHighlight underlayColor='none' style={Styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="options-outline" size={30} color="black" />
          </TouchableHighlight>
        </View>
      </SafeAreaView>

      <View style={Styles.dashboard}>
        <View style={Styles.card}>
          <Text style={Styles.cardTitle}>Points</Text>
          <Text style={Styles.cardContent}>200K</Text>
        </View>
        <View style={Styles.card}>
          <Text style={Styles.cardTitle}>Earnings</Text>
          <Text style={Styles.cardContent}>500$</Text>
        </View>
        <View style={Styles.card}>
          <Text style={Styles.cardTitle}>Stik meter</Text>
          <Text style={Styles.cardContent}>900</Text>
        </View>
      </View>
      <View style={Styles.bio}>
        <Text style={Styles.bioText}>Some bio thsi is the longest bio possible Some bio thsi is the longest bio possible and its very cool</Text>
      </View>
      <View style={Styles.body}>
        <View style={{ height: '10%', flexDirection: 'row', paddingLeft: 30, paddingRight: 30, justifyContent: 'space-evenly', alignItems: 'center' }}>
          <TouchableHighlight underlayColor={'none'} style={{ width: '30%', padding: 5, alignItems: 'center', borderBottomColor: "grey", borderBottomWidth: activeList == 0 ? 2 : 0 }} onPress={() => setActiveList(0)}>
            <VideoIcon size={30} tintcolor={'tomato'} />
          </TouchableHighlight>
          <TouchableHighlight style={{ width: '30%', padding: 2, alignItems: 'center', borderBottomColor: "grey", borderBottomWidth: activeList == 1 ? 2 : 0 }} underlayColor='none' onPress={() => setActiveList(1)}>
            <LiveIcon size={35} tintcolor={'tomato'} />
          </TouchableHighlight>
        </View>

        <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }} style={{ paddingTop: 10 }}>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://www.tefal.pl/_ui/desktop/common/images/missing-product-300x300.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://www.tefal.pl/_ui/desktop/common/images/missing-product-300x300.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://www.tefal.pl/_ui/desktop/common/images/missing-product-300x300.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/687822/retina_1708x683_cover-react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png' }}></Card.Image>
          <Card.Image onPress={() => alert('video is playing')} resizeMode="cover" style={{ width: (Dimensions.get('screen').width) / 3, height: 140 }} source={{ uri: 'https://www.tefal.pl/_ui/desktop/common/images/missing-product-300x300.png' }}></Card.Image>
        </ScrollView>

      </View>

    </View>
  </>

  );
}
export default Home
