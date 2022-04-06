import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';
import Icon from '@styles/icons';
import { colors } from '@styles';
import { Button } from '.';
import { homeStyle } from '../modules/components';
function ErrorPopUp(props) {
    const { close, errorText, deleteItem, confirm } = props;
    return (

        <View style={{ flex: 1 }}>
            {deleteItem ? <Icon.SpIcon name="trash" color={colors.errorClor} size={120} style={{ alignSelf: "center", marginTop: 15 }} /> :
                <Icon.SpIcon name="close" color={colors.errorClor} size={120} style={{ alignSelf: "center", marginTop: 15 }} />}

            {!deleteItem && <View style={{ marginVertical: 10 }}>
                <Text style={[homeStyle.title, { fontSize: 30, alignSelf: "center", fontWeight: "bold", color: colors.errorClor }]}>Oops!</Text>
            </View>}

            <View style={{ flex: 1, justifyContent: "flex-end" }}>
                <View style={{ flex: 1, margin: 10 }}>
                    <Text style={[homeStyle.title, { fontSize: 14, alignSelf: "center", textAlign: "center", fontWeight: "600", color: colors.black }]}>{errorText}</Text>
                </View>
                <Button
                    primary
                    bgColor={colors.errorClor}
                    rounded
                    large
                    style={{ margin: 20 }}
                    caption={!deleteItem ? "Try again" : 'Delete'}
                    textSize={12}
                    onPress={() => !deleteItem ? close() : confirm()}

                />
            </View>
        </View>

    );
}

export default ErrorPopUp;



