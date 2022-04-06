import React, { createContext, useEffect } from 'react'
import io from 'socket.io-client';

import { useDispatch, useSelector } from 'react-redux';
import { urls } from '../utils';
import { GET_NEARBY_TRIPS, GET_NEARBY_TRIPS_FAILED, GET_NEARBY_TRIPS_SUCCESS, INITIATE_TRIP, NEARBY_VEHICLES, TRIP_ACCEPTED, TRIP_FINISHED, TRIP_IN_PROGRESS, TRIP_RECEIVED, TRIP_TIMEOUT } from '../redux/types';
// import { updateChatLog } from './actions';

const WebSocketContext = createContext(null)

export { WebSocketContext }

export default ({ children }) => {
  let socket: any;
  let ws;
  useEffect(() => {
    socket = io(urls.apiURL,
      {
        transports: ['websocket'],
        forceNew: true,
        upgrade: false,
        autoConnect: true,
      }

    );
    console.log("SOCKET_CONNECT", socket);

  }, []);

  const dispatch = useDispatch();

  const login = () => {
    try {
      socket = io.connect(urls.apiURL)
      console.log("SOCKET_CONNECT");

    } catch (error) {
      console.log("SOCKET_CONNECT ERROR", error);

    }
  }
  const leave = (userId: string) => {
    try {
      socket.emit('LEAVE_SOCKET_' + userId)
      console.log("LEAVE_SOCKET", socket);

    } catch (error) {
      console.log("LEAVE_SOCKET ERROR", error);

    }

  }
  const refresh = (userId: string) => {
    try {
      socket.emit('LEAVE_SOCKET_' + userId);
      socket = io.connect(urls.apiURL);
      dispatch({
        type: INITIATE_TRIP,
        // payload: data,
      });

    } catch (error) {
      console.log("LEAVE_SOCKET ERROR", error);

    }

  }
  const getNearbyRequests = (userId: string, myPosition: {
    lat: number, lng: number, max_distance: number, heading: number, speed: number
  }) => {
    // console.log("TRACK_NEARBY_TRIPS_", myPosition);
    try {
      socket.emit('TRACK_NEARBY_TRIPS_' + userId, myPosition)


    } catch (error) {
      console.log("TRACK_NEARBY_TRIPS_ ERROR", error);

    }

  }
  const onNearbyTrips = (userId: string) => {
    // console.log("NEARBY_TRIPS_");
    dispatch({
      type: GET_NEARBY_TRIPS,
    });
    try {
      socket.on("NEARBY_TRIPS_" + userId, (data: any) => {
        console.log("NEARBY_TRIPS_", data);
        dispatch({
          type: GET_NEARBY_TRIPS_SUCCESS,
          payload: data,
        });

      });
    } catch (error) {
      console.log("TRACK_NEARBY_TRIPS_ ERROR", error);
      dispatch({
        type: GET_NEARBY_TRIPS_FAILED,
      });
    }
  }


  const trackTripError = (userId: string) => {

    try {
      socket.on("TRACK_TRIP_ERROR_" + userId, (data: any) => {
        // console.log("TRACK_TRIP_ERROR_" + userId, data);
      });
    } catch (error) {
      console.log("TRACK_TRIP_ERROR_ ERROR", error);
    }
  }

  const trackTrip = (userId: string, trip_id: any) => {
    console.log("TRACK_TRIP_", trip_id);
    try {
      socket.emit("TRACK_TRIP_" + userId, { trip_id });

    } catch (error) {
      console.log("TRACK_TRIP_ERROR", error);
    }

  }

  const findTrip = (userId: string) => {
    console.log("NEW_TRIP_" + userId);

    try {
      socket.on("NEW_TRIP_" + userId, (data: any) => {
        console.log("NEW_TRIP_", data);
        dispatch({
          type: TRIP_RECEIVED,
          payload: data,
        });
      });
      socket.on("TIMEOUT_TRIP_" + userId, (data: any) => {
        console.log("TIMEOUT_TRIP_", data);
        if (data.trip.status === "request")
          dispatch({
            type: TRIP_TIMEOUT,
            // payload: data,
          });
      });
    } catch (error) {
      console.log("NEW_TRIP_", error);
    }

  }

  const tripCallDriver = (userId: string, trip_id: any) => {
    console.log("TRIP_CALL_DRIVER", trip_id);
    try {
      socket.emit("TRIP_CALL_DRIVER_" + userId, { trip_id });
    } catch (error) {
      console.log("TRIP_CALL_DRIVER_ERROR", error);
    }

  }
  const stopTrackTrip = (userId: string) => {
    console.log("STOP_TRACK_TRIP_", userId);
    try {
      socket.emit("STOP_TRACK_TRIP_" + userId);
      dispatch({
        type: INITIATE_TRIP,
        // payload: data,
      });
    } catch (error) {
      console.log("STOP_TRACK_TRIP_ ERROR", error);
    }

  }

  const nearbyVehicles = (userId: string, tripId: string) => {
    console.log("TRIP_" + tripId + "_NEARBY_VEHICLE_" + userId);

    try {
      socket.on("TRIP_" + tripId + "_NEARBY_VEHICLE_" + userId, (data: any) => {

        dispatch({
          type: NEARBY_VEHICLES,
          payload: data,
        });
        dispatch({
          type: INITIATE_TRIP,
          // payload: data,
        });
      });
    } catch (error) {
      console.log("_NEARBY_VEHICLE_ ERROR", error);
    }
  }

  const acceptedTrip = (userId: string, tripId: string) => {
    console.log("TRIP_" + tripId + "_ACCEPTED_DATA_" + userId);

    try {
      socket.on("TRIP_" + tripId + "_ACCEPTED_DATA_" + userId, (data: any) => {

        dispatch({
          type: TRIP_ACCEPTED,
          payload: data,
        });
      });
    } catch (error) {
      console.log("_ACCEPTED_DATA_ ERROR", error);
    }
  }
  const tripInProgress = (userId: string, tripId: string) => {
    console.log("TRIP_" + tripId + "_IN_PROGRESS_DATA_" + userId);

    try {

      socket.on("TRIP_" + tripId + "_IN_PROGRESS_DATA_" + userId, (data: any) => {
        dispatch({
          type: TRIP_IN_PROGRESS,
          payload: data,
        });
      });
    } catch (error) {
      console.log("_IN_PROGRESS_DATA_ ERROR", error);
    }
  }
  const tripFinished = (userId: string, tripId: string) => {
    // console.log("TRIP_" + tripId + "_FINISHED_DATA_" + userId);

    try {
      socket.on("TRIP_" + tripId + "_FINISHED_DATA_" + userId, (data: any) => {

        dispatch({
          type: TRIP_FINISHED,
          // payload: data,
        });
      });

    } catch (error) {
      console.log("_FINISHED_DATA_ ERROR", error);
    }
  }

  const sendMyPosition = (userId: string, myPosition: {
    lat: number, lng: number, vehicle_id: string
    , speed: number
  }) => {

    try {
      socket.emit("REPOS_VEHICLE_" + userId, myPosition);
    } catch (error) {
      console.log("REPOS_VEHICLE_ ERROR", error);
    }
  }


  if (!socket) {
    socket = io.connect(urls.apiURL);

    ws = {
      socket: socket,
      leave,
      refresh,
      login,
      getNearbyRequests,
      onNearbyTrips,
      sendMyPosition,
      trackTrip,
      findTrip,
      tripCallDriver,
      nearbyVehicles,
      stopTrackTrip,
      acceptedTrip,
      tripInProgress,
      tripFinished,
      trackTripError
    }
  }

  return (
    <WebSocketContext.Provider value={ws}>
      {children}
    </WebSocketContext.Provider>
  )
}