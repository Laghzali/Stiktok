import * as React from 'react';
import { Button, View, Text , StatusBar,  TouchableOpacity} from 'react-native';
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
import AddWindow from './Componants/AddWindow'
import Modal from './Componants/AddWindow'
class LiveIcon extends React.Component {
  render() {
    return (
    <Feather name="radio" size={28} color={this.props.tintcolor} />
    )
  }
}
class VideoIcon extends React.Component {

  render() {
    return (
      <View>
        <Entypo name="video-camera" size={22} color={this.props.tintcolor} />
      </View>
    )
  }
}


class ProfileIcon extends React.Component {
  render() {
    return (

    <AntDesign name="user" size={28} color={this.props.tintcolor} />
    )
  }
}
class StoreIcon extends React.Component {
  render() {
    return (
      <MaterialIcons name="store" size={28} color={this.props.tintcolor} />    )
  }
}

const AddButtonComponant = () => {
  return null
}

const Tab = createBottomTabNavigator();

 function App() {

  return (
    
    <NavigationContainer>

      <Tab.Navigator tabBarOptions={{showLabel: false,activeTintColor: 'tomato',inactiveTintColor: 'gray',style: {backgroundColor:'#e1e2e3',paddingBottom:5, borderTopEndRadius:10,borderTopStartRadius:10}}} >
        <Tab.Screen options={{tabBarIcon: ({focused,color}) => (<VideoIcon tintcolor={color}/>) }} name="Videos" component={Home} />
        <Tab.Screen options={{tabBarIcon : ({focused,color}) => (<LiveIcon tintcolor={color}/>)}} name="Live" component={Live} />
        <Tab.Screen options={{tabBarLabel:'' ,tabBarIcon : ({focused,color}) => (<AddButton tintcolor={color}/>)}} name="AddButton" component={AddWindow} />
        <Tab.Screen options={{tabBarIcon : ({focused,color}) => (<StoreIcon tintcolor={color}/>)}} name="Store" component={Store} />
        <Tab.Screen options={{tabBarIcon : ({focused,color}) => (<ProfileIcon tintcolor={color}/>)}} name="Settings" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
