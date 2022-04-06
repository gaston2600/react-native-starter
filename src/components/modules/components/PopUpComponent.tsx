import React from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { colors } from '../../../styles';
import Icon from '@styles/icons';


export default function PopUpComponent(props: any) {

  const { showPopUp, popUpContent, close } = props;
  return (
    <Modal animationType="fade" transparent={true} visible={showPopUp} onRequestClose={() => close()}>
      <StatusBar backgroundColor={colors.blackTrans} />
      <View style={styles.container}>
        <View style={styles.contenContainer}>
          {close && <TouchableOpacity onPress={() => close()} style={styles.closeButton}>
            <Icon.AntDesign
              name={'close'}
              color={colors.grey}
              size={35}>
            </Icon.AntDesign>
          </TouchableOpacity>}
            {popUpContent}
        </View>
      </View>

    </Modal>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackTrans,
    justifyContent: "center",
    zIndex: -99
  },
  contenContainer: {
    flex: 0.5,
    backgroundColor: colors.white,
    borderRadius: 20,
    margin: 20,
  },
  iconContainer: {
    justifyContent: "center"
  },
  addressContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10

  },
  adressText: {
    flex: 1,
    marginHorizontal: 10,
    color: colors.primary
  },
  infosContainer: {
    flex: 1,
    flexDirection: "row",
    marginBottom: 10

  },
  infosText: {
    // flex: 1,
    color: colors.primary,
    marginHorizontal: 10,
  },
  priceContainer: {
    flex: 1,
    marginBottom: 10


  },
  priceText: {
    flex: 1,
    color: colors.primary,
    marginHorizontal: 10,

  },
  statusContainer: {
    flex: 1,


  },
  statusText: {
    flex: 1,
    color: colors.primary,
    marginHorizontal: 10,

  },
  closeButton: {
    alignSelf: "flex-end",
    padding: 10,
    // paddingBottom: 50,
    // paddingLeft: 50,
    // height: 50,
    // backgroundColor:"red"
  }

});
