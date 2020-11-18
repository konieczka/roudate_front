import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "screens/WelcomeScreen";
import RegisterScreen from "screens/RegisterScreen";
import LoginScreen from "screens/LoginScreen";
import ProfileSettingsScreen from "screens/ProfileSettingsScreen";

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {
  const isLoggedIn = useSelector((state) =>
    Boolean(state.currentUser.userAuthToken)
  );

  console.log(isLoggedIn);

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={isLoggedIn ? "WelcomeScreen" : "ProfileSettings"}
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
