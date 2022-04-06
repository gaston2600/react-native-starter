import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILED,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILED,
    CHECK_SESSION,
    CHECK_SESSION_SUCCESS,
    CHECK_SESSION_FAILED,
    DRIVER_REQUEST,
    DRIVER_REQUEST_SUCCESS,
    DRIVER_REQUEST_FAILED,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    RESET_PASSWORD,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAILED,
    VERIFY_PHONE,
    VERIFY_PHONE_SUCCESS,
    VERIFY_PHONE_FAILED,
    CHECK_SMS_CODE,
    CHECK_SMS_CODE_SUCCESS,
    CHECK_SMS_CODE_FAILED,
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILED,

} from '../types';

import authService from "../../services/auth";

export const login = (login: any, pass: any, callback: any, callbackError: any) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: LOGIN_USER
        });

        authService
            .login(login, pass)
            .then(response => {
                console.log("login", response);

                dispatch({
                    type: LOGIN_USER_SUCCESS,
                    payload: response,
                });
                callback(response);

            })
            .catch(e => {
                console.log("login error === ", e);
                dispatch({
                    type: LOGIN_USER_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const getProfile = (id: string, callback: any, callbackError: any) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: GET_USER_PROFILE
        });

        authService
            .getProfile(id)
            .then((response: any) => {
                console.log("getProfile", response);

                dispatch({
                    type: GET_USER_PROFILE_SUCCESS,
                    payload: response.data,
                });
                callback(response);

            })
            .catch(e => {
                console.log("getProfile error === ", e);
                dispatch({
                    type: GET_USER_PROFILE_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const logout = () => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: LOGOUT_USER
        });

        authService
            .logout()
            .then(response => {

                dispatch({
                    type: LOGOUT_USER_SUCCESS,
                    payload: response,
                });
                // callback(response);
            })
            .catch(e => {
                dispatch({
                    type: LOGOUT_USER_FAILED,
                    payload: e
                });
                // callbackError(e.response);
            });
    };
};
export const signup = (data: any, callback, callbackError) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: SIGNUP_USER
        });

        authService
            .signup(data)
            .then(response => {
                console.log("signup", response);

                dispatch({
                    type: SIGNUP_USER_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                console.log("signup error === ", e.response);
                dispatch({
                    type: SIGNUP_USER_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const forgot = (data: any, callback, callbackError) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: FORGOT_PASSWORD
        });

        authService
            .forgot(data)
            .then(response => {
                console.log("forgot", response);

                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                console.log("forgot error === ", e.response);
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const resetPassword = (data: any, callback, callbackError) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: FORGOT_PASSWORD
        });

        authService
            .resetPassword(data)
            .then(response => {
                console.log("resetPassword", response);

                dispatch({
                    type: FORGOT_PASSWORD_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                console.log("resetPassword error === ", e.response);
                dispatch({
                    type: FORGOT_PASSWORD_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const verifyPhone = (data: any, callback, callbackError) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: VERIFY_PHONE
        });

        authService
            .verifyPhone(data)
            .then(response => {
                console.log("verifyPhone", response);

                dispatch({
                    type: VERIFY_PHONE_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                console.log("verifyPhone error === ", e.response);
                dispatch({
                    type: VERIFY_PHONE_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const checkSmsCode = (data: any, callback, callbackError) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: CHECK_SMS_CODE
        });

        authService
            .checkSmsCode(data)
            .then(response => {
                console.log("checkSmsCode", response);

                dispatch({
                    type: CHECK_SMS_CODE_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                console.log("checkSmsCode error === ", e);
                dispatch({
                    type: CHECK_SMS_CODE_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};
export const checkSession = () => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: CHECK_SESSION
        });

        authService
            .checkSession()
            .then(response => {

                dispatch({
                    type: CHECK_SESSION_SUCCESS,
                    payload: response,
                });
                // callback(response);
            })
            .catch(e => {
                console.log("error check session=== ");
                dispatch({
                    type: CHECK_SESSION_FAILED,
                    payload: e
                });
                // callbackError(e.response);
            });
    };
};
export const sendDriverRequest = (callback: { (): void; (arg0: unknown): void; }, callbackError: ((arg0: any) => void) | undefined) => {

    return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
        dispatch({
            type: DRIVER_REQUEST
        });

        authService
            .sendDriverRequest()
            .then(response => {

                dispatch({
                    type: DRIVER_REQUEST_SUCCESS,
                    payload: response,
                });
                callback(response);
            })
            .catch(e => {
                // console.log("error === ", e);
                dispatch({
                    type: DRIVER_REQUEST_FAILED,
                    payload: e
                });
                callbackError(e.response);
            });
    };
};

