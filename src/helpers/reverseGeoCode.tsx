import googleService from '../services/google';


async function reverseGeoCode(lat, lng, callback, callbackError) {

  googleService
    .reverseGeoCode(lat, lng)
    .then((response: any) => {

      callback(response);
    })
    .catch(e => {
      console.log("error === ", e);

      callbackError(e.response);
    });

}
export default reverseGeoCode;