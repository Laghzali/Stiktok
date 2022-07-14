import { createStackNavigator } from '@react-navigation/stack';
import CommentsWindow from '../Componants/CommentsWindow';

import BottomTabNavigator from '../Navigation/TabNavigator'

const Stack = createStackNavigator();


const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,

        }}>
            <Stack.Screen name="Home" component={BottomTabNavigator} />
            <Stack.Screen name="Comments" component={CommentsWindow} />

        </Stack.Navigator>
    );
}


export default MainStackNavigator