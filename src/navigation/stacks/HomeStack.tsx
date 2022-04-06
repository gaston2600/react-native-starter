import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GoBack, GoHome, OpenDrawer } from '../NavigationService';
import HomeScreen from '../../components/modules/HomeScreen';
import { useDispatch } from 'react-redux';
import { WebSocketContext } from '../../Context/WebSocket';


const Stack = createStackNavigator();
export default function HomeStack() {
    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);

    return (
        <Stack.Navigator
            initialRouteName="Home"
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    // headerTransparent: true,
                    headerLeft: () => <OpenDrawer navigation={navigation} />,

                    headerTitle: '',
                    headerStyle: { height: 100 },
                    headerLeftContainerStyle: { margin: 20 }
                })}
            />
        </Stack.Navigator>

    );
}
