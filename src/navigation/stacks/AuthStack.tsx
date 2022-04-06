import * as React from 'react';
import { createStackNavigator, CardStyleInterpolators, HeaderStyleInterpolators } from '@react-navigation/stack';
import LoginScreen from '../../components/modules/Auth/LoginScreen';
import SignupScreen from '../../components/modules/Auth/SignupScreen';
import { GoBack } from '../NavigationService';
import ForgotPasswordScreen from '../../components/modules/Auth/ForgotPasswordScreen';
import ResetPasswordScreen from '../../components/modules/Auth/ResetPasswordScreen';


const Stack = createStackNavigator();
export default function AuthStack() {
    return (


        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                presentation : "card"
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}

                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerStyle: {
                        elevation: 0,
                    },
                    headerTitle: '',
                    // headerLeft: () => <GoHome navigation={navigation} />,
                })}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle: {
                        elevation: 0,
                    },
                    headerLeft: () => <GoBack navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="Forgot"
                component={ForgotPasswordScreen}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle: {
                        elevation: 0,
                    },
                    headerLeft: () => <GoBack navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="ResetPassword"
                component={ResetPasswordScreen}
                options={({ navigation }) => ({
                    headerTransparent: true,
                    headerTitle: '',
                    headerStyle: {
                        elevation: 0,
                    },
                    headerLeft: () => <GoBack navigation={navigation} />
                })}
            />
        </Stack.Navigator>


    );
}
const config = {
    animation: 'timing',//spring
    config: {
        duration: 340
        //   stiffness: 1000,
        //   damping: 500,
        //   mass: 3,
        //   overshootClamping: true,
        //   restDisplacementThreshold: 0.01,
        //   restSpeedThreshold: 0.01,
    },
};
