import React, { Component } from 'react';
import {
    ActivityIndicator,
    StyleSheet,
    View
} from 'react-native';
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator,
} from 'react-native-indicators';
import { colors } from '@styles';
//import styles from './styles';

export default function LoadingIndicator(props) {
    //constructor(){
    //  super(props);
    //}

    const { color, propsStyle } = props;
    return (
        < View
            style={[styles.indicator, propsStyle]}
        >
            <BarIndicator count={3} color={(color) ? color : colors.primary} size={25} />
        </View>
    );

}


const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: "#fff0",
        justifyContent: 'center',
        zIndex: 999,

    }
});