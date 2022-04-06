import axios from "axios";
import { logout } from "../redux/actions";
import { store } from "../redux/reducers/store";
import { urls } from "../utils";
const { dispatch } = store;
const configAxios = () => {
    const UNAUTHORIZED = 401;

    // DEV
    axios.defaults.baseURL = urls.baseURL;


    axios.defaults.timeout = 10000;

    axios.defaults.withCredentials = true

    axios.interceptors.request.use(function (config) {
        // setTimeout(() => {
        //     console.log("noting");
            
        //     return Promise.reject();
        // }, 10000);
        config.timeout = 4000;
        return config;
        
    }, function (error) {

        // Do something with request error
        console.log("error time out");

        return Promise.reject(error);
    });


    axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
            dispatch(logout());
        }
        return Promise.reject(error);
    });
}

export default configAxios