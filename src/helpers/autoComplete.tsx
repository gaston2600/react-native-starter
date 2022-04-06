import googleService from '../services/google';


async function autoComplete(query: string, callback, callbackError) {

  googleService
    .autoComplete(query)
    .then((response: any) => {

      callback(response);
    })
    .catch(e => {
      console.log("error === ", e.response);

      callbackError(e.response);
    });

}
export default autoComplete;