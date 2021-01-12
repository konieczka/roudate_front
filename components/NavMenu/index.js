import React from "react";
import { View, TouchableHighlight } from "react-native";
import ProfileIcon from "assets/profile.svg";
import DashboardIcon from "assets/roulette.svg";
import ChatIcon from "assets/chat.svg";
import { ROUDATE_VIOLET } from "consts/colors";
import styles from "./styles";

const NavMenu = ({ navigation, currentScreen, absolute }) => (
  <View
    style={
      absolute
        ? { ...styles.container, position: "absolute", bottom: 0 }
        : styles.container
    }
  >
    {currentScreen === "profile" ? (
      <ProfileIcon width={45} height={45} fill={ROUDATE_VIOLET} />
    ) : (
      <TouchableHighlight
        onPress={() => navigation.navigate("ProfileSettings")}
      >
        <ProfileIcon width={45} height={45} fill="black" />
      </TouchableHighlight>
    )}

    {currentScreen === "dashboard" ? (
      <DashboardIcon width={45} height={45} fill={ROUDATE_VIOLET} />
    ) : (
      <TouchableHighlight onPress={() => navigation.navigate("DummyDashboard")}>
        <DashboardIcon width={45} height={45} fill="black" />
      </TouchableHighlight>
    )}

    {currentScreen === "chats" ? (
      <ChatIcon width={45} height={45} fill={ROUDATE_VIOLET} />
    ) : (
      <TouchableHighlight>
        <ChatIcon width={45} height={45} fill="black" />
      </TouchableHighlight>
    )}
  </View>
);

export default NavMenu;
