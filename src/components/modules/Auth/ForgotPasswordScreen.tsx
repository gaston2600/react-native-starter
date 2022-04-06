import React, { Component, useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, StatusBar, Image } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../../../styles/colors';
import { Button, width, height, LoadingIndicator } from '../../common';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    forgot,
    login,
} from '../../../redux/actions';

import { WebSocketContext } from '../../../Context/WebSocket';
import PopUpComponent from '../components/PopUpComponent';
import ErrorPopUp from '../../common/ErrorPopUp';
import checkInternet from '../../../helpers/checkInternet';
import authStyle from './authStyle';
import { Strings } from '../../../utils/Strings';
import firstLetterUppercase from '../../../helpers/firstLetterUppercase';

const phoneRegex = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;


export default function ForgotPasswordScreen(props: any) {
    const dispatch = useDispatch();
    const [showPopUp, setShowPopUp] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [showInternetPopUp, setShowInternetPopUp] = useState(false);
    const [error, setError] = useState(false);

    const { navigate } = props.navigation;
    const { userLoading, user } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const ws = useContext(WebSocketContext);
    // useEffect(() => {
    //     checkConnection();
    // }, [])

    function handleSubmit(values: { email: any; }) {
        checkConnection();
        dispatch(forgot({ email: values.email },
            () => navigate("ResetPassword", { email: values.email }),
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
            <View style={authStyle.logincontainer}>
                <Formik
                    initialValues={{ email: '' }}
                    validationSchema={yup.object().shape({
                        email: yup
                            .string()
                            .email(firstLetterUppercase(Strings.invalid) + Strings.email)
                            .required(Strings.enterEmail)
                    })}
                    onSubmit={handleSubmit}>
                    {(formProps) => (
                        <View style={authStyle.loginInputs}>
                            <TextInput
                                value={formProps.values.email}
                                onChangeText={formProps.handleChange('email')}
                                onBlur={() => formProps.setFieldTouched('email')}
                                placeholder={Strings.enterEmail}
                                underlineColorAndroid="#eee"
                            />
                            {formProps.touched.email && formProps.errors.email && (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: 'red',
                                        paddingHorizontal: 10,
                                    }}>
                                    {formProps.errors.email}
                                </Text>
                            )}

                            <View style={{ marginTop: 20 }}>
                                <Button
                                    large
                                    primary
                                    bgColor={colors.primary}
                                    rounded
                                    style={authStyle.submitButton}
                                    caption={Strings.send}
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

