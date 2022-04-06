import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/modules/HomeScreen';
import ProfileScreen from '../components/modules/ProfileScreen';
import Icon from '@styles/icons';
import colors from '@styles/colors';
import { LoginScreen } from '../components/modules/Auth';
import { TouchableOpacity } from 'react-native';
import { navigate } from './NavigationService';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/actions';


export default function TabNavigator(props: any) {
  const Tab = createBottomTabNavigator();
  const dispatch = useDispatch();

  return (

    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomeScreen} />
    //   <Tab.Screen name="Profile" component={ProfileScreen} />
    // </Tab.Navigator>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case "Home":
              iconName = focused
                ? 'md-home-sharp'
                : 'md-home-outline';
              break;
            case "Profile":
              iconName = focused
                ? 'person-sharp'
                : 'person-outline';
              break;
            case "Logout":
              iconName = "md-log-in-outline"

            default:
              break;
          }


          // You can return any component that you like here!
          return <Icon.Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.gray,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Logout" component={LoginScreen} options={{
        tabBarButton: (props) => (<TouchableOpacity  {...props}
          onPress={() => {
            dispatch(logout());
          }} />)
      }} />
    </Tab.Navigator>
  );
}


