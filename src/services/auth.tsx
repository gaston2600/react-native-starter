import axios from "axios";
// let CancelToken = axios.CancelToken;
const authService = {

    login: function (login, pass) {

        return new Promise((resolve, reject) => {
            return axios.post('users/login', {
                login,
                pass,

            })
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    getProfile: function (id: string) {

        return new Promise((resolve, reject) => {
            return axios.get(`users/get-one/${id}`)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    signup: function (data) {

        return new Promise((resolve, reject) => {
            return axios.post('users/signup', data)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    forgot: function (data) {

        return new Promise((resolve, reject) => {
            return axios.post('users/forgot-password/email', data)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    resetPassword: function (data) {

        return new Promise((resolve, reject) => {
            return axios.post('users/forgot-password/change-pass', data)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    verifyPhone: function (data) {

        return new Promise((resolve, reject) => {
            return axios.post('users/phone-verification/create', data)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    checkSmsCode: function (data) {

        return new Promise((resolve, reject) => {
            return axios.post('users/phone-verification/check-code', data)
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    logout: function () {

        return new Promise((resolve, reject) => {
            return axios.post('users/logout')
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },
    checkSession: function () {
   
        return new Promise((resolve, reject) => {
   
            return axios.post('users/check-session')
                .then(resp => {

                    resolve(resp);
                })
                .catch(e => {
                    console.log("check session error");
                    reject(e)
                })
        })
    },
    sendDriverRequest: function () {

        return new Promise((resolve, reject) => {
            return axios.post('users/drive-requests/create', {})
                .then(resp => {
                    resolve(resp);
                })
                .catch(e => reject(e))
        })
    },

}

export default authService;