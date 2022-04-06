import React, { useState } from 'react';
import {
    ActivityIndicator,
    Keyboard,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { colors } from '../../../styles';
import Icon from '@styles/icons';
import PhoneCodesModal from './PhoneCodesModal';

export default function PhoneCodesButton(props: any) {
    const { submit, editable, showPhoneCode, title, textContentType, keyboardType, loading, hideIcon, updateNumber } = props;

    const [visible, setVisible] = useState(false);
    const [number, setNumber] = useState('');
    const [phoneCode, setPhoneCode] = useState({
        name: "Ethiopia",
        flag: "🇪🇹",
        dial_code: "+251"
    });
    function send() {
        submit((showPhoneCode ? phoneCode.dial_code : '') + number)
    }
    function changeNumber(number: string) {
        let phoneNumber=(showPhoneCode ? phoneCode.dial_code : '') + number
        setNumber(number);
        updateNumber && updateNumber(phoneNumber);
    }


    return (
        <View style={styles.container}>
            {/* <TouchableWithoutFeedback onPress={
                setVisible(true)
            } > */}
            <View style={styles.searchContainer} >
                {showPhoneCode && <TouchableOpacity onPress={() => setVisible(true)} style={{ flexDirection: "row", paddingVertical: 13, marginRight: 10 }}>
                    {/* <View style={{ flexDirection: "row", flex: 1 }}> */}
                    <Text style={styles.phoneCodeTxt}>
                        {String(phoneCode.flag)}
                    </Text>
                    <Text style={[styles.phoneCodeTxt, { marginHorizontal: 0, alignSelf: "flex-end" }]}>{phoneCode.dial_code}</Text>
                    {/* </View> */}
                </TouchableOpacity>}

                <TextInput
                    style={{ flex: 1 }}
                    textContentType={textContentType || "none"}
                    keyboardType={keyboardType}
                    placeholderTextColor={colors.black}
                    value={number}
                    placeholder={title}
                    editable={editable}
                    onChangeText={(number) => changeNumber(number)}

                />
                {!hideIcon && <View>
                    {loading ? <ActivityIndicator color={colors.primary} size="small" /> :
                        number != '' && <TouchableOpacity style={styles.submit} onPress={() => send()}>
                            <Icon.AntDesign name='arrowright' size={20} color={colors.white} />
                        </TouchableOpacity>}
                </View>}
            </View>
            {/* </TouchableWithoutFeedback> */}
            <PhoneCodesModal
                close={() => setVisible(false)}
                visible={visible}
                setPhoneCode={(code: any) => setPhoneCode(code)}
            />

        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    phoneCodeTxt: {

        marginHorizontal: 5,
        fontSize: 15,
        fontWeight: '400'
    },
    searchContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 5,
        paddingHorizontal: 10,
        shadowColor: '#333',
        shadowOffset: { width: 5, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        // borderWidth: 2

    },
    submit: {
        backgroundColor: colors.primary,
        borderRadius: 30,
        padding: 7,
        alignSelf: "center", justifyContent: "center"

    }

});
