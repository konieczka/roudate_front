import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "screens/WelcomeScreen";
import RegisterScreen from "screens/RegisterScreen";
import LoginScreen from "screens/LoginScreen";
import PasswordResetScreen from "screens/PasswordResetScreen";
import PasswordResetRequestedScreen from "screens/PasswordResetRequestedScreen";
import PostSignupScreen from "screens/PostSignupScreen";
import VerifyEmailScreen from "screens/VerifyEmailScreen";
import SuccessfullyVerifiedScreen from "screens/SuccessfullyVerifiedScreen";
import ProfileSettingsScreen from "screens/ProfileSettingsScreen";

const { Navigator, Screen } = createStackNavigator();

const Navigation = () => {
  const isLoggedIn = useSelector((state) =>
    Boolean(state.currentUser.userAuthToken)
  );

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={isLoggedIn ? "WelcomeScreen" : "ProfileSettings"}
      >
        <Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="PasswordResetScreen"
          component={PasswordResetScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="PasswordResetRequestedScreen"
          component={PasswordResetRequestedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="PostSignupScreen"
          component={PostSignupScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="VerifyEmailScreen"
          component={VerifyEmailScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="SuccessfullyVerifiedScreen"
          component={SuccessfullyVerifiedScreen}
          options={{
            headerShown: false,
          }}
        />
        <Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
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
