import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
import DrawerContent from './DrawerContent';

import { colors } from '@styles';


import { useSelector } from 'react-redux';
import { HomeStack } from './stacks';
import { Strings } from '../utils/Strings';



export default function DrawerNavigator(props: any) {
  return (

    <Drawer.Navigator
      {...props}
      initialRouteName={"Home"}
      drawerType="slide"
      sceneContainerStyle={{
        backgroundColor: 'transparent',
      }}
      drawerStyle={{
        width: "80%"
      }}
      drawerContentOptions={{
        activeTintColor: colors.primary,
      }}
      drawerContent={props => < DrawerContent {...props} />}
    >
      <Drawer.Screen name={Strings.home} component={HomeStack} ></Drawer.Screen>


    </Drawer.Navigator >
  );
}


