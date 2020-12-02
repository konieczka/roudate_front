import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import ForgotPasswordScreen from "screens/ForgotPasswordScreen";
import WelcomeScreen from "screens/WelcomeScreen";
import RegisterScreen from "screens/RegisterScreen";
import LoginScreen from "screens/LoginScreen";
import PasswordResetScreen from "screens/PasswordResetScreen";
import * as Linking from 'expo-linking';

const { Navigator, Screen } = createStackNavigator();

// TODO: add prod/stage url depending on _DEV_ flag value
const client = new ApolloClient({
  uri: "http://10.0.2.2:8000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const [loaded] = useFonts({
    Jost: require("./assets/fonts/Jost-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }
  
  const navigationRef = React.createRef();

  Linking.addEventListener('url', event => {
    console.log(`Linked`);
    let { path, queryParams } = Linking.parse(event.url);
    console.log(`Linked to app with path: ${path} and data: ${JSON.stringify(queryParams)}`);  
    navigationRef.current?.navigate('PasswordResetScreen');
  });

  return (
    <ApolloProvider client={client}>
      <NavigationContainer ref={navigationRef}>
        <Navigator>
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
        </Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
