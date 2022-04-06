import NetInfo from "@react-native-community/netinfo";

export default function checkInternet() {
  return new Promise((res, rej) => {
    netInfoCheck(res, rej);
    // navigator.geolocation.getCurrentPosition(res, rej);
  });
};

async function netInfoCheck(res, rej) {

  NetInfo.fetch().then(state => {
    // console.log("Connection type", state.type);
    res(state.isConnected)
  });

}