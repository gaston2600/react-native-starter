import * as React from 'react';
import Icon from '@styles/icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function navigate(name: any, params: any) {
  const navigation = useNavigation();
  navigation.navigate(name, params);
}

export function OpenDrawer({ navigation }) {

  return (
    <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()} >
      <Icon.SpIcon name={'menu'} size={25} color={'#333'} style={styles.menuIcon} />
    </TouchableOpacity>
  )
}


export function GoHome({ navigation: { navigate } }) {

  return (
    <TouchableOpacity style={styles.menuButton} onPress={() => navigate("Home")} >
      <Icon.AntDesign name={'arrowleft'} size={25} color={'#333'} style={styles.menuIcon} />
    </TouchableOpacity>
  )
}
export function GoBack({ navigation: { goBack }, color }) {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={() => goBack()} >
      <Icon.AntDesign name={'arrowleft'} size={25} color={color ? color : "#333"} style={styles.menuIcon} />
    </TouchableOpacity>
  )
}
export function GoBackWithAction(props: any) {
  const { action } = props
  return (
    <TouchableOpacity style={styles.menuButton} onPress={() => action()} >
      <Icon.AntDesign name={'arrowleft'} size={25} color={'#333'} style={styles.menuIcon} />
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  menuButton: {
    width: 60,
    height: 50,
    zIndex: 999,
    alignItems: "center",

    paddingVertical: 10,
    paddingHorizontal: 15
  },
  menuIcon: {
    // color: '#333',
    fontWeight: "normal",
    zIndex: 9999,
  },
})