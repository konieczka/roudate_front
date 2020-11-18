import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  establishCurrentUser,
  establishCurrentUserSuccess,
  establishCurrentUserFailure,
} from "redux_logic/actions/currentUser";
import WelcomeScreen from "screens/WelcomeScreen";
import RegisterScreen from "screens/RegisterScreen";
import LoginScreen from "screens/LoginScreen";
import ProfileSettingsScreen from "screens/ProfileSettingsScreen";

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {
  const [wasLaunched, setWasLaunched] = useState(false);
  const dispatch = useDispatch();
  const { isLoggedIn, isEstablished } = useSelector((state) => {
    return {
      isLoggedIn: Boolean(state.currentUser.userAuthToken),
      isEstablished: state.currentUser.isUserEstablished,
    };
  });

  useEffect(() => {
    const setToken = async () => {
      const token = await AsyncStorage.getItem("@authToken");

      if (token !== null) {
        dispatch(establishCurrentUserSuccess({ token }));
      } else {
        dispatch(establishCurrentUserFailure("User not logged in"));
      }

      setWasLaunched(true);
    };

    dispatch(establishCurrentUser());
    setToken();
  }, []);

  if (!wasLaunched && !isEstablished) {
    return null;
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={!isLoggedIn ? "WelcomeScreen" : "ProfileSettings"}
      >
        <Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="ProfileSettings"
          component={ProfileSettingsScreen}
          options={{
            headerShown: false,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
