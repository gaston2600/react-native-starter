import { boolean } from 'yup';
import {
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED,

    LOGOUT_USER,
    CHECK_SESSION,
    CHECK_SESSION_SUCCESS,
    CHECK_SESSION_FAILED,
    SIGNUP_USER,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILED,
    SET_USER_LOCATION,
    UPDATE_PREFRENCES,
    VERIFY_PHONE,
    VERIFY_PHONE_SUCCESS,
    VERIFY_PHONE_FAILED,
    CHECK_SMS_CODE,
    CHECK_SMS_CODE_SUCCESS,
    CHECK_SMS_CODE_FAILED,
    FORGOT_PASSWORD,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILED,
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILED

} from '../types';


const INITIAL_STATE = {
    userLoading: false,
    checkSessionLoading: false,
    sessionChecked: false,
    user: null,
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {


        //USER LOGIN
        case LOGIN_USER:
            return {
                ...state,
                user: { "email": "test@mail.com", "first_name": "first_name", "last_name": "last_name" },
                userLoading: true
            };
        case LOGIN_USER_SUCCESS:
            const user = action.payload.data;

            return {
                ...state,
                user,
                userLoading: false,
            };
        case LOGIN_USER_FAILED:
            return {
                ...state,
                userLoading: false
            };
        //SIGNUP_USER  
        case SIGNUP_USER:
            return {
                ...state,
                userLoading: true
            };
        case SIGNUP_USER_SUCCESS:

            return {
                ...state,
                userLoading: false,
            };
        case SIGNUP_USER_FAILED:
            return {
                ...state,
                userLoading: false
            };
        //GET_USER_PROFILE   
        case GET_USER_PROFILE:
            return {
                ...state,
                userLoading: true
            };
        case GET_USER_PROFILE_SUCCESS:

            return {
                ...state,
                userLoading: false,
                myProfile: action.payload.user
            };
        case GET_USER_PROFILE_FAILED:
            return {
                ...state,
                userLoading: false
            };
        //CHECK SESSION
        case CHECK_SESSION:

            return {
                ...state,
                checkSessionLoading: true,
                sessionChecked: false

            };
        case CHECK_SESSION_SUCCESS:
            const isDriver = action.payload.data?.roles.includes("DRIVER") ? true : false;

            return {
                ...state,
                user: action.payload.data,
                checkSessionLoading: false,
                sessionChecked: true,
                isDriver
            };
        case CHECK_SESSION_FAILED:
            return {
                ...state,
                checkSessionLoading: false,
                sessionChecked: false

            };
        //VERIFY_PHONE
        case VERIFY_PHONE:

            return {
                ...state,
                userLoading: true

            };
        case VERIFY_PHONE_SUCCESS:

            return {
                ...state,
                userLoading: false
            };
        case VERIFY_PHONE_FAILED:
            return {
                ...state,
                userLoading: false

            };
        //FORGOT_PASSWORD
        case FORGOT_PASSWORD:

            return {
                ...state,
                userLoading: true

            };
        case FORGOT_PASSWORD_SUCCESS:

            return {
                ...state,
                userLoading: false
            };
        case FORGOT_PASSWORD_FAILED:
            return {
                ...state,
                userLoading: false

            };
        //CHECK_SMS_CODE
        case CHECK_SMS_CODE:

            return {
                ...state,
                userLoading: true

            };
        case CHECK_SMS_CODE_SUCCESS:

            return {
                ...state,
                userLoading: false
            };
        case CHECK_SMS_CODE_FAILED:
            return {
                ...state,
                userLoading: false

            };

        //LOGOUT
        case LOGOUT_USER:
            console.log("im here");

            return {
                state: INITIAL_STATE
            };

        //SET_USER_LOCATION
        case SET_USER_LOCATION:

            return {
                ...state,
                receivingLocation: true,
                currentLocation: action.payload

            };

        //CHANGE PREFERENCES
        case UPDATE_PREFRENCES:

            return {
                ...state,
                preferences: action.payload

            };


        //NOTHING TO DO
        default:
            return {
                ...state
            };
    }
}