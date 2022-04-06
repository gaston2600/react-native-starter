import React, { useContext, useState } from 'react';
import { View, StyleSheet, Image, Text, Dimensions, StatusBar, TouchableOpacity } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem} from '@react-navigation/drawer';

import colors from '@styles/colors';
import Icon from '@styles/icons';
import { Button } from '../components/common';
import { useDispatch, useSelector } from 'react-redux';
import {
    logout,
} from '../redux/actions';
import { WebSocketContext } from '../Context/WebSocket';
import { Strings } from '../utils/Strings';




export default function DrawerContent(props: any) {
    const { navigate } = props.navigation;
    const { user } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const ws = useContext(WebSocketContext);
    const [, setShowConfirmPopup] = useState(false)
    const [] = useState(false)
    // const [showRequestError, setShowRequestError] = useState(false)
    const [] = useState("")
    const dispatch = useDispatch();
    function _logout() {
        dispatch(logout());
        ws.leave(user._id);
    }


    function goToMyProfile() {
        navigate("MyProfile", {})
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={{ flex: 1 }}>
                <View style={styles.headerContainer}>

                    <TouchableOpacity onPress={() => goToMyProfile()}>
                        <Image source={require('@assets/images/avatar.png')} style={styles.userImage} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: "row", flex: 1, padding: 5 }}>
                        <View style={styles.userDetails}>
                            <Text style={{ color: '#fff', fontSize: 17, fontWeight: "600" }}>{user?.first_name || ''} {user?.last_name || ''}</Text>
                            <Text style={{ color: '#ddd', fontSize: 14 }}>{user?.email || ''}</Text>
                        </View>
                    </View>

                </View>
                {/* <DrawerItemList {...props} /> */}


                <View style={{ flex: 1, paddingTop: 25, paddingLeft: 25 }}>
                    {/* <ScrollView > */}
                    {props.state.routes.map((item: any, index: number) =>
                        <View key={index} style={{ flexDirection: "row", flex: 1 }}>
                            <DrawerItem
                                label={() =>
                                    <View style={{ flexDirection: "row", flex: 1 }}>
                                        <Text style={{ flex: 1 }}>{item.name}</Text>
                                        <Icon.AntDesign color={colors.grey} size={20} name={'right'} />
                                    </View>}
                                labelStyle={{ textAlign: "left" }}
                                onPress={() => navigate(item.name)}
                                style={{ flex: 1 }}
                            // icon={({ focused, color, size }) =>}
                            ></DrawerItem>

                        </View>
                    )

                    }
                    {/* </ScrollView> */}
                </View>
            </DrawerContentScrollView>

            <View style={styles.footerMenu}>
                <View style={[styles.logoutButton]}>
                    <Button
                        bgColor={colors.grey}
                        primary={colors.grey}
                        bordered
                        // bgGradientStart={colors.primary}
                        // bgGradientEnd="blue"
                        caption={Strings.logout}
                        textColor={colors.grey}
                        textSize={11}
                        rounded
                        onPress={() => _logout()}
                    />
                </View>

            </View>
        </View>

    );
}
const statusBarHeight = Number(StatusBar.currentHeight) * 1.3;
const styles = StyleSheet.create({

    headerContainer: {
        padding: 30,
        flexDirection: 'row',
        marginTop: -statusBarHeight,
        flex: 1,
        backgroundColor: colors.primary,
        borderRadius: 20,
        borderTopRightRadius: 0,
        height: 180,
        alignItems: "center",
        justifyContent: "center"


    },
    userDetails: {
        flex: 1,
        paddingLeft: 5,
    },
    userImage: {

        width: 50,
        height: 50,
        borderRadius: 50,
    },
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    footerMenu: {
        // flex: 1,
        alignSelf: "flex-end",
        flexDirection: "row",
        marginHorizontal: 20,
        marginBottom: 20
    },
    driveButton: {
        marginHorizontal: 5,
        flex: 1
    },
    logoutButton: {
        marginHorizontal: 5,
        // flex: 1,
    }

});