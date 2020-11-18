import React from "react";
import { Provider } from "react-redux";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useFonts } from "expo-font";
import ForgotPasswordScreen from "screens/ForgotPasswordScreen";
import store from "redux_logic/store/store";
import Navigation from "screens/Navigation";

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
    let { path, queryParams } = Linking.parse(event.url);
    console.log(`Linked to app with data: parameters: ${queryParams}, token: ${queryParams.token}, destination: ${queryParams.destination}`);  
    navigationRef.current?.navigate(queryParams.destination, {
      token: queryParams.token,
    });
  });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </Provider>
  );
}
