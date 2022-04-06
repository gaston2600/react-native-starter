import React, { Component, useEffect, useState } from 'react';
import {
    View, TouchableOpacity, Text, FlatList,
    StyleSheet, Icon, SafeAreaView, Modal, ScrollView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';
import data from './data'
import { colors } from '../../../styles';

//import styles from './styles';
const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
    return layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
};
export default function PhoneCodesModal(props) {
    const { close, visible, setPhoneCode } = props;
    const [offset, setOffset] = useState(0);
    const [codesList, setCodsList] = useState([]);

    useEffect(() => {
        loadMore();
    }, [])
    const [limit] = useState(20);
    function selectCountry(code) {
        setPhoneCode(code)
        close()
    }

    function loadMore() {
        let list = [...codesList, ...data.slice(offset, offset + limit)];


        setCodsList(list);
        setOffset(offset + limit);
    }
    function renderItem(item, key) {
        return (
            <TouchableOpacity key={key} activeOpacity={0.6} onPress={() => selectCountry(item)} style={styles.phoneCode}>
                {/* <Ionicons>{String(item.flag)}</Ionicons> */}
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <Text style={styles.phoneCodeTxt}>
                        {String(item.flag)}
                    </Text>
                    <Text style={[styles.phoneCodeTxt, { flex: 1 }]}>
                        {item.name} </Text>
                    <Text style={[styles.phoneCodeTxt, { marginHorizontal: 0, alignSelf: "flex-end" }]}>
                        ({item.dial_code})</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <Modal animationType="slide" transparent={true} visible={visible} >
            <View style={{ flex: 1, backgroundColor: '#343a4096' }}>
                <View style={styles.modal}>
                    <View style={{ flex: 1 }}>
                        {/* Render the list of countries */}
                        {/* <FlatList
                            data={codesList}
                            keyExtractor={(item, index) => index.toString()}
                            onEndReached={() => loadMore()}
                            onEndReachedThreshold={0.5}
                            renderItem={({ item }) => renderItem(item)}
                        /> */}
                        <ScrollView style={{ height: '65%', marginBottom: 0 }}
                            onScroll={({ nativeEvent }) => {
                                if (isCloseToBottom(nativeEvent)) loadMore();
                            }}
                            scrollEventThrottle={1000}
                        >
                            {codesList.map((item, key) => (

                                renderItem(item, key)
                            )
                            )}
                        </ScrollView>

                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity activeOpacity={0.6} style={[styles.addBtn, { borderBottomStartRadius: 5 }]} onPress={() => close()}>
                            <Text style={{ fontSize: 18, color: "#fff" }} >Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );

}


const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: '#fff',
        margin: 30,
        borderWidth: 0.5,
        borderColor: colors.primary,
        borderRadius: 5
    },
    footer: {
        height: 50,
        flexDirection: "row",
        alignSelf: "flex-end",
    },
    addBtn: {
        flex: 1,
        backgroundColor: colors.primary,

        alignItems: 'center',
        justifyContent: 'center',

    },
    phoneCode: {
        borderBottomWidth: 0.5,
        borderColor: colors.primary,
        padding: 20,

    },
    phoneCodeTxt: {
        marginHorizontal: 10,
        fontSize: 15,
        fontWeight: '400'
    }
});