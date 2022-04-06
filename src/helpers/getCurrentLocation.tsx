import Geolocation from '@react-native-community/geolocation';

function getGPSLocation() {

  return new Promise((res, rej) => {
    let options = { enableHighAccuracy: true }
    Geolocation.getCurrentPosition(res, rej, options);
    // navigator.geolocation.getCurrentPosition(res, rej);
  });

}
async function getCurrentLocation() {

  const location = await getGPSLocation();
  return { latitude: location.coords.latitude, longitude: location.coords.longitude, speed: location.coords.speed, heading: location.coords.heading };

}
export default getCurrentLocation;