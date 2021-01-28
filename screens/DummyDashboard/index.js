import React, { useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import useGetProfile from "hooks/useGetProfile";
import useUpdateLocation from "hooks/useUpdateLocation";
import useMatching from "hooks/useMatching";
import GradientBackground from "components/GradientBackground";
import Spinner from "components/Spinner";
import ScreenHeader from "components/ScreenHeader";
import MiniProfile from "components/MiniProfile";
import Chat from "components/Chat";
import NavMenu from "components/NavMenu";
import SearchIcon from "assets/search.svg";
import { ROUDATE_CYAN, ROUDATE_VIOLET } from "consts/colors";

import { resetMatchedUser } from "redux_logic/actions/matchedUser";

const WelcomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.currentUser);
  const { isMatchedUserEstablished, matchedUser } = useSelector(
    (state) => state.matchedUser
  );

  const [, isProfileloading, hasProfileFinishedFetching] = useGetProfile();
  const [updateLocation, locationLoading] = useUpdateLocation();
  const startMatching = useMatching();

  console.log("MATCHED USER DEBUG", matchedUser);

  useEffect(() => {
    if (hasProfileFinishedFetching) {
      updateLocation();
    }
  }, [hasProfileFinishedFetching]);

  if (isProfileloading && !hasProfileFinishedFetching && !name) {
    <Spinner />;
  }

  if (isMatchedUserEstablished) {
    return (
      <View>
        <Chat />
        <MiniProfile matchedUser={matchedUser} />
        <ScreenHeader label="Date" />
        <TouchableHighlight
          style={{
            position: "absolute",
            backgroundColor: "red",
            top: 35,
          }}
          onPress={() => {
            dispatch(resetMatchedUser());
          }}
        >
          <Text>Reset date</Text>
        </TouchableHighlight>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
      <Text style={{ fontSize: 40, color: "white", fontFamily: "Jost" }}>
        Welcome back
      </Text>
      <Text
        style={{
          fontSize: 40,
          color: "white",
          fontFamily: "Jost",
          fontWeight: "bold",
        }}
      >
        {name}
      </Text>
      <TouchableHighlight
        onPress={() => {
          startMatching();
        }}
      >
        <SearchIcon width={250} height={250} fill="black" />
      </TouchableHighlight>
      <Text style={{ fontSize: 25, color: "white", fontFamily: "Jost" }}>
        New date
      </Text>

      <NavMenu navigation={navigation} currentScreen="dashboard" absolute />
    </View>
  );
};

export default WelcomeScreen;
