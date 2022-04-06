import { Alert } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default async function pickImage() {
  let options = {
    title: 'You can choose one image',
    maxWidth: 256,
    maxHeight: 256,
    // storageOptions: {
    //   skipBackup: true
    // }
  };
  // const source = await imagePicker(options);
  // console.log("source", source);
  return new Promise((res, rej) => {
    return imagePicker(options, res, rej);
  });

};
function imagePicker(options: any, resolve, reject) {
  ImagePicker.launchImageLibrary(options, res => {

    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
      reject(res.error);
    } else {
      let source = res;
      resolve(source);
    }
  });
}
