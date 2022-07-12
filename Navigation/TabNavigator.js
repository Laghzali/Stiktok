import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Store from '../screens/Store'
import Live from '../screens/Live'
import AddButton from '../Componants/AddButton'
import AddWindow from '../Componants/AddWindow'
import { LiveIcon, VideoIcon, ProfileIcon, StoreIcon } from '../Componants/Icons'



const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return (
        <Tab.Navigator tabBarOptions={{ showLabel: false, activeTintColor: 'tomato', inactiveTintColor: 'gray', style: { backgroundColor: '#e1e2e3', paddingBottom: 5, borderTopEndRadius: 10, borderTopStartRadius: 10, } }} >
            <Tab.Screen options={{ tabBarIcon: ({ focused, color }) => (<VideoIcon tintcolor={color} />) }} name="Home" component={Home} />
            <Tab.Screen options={{ tabBarIcon: ({ focused, color }) => (<LiveIcon tintcolor={color} />) }} name="Live" component={Live} />
            <Tab.Screen options={{ tabBarIcon: ({ focused, color }) => (<AddButton tintcolor={color} />) }} name="AddButton" component={AddWindow} />
            <Tab.Screen options={{ tabBarIcon: ({ focused, color }) => (<StoreIcon tintcolor={color} />) }} name="Store" component={Store} />
            <Tab.Screen options={{ tabBarIcon: ({ focused, color }) => (<ProfileIcon tintcolor={color} />) }} name="Settings" component={Profile} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;