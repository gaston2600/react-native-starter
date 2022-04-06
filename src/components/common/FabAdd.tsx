import React, { Component } from 'react';
import {
    View, TouchableOpacity,
    StyleSheet
} from 'react-native';
import Icon  from '@styles/icons'; 
import { colors } from '@styles';
function FabAdd(props) {
    function onClick() {
        props.onClick()
    }
    return (

        <TouchableOpacity style={[styles.fabadd]} onPress={onClick}>
            <Icon.AntDesign name={'plus'} size={25} style={styles.fabIconadd} />
        </TouchableOpacity>

    );
}

export default FabAdd


const styles = StyleSheet.create({
    fabadd: {
        zIndex: 999,
        width: 55,
        height: 55,
        borderRadius: 30,
        backgroundColor: colors.primary,
        position: 'absolute',
        bottom: 30,
        right: 25,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: colors.primary, //'#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 1,
        elevation: 2,
    },
    fabIconadd: {
        fontWeight: "100",
        color: '#fff'
    },
});