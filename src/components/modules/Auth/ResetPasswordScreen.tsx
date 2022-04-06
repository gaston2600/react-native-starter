import React, { Component, useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, StatusBar, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../../../styles/colors';
import { Button, width, height, LoadingIndicator } from '../../common';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    login, resetPassword,
} from '../../../redux/actions';

import { WebSocketContext } from '../../../Context/WebSocket';
import PopUpComponent from '../components/PopUpComponent';
import ErrorPopUp from '../../common/ErrorPopUp';
import checkInternet from '../../../helpers/checkInternet';
import authStyle from './authStyle';
import { Strings } from '../../../utils/Strings';

const phoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;


export default function ResetPasswordScreen({ route, navigation }) {
    const dispatch = useDispatch();
    const [showPopUp, setShowPopUp] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [showInternetPopUp, setShowInternetPopUp] = useState(false);
    const [error, setError] = useState(false);
    const { navigate } = navigation;
    const { userLoading, user } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const { email } = route.params;

    const ws = useContext(WebSocketContext);
    // useEffect(() => {
    //     checkConnection();
    // }, [])

    function handleSubmit(values: { reset_code: any; password: any; }) {
        checkConnection();
        dispatch(resetPassword({ email, reset_code: values.reset_code, new_pass: values.password },
            () => navigate("Login", {}),
            (error: any) => {
                setError(error.data.msg)
                error?.data && setShowPopUp(true)
            }));

    }


    async function checkConnection() {
        const isConnected = await checkInternet();

        setIsConnected(isConnected);
        !isConnected && setShowInternetPopUp(true)
    }

    return (
        <View style={authStyle.container}>
            <StatusBar />
            <View style={{ flex: 0.5, width: "135%", alignSelf: "center", backgroundColor: colors.primary, borderBottomRightRadius: 300, borderBottomLeftRadius: 300, justifyContent: "flex-end" }}>
                <Image source={require('../../../../assets/slogan.png')} resizeMode="contain" style={{ marginRight: 12, height: "70%", width: "40%", alignSelf: "center" }} ></Image>

            </View>
            <View style={authStyle.logincontainer}>
                <Formik
                    initialValues={{ password: '', reset_code: '' }}
                    validationSchema={yup.object().shape({

                        reset_code: yup
                            .string()
                            .required(Strings.resetCode + Strings.isRequired),
                        password: yup.string()
                            .min(3)
                            .required(Strings.password + Strings.isRequired),
                    })}
                    onSubmit={handleSubmit}>
                    {(formProps) => (
                        <View style={authStyle.loginInputs}>
                            <TextInput
                                value={formProps.values.reset_code}
                                onChangeText={formProps.handleChange('reset_code')}
                                // onBlur={() => formProps.setFieldTouched('email')}
                                placeholder={Strings.resetCode}
                                secureTextEntry={false}
                                underlineColorAndroid="#eee"

                            />
                            {formProps.errors.reset_code && formProps.touched.reset_code && <Text style={authStyle.inputError}>{formProps.errors.reset_code}</Text>}

                            <TextInput
                                value={formProps.values.password}
                                onChangeText={formProps.handleChange('password')}
                                // onBlur={() => formProps.setFieldTouched('email')}
                                placeholder={Strings.password}
                                secureTextEntry={true}
                                underlineColorAndroid="#eee"

                            />
                            {formProps.errors.password && formProps.touched.password && <Text style={authStyle.inputError}>{formProps.errors.password}</Text>}

                            <View style={{ marginTop: 20 }}>
                                <Button
                                    large
                                    primary
                                    bgColor={colors.primary}
                                    rounded
                                    style={authStyle.submitButton}
                                    caption={Strings.submit}
                                    onPress={formProps.handleSubmit}
                                />

                            </View>
                        </View>)}
                </Formik>
            </View>
            {userLoading && <LoadingIndicator color={colors.primary} />}
            {showPopUp && <PopUpComponent
                showPopUp={showPopUp}
                popUpContent={<ErrorPopUp close={() => setShowPopUp(false)} errorText={error} />}
            />}
            {showInternetPopUp && <PopUpComponent showPopUp={showInternetPopUp} popUpContent={<ErrorPopUp close={() => setShowInternetPopUp(false)} errorText={"Please check your internet connection and try again"} />} />}
        </View>
    );
}
