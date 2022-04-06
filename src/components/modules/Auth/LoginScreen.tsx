import React, { Component, useState, useEffect, useContext } from 'react';
import { Text, View, TextInput, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../../../styles/colors';
import { Button, width, height, LoadingIndicator } from '../../common';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
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


export default function LoginScreen(props: any) {
    const dispatch = useDispatch();
    const [showPopUp, setShowPopUp] = useState(false);
    const [isConnected, setIsConnected] = useState(true);
    const [showInternetPopUp, setShowInternetPopUp] = useState(false);
    const [loginError, setLoginUpError] = useState(false);
    const { navigate } = props.navigation;
    const { userLoading, user } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const ws = useContext(WebSocketContext);
    // useEffect(() => {
    //     checkConnection();
    // }, [])

    function handleSubmit(values: { login: any; password: any; }) {
        checkConnection();
        dispatch(login(values.login, values.password, () => ws.login(), (error: any) => { error?.data && setShowPopUp(true) }));

    }

    function goToSignUp() {
        navigate("Signup", {})
    }
    async function checkConnection() {
        const isConnected = await checkInternet();

        setIsConnected(isConnected);
        !isConnected && setShowInternetPopUp(true);
    }

    return (
        <View style={authStyle.container}>
            <StatusBar />
            <View style={authStyle.logincontainer}>
                <Formik
                    initialValues={{ login: 'test@mail.com', password: '12345678' }}
                    validationSchema={yup.object().shape({
                        login: yup
                            .string()
                            .email(firstLetterUppercase(Strings.invalid+Strings.login))
                            .required(Strings.login+ Strings.isRequired),
                        password: yup.string()
                            .min(3)
                            .required(Strings.password  + Strings.isRequired),
                    })}
                    onSubmit={handleSubmit}>
                    {(formProps) => (
                        <View style={authStyle.loginInputs}>
                            <TextInput
                                value={formProps.values.login}
                                onChangeText={formProps.handleChange('login')}
                                onBlur={() => formProps.setFieldTouched('login')}
                                placeholder={Strings.enterLogin}
                                underlineColorAndroid="#eee"
                            />
                            {formProps.touched.login && formProps.errors.login && (
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: 'red',
                                        paddingHorizontal: 10,
                                    }}>
                                    {formProps.errors.login}
                                </Text>
                            )}
                            <TextInput
                                value={formProps.values.password}
                                onChangeText={formProps.handleChange('password')}
                                onBlur={() => formProps.setFieldTouched('email')}
                                placeholder={Strings.password}
                                secureTextEntry={true}
                                underlineColorAndroid="#eee"

                            />
                            <Text
                                style={{
                                    fontSize: 12,
                                    color: 'red',
                                    paddingHorizontal: 10,
                                }}>
                                {formProps.errors.password}
                            </Text>
                            <View style={{ marginTop: 20 }}>
                                <Button
                                    large
                                    primary
                                    bgColor={colors.primary}
                                    rounded
                                    style={authStyle.submitButton}
                                    caption={Strings.login.toUpperCase()}
                                    onPress={formProps.handleSubmit}
                                />
                                <Button
                                    large
                                    primary
                                    bgColor={colors.primary}
                                    rounded
                                    style={authStyle.signupButton}
                                    caption={Strings.signup.toUpperCase()}
                                    onPress={() => goToSignUp()}
                                />
                            </View>
                        </View>)}
                </Formik>
                <TouchableOpacity onPress={() => navigate("Forgot", {})}>
                    <Text style={authStyle.text}>{Strings.forgotPass + "?"}</Text>
                </TouchableOpacity>
            </View>
            {/* {userLoading && <LoadingIndicator color={colors.primary} />} */}
            {showPopUp && <PopUpComponent
                showPopUp={showPopUp}
                popUpContent={<ErrorPopUp close={() => setShowPopUp(false)} errorText={Strings.checkLoginPass} />}
            />}
            {showInternetPopUp && <PopUpComponent showPopUp={showInternetPopUp} popUpContent={<ErrorPopUp close={() => setShowInternetPopUp(false)} errorText={"Please check your internet connection and try again"} />} />}
        </View>
    );
}
// );

