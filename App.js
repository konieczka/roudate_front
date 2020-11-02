import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import WelcomeScreen from "screens/WelcomeScreen";

const { Navigator, Screen } = createStackNavigator();

// TODO: add prod/stage url depending on _DEV_ flag value
const client = new ApolloClient({
  uri: "localhost:8000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  const [loaded] = useFonts({
    Jost: require("./assets/fonts/Jost-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false }}
          />
        </Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
