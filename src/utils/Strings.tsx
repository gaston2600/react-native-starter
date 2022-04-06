// import * as RNLocalize from "react-native-localize";
import en from "../translation/EN";
import et from "../translation/ET";
import moment from 'moment';



// const etIndex = locales.map(local => {return local.languageCode}).indexOf('et');
// const enIndex = locales.map(local => {return local.languageCode}).indexOf('en');

let currentStrings ;
currentStrings = en ;
// if(enIndex == -1 && etIndex == -1){
//     currentStrings = fr ;
// }else if(etIndex == -1){
//     currentStrings = en;
// }else if(enIndex == -1){
//     currentStrings = fr;
// }else if(etIndex > enIndex){
//     currentStrings = en;
// }else{
//     currentStrings = fr ;
// }

export let Strings = currentStrings;


// export const setStringsForLanguage = (language,callback) => {
//     Strings = language === 1 ? en : et;
//     moment.locale(language ? "en" : "et");
//     callback();
// }


