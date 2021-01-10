import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import useGetProfile from "hooks/useGetProfile";
import GradientBackground from "components/GradientBackground";
import Spinner from "components/Spinner";
import { ROUDATE_CYAN, ROUDATE_VIOLET } from "consts/colors";

const WelcomeScreen = ({ navigation }) => {
  const { name, profile } = useSelector((state) => state.currentUser);
  const [, isProfileloading, hasProfileFinishedFetching] = useGetProfile();

  if (!isProfileloading && hasProfileFinishedFetching && !name) {
    <Spinner />;
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
        Hello {name}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        About me: {profile.aboutMe}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        Job title: {profile.jobTitle}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        Company: {profile.company}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        School: {profile.school}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        Interests:
        {`${profile.interests.favFood} |${profile.interests.favMusic} | ${profile.interests.favMovie} | ${profile.interests.favBook}`}
      </Text>
      <Text style={{ fontSize: 20, color: "white", fontFamily: "Jost" }}>
        Preferences:
        {`${profile.preferences.interestedIn} |${profile.preferences.ageMin} | ${profile.preferences.ageMax} | ${profile.preferences.distance}`}
      </Text>
    </View>
  );
};

export default WelcomeScreen;
