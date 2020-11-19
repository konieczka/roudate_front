import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import profilePlaceholder from "assets/profilePlaceholder.png";
import magnifyingGlassPlaceholder from "assets/magnifyingGlassPlaceholder.png";
import chatPlaceholder from "assets/chatPlaceholder.png";
import profilePlaceholderHighlighted from "assets/profilePlaceholderHighlighted.png";
import magnifyingGlassPlaceholderHighlighted from "assets/magnifyingGlassPlaceholderHighlighted.png";
import chatPlaceholderHighlighted from "assets/chatPlaceholderHighlighted.png";
import styles from "./styles";

const menuIcons = [
    {
      image: profilePlaceholder,
    },
    {
      image: magnifyingGlassPlaceholder,
    },
    {
      image: chatPlaceholder,
    },
    {
      image: profilePlaceholderHighlighted,
    },
    {
      image: magnifyingGlassPlaceholderHighlighted,
    },
    {
      image: chatPlaceholderHighlighted,
    },
  ];

const BottomMenu = ({ currentTab }) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity activeOpacity={1} onPress={() => alert("dupa1")}>
          <Image
            style={styles.image}
            source={menuIcons[0 + ((currentTab==1)?3:0)].image}
          />
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={1} onPress={() => alert("dupa2")}>
          <Image
            style={styles.image}
            source={menuIcons[1 + ((currentTab==2)?3:0)].image}
          />
          </TouchableOpacity>
          
          <TouchableOpacity activeOpacity={1} onPress={() => alert("dupa3")}>
          <Image
            style={styles.image}
            source={menuIcons[2 + ((currentTab==3)?3:0)].image}
          />
          </TouchableOpacity>
            
        </View>
      );
};

export default BottomMenu;