import React, { createContext, useEffect, useState } from 'react'

import { useDispatch } from 'react-redux';

import { Alert, Linking, PermissionsAndroid, Platform } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { SET_USER_LOCATION } from '../redux/types';

const GeoLocationtContext = createContext(null)

export { GeoLocationtContext }

export default ({ children }) => {
  const [granted, setPermissionGranted] = useState(false)
  const [distanceLimit, setDistanceLimit] = useState(10)
  let geoLocation;
  useEffect(() => {
    getLocationPermission();
    // socket = io(urls.apiURL, { transports: ['websocket'] });
    // console.log("SOCKET_CONNECT", socket);

  }, []);

  const dispatch = useDispatch();
  async function getLocationPermission() {
    if (Platform.OS === "android") {
      try {
            /* const granted = await */ PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // {
        //   title: "GreenRide Location Permission",
        //   message:
        //     "App needs access to your location " ,
        //   // buttonNeutral: 'Ask Me Later',
        //   buttonNegative: 'Cancel',
        //   buttonPositive: 'OK',
        // }
      ).then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission allowed");
          setPermissionGranted(true);
          // getMyLocation();


        } else {
          console.log("Location permission denied");
          setPermissionGranted(false);
          // Linking.openSettings();

        }
      })
          .catch(err => console.log(err));
        // console.log(granted);

      } catch (err) {
        console.log(err);
      }
    }
  }

  const watchPosition = async () => {
    try {
      await getLocationPermission();
      if (granted) {
        Geolocation.watchPosition((location) => {
          setDistanceLimit(Number(Math.pow(Math.round(location?.coords.speed * 0.1) * 15, 2) + 10));
          const myPosition = { latitude: location.coords.latitude, longitude: location.coords.longitude, speed: location.coords.speed ? location.coords.speed * 3.6 : 0, heading: location.coords.heading };
          dispatch({
            type: SET_USER_LOCATION,
            payload: myPosition,
          });
        }, (error) => {
          console.log("error", error);


        }, { enableHighAccuracy: true, distanceFilter: distanceLimit, timeout: 10000, useSignificantChanges: true });

      } else {
        console.log("watchPosition granted", granted);

        // Alert.alert("", "Location permission denied, please allow GreenRide to get access to your location.",
        //   [
        //     {
        //       text: "Cancel",
        //       onPress: () => console.log("Cancel Pressed"),
        //       style: "cancel"
        //     },
        //     { text: "OK", onPress: () => getLocationPermission() }
        //   ],
        //   { cancelable: true }
        // );

      }
    } catch (err) {
    }
  }

  const getCurrentPosition = async () => {
    try {
      await getLocationPermission();

      if (granted) {
        Geolocation.getCurrentPosition((location) => {

          const myPosition = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            speed: location.coords.speed ? location.coords.speed * 3.6 : 0,
            heading: location.coords.heading
          };

          dispatch({
            type: SET_USER_LOCATION,
            payload: myPosition,
          });

        }, (error) => {
          console.log("error", error);

          // Alert.alert("", "Location information is not available, please make sure to turn on your location.");

        }, { enableHighAccuracy: true, distanceFilter: distanceLimit, timeout: 10000, useSignificantChanges: true });
      } else {
        console.log("getCurretLocation granted", granted);

        // Alert.alert("", "Location permission denied, please allow GreenRide to get access to your location.",
        //   [
        //     {
        //       text: "Cancel",
        //       onPress: () => console.log("Cancel Pressed"),
        //       style: "cancel"
        //     },
        //     { text: "OK", onPress: () => getLocationPermission() }
        //   ],
        //   { cancelable: true }
        // );

      }
    } catch (err) {


    }
  }


  geoLocation = {
    watchPosition,
    getCurrentPosition
  }


  return (
    <GeoLocationtContext.Provider value={geoLocation}>
      {children}
    </GeoLocationtContext.Provider>
  )
}