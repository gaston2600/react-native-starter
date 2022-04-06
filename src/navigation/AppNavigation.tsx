import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DrawerNavigator from './DrawerNavigator';
import AuthStack from './stacks/AuthStack';
import { checkSession } from '../redux/actions';
import { LoadingIndicator } from '../components/common';
import { CHANGE_ORIENTATION, CHECK_SESSION_FAILED } from '../redux/types';
import { Dimensions } from 'react-native';
import TabNavigator from './TabNavigator';


export default function AppNavigation(props: any) {
  const dispatch = useDispatch();
  const { checkSessionLoading, userLoading, user } = useSelector((state: { User: { checkSessionLoading: boolean, userLoading: boolean; user: any; } }) => state.User);
  const [isConnected, setIsConnected] = useState(false);
  const [showPopUp, setshowPopUp] = useState(false)
  const [orientation, setOrientation] = useState("PORTRAIT");


  useEffect(() => {
    dispatch(checkSession());
    Dimensions.addEventListener('change', ({ window: { width, height } }) => {
      if (width < height) {
        dispatch({
          type: CHANGE_ORIENTATION,
          payload: "PORTRAIT",
        });
        setOrientation("PORTRAIT");
      } else {
        dispatch({
          type: CHANGE_ORIENTATION,
          payload: "LANDSCAPE",
        });
        setOrientation("LANDSCAPE")

      }


    })
  }, []);

  const auth =/*  !checkSessionLoading && */ user ? true : false;


  return (

    auth ? (

      // <DrawerNavigator {...props} />
      <TabNavigator {...props} />
    ) :
      (
        checkSessionLoading ? <LoadingIndicator />
          : <AuthStack {...props} />
      )

  )
}
// );

