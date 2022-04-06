import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../../components/modules/Auth/LoginScreen';
import SignupScreen from '../../components/modules/Auth/SignupScreen';
import DrawerNavigator from '../DrawerNavigator';
import AuthStack from './AuthStack';


const Stack = createStackNavigator();
export default function MainStack(props: any) {
    return (

        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                presentation : "card"
            }}
        >
            <DrawerNavigator {...props} />
            <AuthStack />

        </Stack.Navigator>

    );
}