import React from "react";
import { View, Text } from "react-native";
import BoyIcon from "assets/boy.svg";
import GirlIcon from "assets/girl.svg";

import PizzaIcon from "assets/pizza.svg";
import SuitcaseIcon from "assets/suitcase.svg";
import MusicIcon from "assets/music.svg";
import SchoolIcon from "assets/mortarboard.svg";
import BookIcon from "assets/open-book.svg";
import MovieIcon from "assets/video-player.svg";
import styles from "./styles";

const InterestsBox = ({ interests }) => (
  <View>
    <View style={styles.interestsRow}>
      {interests.favMovie ? (
        <View style={styles.fieldBox}>
          <MovieIcon width={15} height={15} />
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.fieldLabel}
          >
            {interests.favMovie}
          </Text>
        </View>
      ) : null}
      {interests.favMusic ? (
        <View style={styles.fieldBox}>
          <MusicIcon width={15} height={15} />
          <Text style={styles.fieldLabel}>{interests.favMusic}</Text>
        </View>
      ) : null}
    </View>

    <View style={styles.interestsRow}>
      {interests.favBook ? (
        <View style={styles.fieldBox}>
          <BookIcon width={15} height={15} />
          <Text style={styles.fieldLabel}>{interests.favBook}</Text>
        </View>
      ) : null}
      {interests.favFood ? (
        <View style={styles.fieldBox}>
          <PizzaIcon width={15} height={15} />
          <Text style={styles.fieldLabel}>{interests.favFood}</Text>
        </View>
      ) : null}
    </View>
  </View>
);

const MiniProfile = ({ matchedUser }) => (
  <View
    style={{
      ...styles.container,
      backgroundColor: matchedUser.gender === "m" ? "#ABDCFF" : "#FFC7EE",
    }}
  >
    {matchedUser.gender === "m" ? (
      <BoyIcon width={100} height={100} fill="white" />
    ) : (
      <GirlIcon width={100} height={100} fill="white" />
    )}
    <View style={styles.dataContainer}>
      <Text style={styles.nameLabel}>{`${matchedUser.name}`}</Text>

      {matchedUser.jobTitle ? (
        <View style={styles.fieldBox}>
          <SuitcaseIcon width={15} height={15} />
          <Text style={styles.fieldLabel}>
            {matchedUser.company
              ? `${matchedUser.jobTitle} at ${matchedUser.company}`
              : matchedUser.jobTitle}
          </Text>
        </View>
      ) : null}

      {matchedUser.school ? (
        <View style={styles.fieldBox}>
          <SchoolIcon width={15} height={15} />
          <Text style={styles.fieldLabel}>{matchedUser.school}</Text>
        </View>
      ) : null}

      {matchedUser.interests && (
        <InterestsBox interests={matchedUser.interests} />
      )}
    </View>
  </View>
);

export default MiniProfile;
