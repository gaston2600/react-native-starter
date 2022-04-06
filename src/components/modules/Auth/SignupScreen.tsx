import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, StatusBar, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import colors from '../../../styles/colors';
import { Button, width, LoadingIndicator } from '../../common';
import { useDispatch, useSelector } from 'react-redux';
import {
    signup,
} from '../../../redux/actions';

import { PHONE_REGEXP } from '../../../utils';
import PopUpComponent from '../components/PopUpComponent';
import ErrorPopUp from '../../common/ErrorPopUp';
import authStyle from './authStyle';




export default function SignupScreen({ route, navigation }) {
    const dispatch = useDispatch();
    const { phoneNumber, verification_id } = route.params;

    const { navigate } = navigation;
    const { userLoading } = useSelector((state: { User: { userLoading: any; user: any; } }) => state.User);
    const [showPopUp, setShowPopUp] = useState(false);
    const [signupError, setSignUpError] = useState(false);
    // Similar to componentDidMount and componentDidUpdate:
    // useEffect(() => {
    //     if (user) navigate("Login", {})
    // }, [user]);
    function handleSubmit(values: any) {
        delete values.confirmPassword

        dispatch(signup(values, () => { navigate("Login", {}) }, (error) => { setShowPopUp(true), setSignUpError(error.data.msg) }));
    }

    function goLogin() {
        navigate("Home", {})
    }
    return (
        <View style={authStyle.container}>
            <StatusBar />
            <View style={authStyle.logincontainer}>

                <Formik
                
                    initialValues={{
                        first_name: '', last_name: '', email: '', mobile: phoneNumber, pass: '', confirmPassword: '', verification_id
                    }}
                    validationSchema={yup.object().shape({
                        first_name: yup
                            .string()
                            .label('first name')
                            .required('Please enter your first name'),
                        last_name: yup
                            .string()
                            .label('last name')
                            .required('Please enter your last name'),
                        email: yup
                            .string()
                            .email('Invalid email')
                            .required('Email is Required.'),
                        mobile: yup
                            .string()
                            .matches(PHONE_REGEXP, 'Mobile number is not valid'),
                        pass: yup.string()
                            .min(3)
                            .required('Password is Required'),
                        confirmPassword: yup.string()
                            .oneOf([yup.ref('pass')], 'Passwords do not match')
                            .required('Confirm password is Required'),
                    })}
                    onSubmit={handleSubmit}>
                    {(formProps) => (
                        <>
                            <ScrollView style={authStyle.loginInputs} showsVerticalScrollIndicator={false}>
                                <TextInput
                                    value={formProps.values.first_name}
                                    onChangeText={formProps.handleChange('first_name')}
                                    onBlur={() => formProps.setFieldTouched('first_name')}
                                    placeholder="Enter first name"
                                    style={authStyle.input}
                                    underlineColorAndroid="#eee" />
                                <TextInput
                                    value={formProps.values.last_name}
                                    onChangeText={formProps.handleChange('last_name')}
                                    onBlur={() => formProps.setFieldTouched('last_name')}
                                    placeholder="Enter last name"
                                    style={authStyle.input}
                                    underlineColorAndroid="#eee" />
                                <TextInput
                                    value={formProps.values.email}
                                    onChangeText={formProps.handleChange('email')}
                                    onBlur={() => formProps.setFieldTouched('email')}
                                    placeholder="Enter email"
                                    style={authStyle.input}
                                    underlineColorAndroid="#eee" />

                                {formProps.errors.email && formProps.touched.email && <Text style={authStyle.inputError}> {formProps.errors.email} </Text>}




                                <TextInput
                                    value={formProps.values.mobile}
                                    onChangeText={formProps.handleChange('mobile')}
                                    onBlur={() => formProps.setFieldTouched('mobirenderErrorle')}
                                    placeholder="Enter mobile number"
                                    style={[authStyle.input, { color: colors.black }]}
                                    maxLength={12}
                                    editable={false}
                                    underlineColorAndroid="#eee" />
                                {formProps.errors.mobile && formProps.touched.mobile && <Text style={authStyle.inputError}> {formProps.errors.mobile} </Text>}

                                <TextInput
                                    value={formProps.values.pass}
                                    onChangeText={formProps.handleChange('pass')}
                                    // onBlur={() => formProps.setFieldTouched('email')}
                                    placeholder="Password"
                                    secureTextEntry={true}
                                    style={authStyle.input}
                                    underlineColorAndroid="#eee" />
                                {formProps.errors.pass && formProps.touched.pass && <Text style={authStyle.inputError}>{formProps.errors.pass}</Text>}
                                <TextInput
                                    value={formProps.values.confirmPassword}
                                    onChangeText={formProps.handleChange('confirmPassword')}
                                    // onBlur={() => formProps.setFieldTouched('email')}
                                    placeholder="Confirm Password"
                                    secureTextEntry={true}
                                    style={authStyle.input}
                                    underlineColorAndroid="#eee" />
                                {formProps.errors.confirmPassword && formProps.touched.confirmPassword && <Text style={authStyle.inputError}>{formProps.errors.confirmPassword}</Text>}

                                <View style={{ margin: 10 }}>
                                    <Button
                                        large
                                        primary
                                        bgColor={colors.primary}
                                        rounded
                                        style={authStyle.submitButton}
                                        caption="Sign up"
                                        // onPress={formProps.handleSubmit} 
                                        onPress={(formProps.handleSubmit)} 
                                        />

                                </View>
                            </ScrollView>
                        </>
                    )}
                </Formik>

            </View>
            {userLoading && <LoadingIndicator />}
            {showPopUp && <PopUpComponent
                showPopUp={showPopUp}
                popUpContent={<ErrorPopUp close={() => setShowPopUp(false)} errorText={signupError} />}
            />}

        </View>
    );
}


