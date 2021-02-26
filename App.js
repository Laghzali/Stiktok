import * as React from 'react';
import { Button, View, Text , StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import Profile from './screens/Profile'
import Store from './screens/Store'
import Live from './screens/Live'
import AddButton from './Componants/AddButton'
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 

class LiveIcon extends React.Component {
  render() {
    return (
    <Feather name="radio" size={24} color="#959ba1" />
    )
  }
}
class VideoIcon extends React.Component {
  render() {
    return (
      <Entypo name="video-camera" size={21} color="#959ba1" />
    )
  }
}
class ProfileIcon extends React.Component {
  render() {
    return (
    <AntDesign name="user" size={24} color="#959ba1" />
    )
  }
}
class StoreIcon extends React.Component {
  render() {
    return (
      <MaterialIcons name="store" size={24} color="#959ba1" />    )
  }
}

const AddButtonComponant = () => {
  return null
}

const Tab = createBottomTabNavigator();

 function App() {
  return (
    
    <NavigationContainer>

      <Tab.Navigator tabBarOptions={{style: {backgroundColor:'#e1e2e3',paddingBottom:5, borderTopEndRadius:10,borderTopStartRadius:10}}} >
        <Tab.Screen options={{tabBarIcon: () => (<VideoIcon/>) }} name="Videos" component={Home} />
        <Tab.Screen options={{tabBarIcon : () => (<LiveIcon/>)}} name="Live" component={Live} />
        <Tab.Screen options={{tabBarLabel:'' ,tabBarIcon : () => (<AddButton/>)}} name="AddButton" component={AddButtonComponant} />
        <Tab.Screen options={{tabBarIcon : () => (<StoreIcon/>)}} name="Store" component={Store} />
        <Tab.Screen options={{tabBarIcon : () => (<ProfileIcon/>)}} name="Settings" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
