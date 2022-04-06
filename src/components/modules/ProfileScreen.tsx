import React, { useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';


import { useDispatch, useSelector } from 'react-redux';
// import { deactivateKeepAwake } from "@sayem314/react-native-keep-awake";


// import {
//     accelerometer,
//     gyroscope,
//     setUpdateIntervalForType,
//     SensorTypes
// } from "react-native-sensors";



import { LoadingIndicator } from '../common';
import { useFocusEffect } from '@react-navigation/native';

// SetFavoritePlace

export default function ProfileScreen({ }) {

    //****************HOOKS
    // const dispatch = useDispatch();
    // const ws = useContext(WebSocketContext);
    // const geoLocationContext = useContext(GeoLocationtContext);
    // const { vehicleTypes, nearbyVehicles } = useSelector((state: { Vehicle: any }) => state.Vehicle);
    // const [deliverType, setDeliverType] = useState("people");
    // const [] = useState("");


    // useFocusEffect(
    //     React.useCallback(() => {
    //         deactivateKeepAwake();
    //     }, [])
    // );

    //UseEffects
    useEffect(() => {
    }, []);

    // const prevCurrentLocation = usePrevious(currentLocation);





    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile SCREEN</Text>
        </View >
    );
}

