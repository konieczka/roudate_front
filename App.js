import React from "react";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import { useFonts } from "expo-font";
import store from "redux_logic/store/store";
import Navigation from "screens/Navigation";

const httpLink = createHttpLink({
  uri: "http://10.0.2.2:8000/graphql",
});

const wsLink = new WebSocketLink({
  uri: "ws://10.0.2.2:8000/graphql",
  options: {
    reconnect: true,
  },
});

const authLink = setContext(async (_, { headers }) => {
  const token = await AsyncStorage.getItem("@authToken");

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

// TODO: add prod/stage url depending on _DEV_ flag value
const client = new ApolloClient({
  link: splitLink,
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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </Provider>
  );
}
