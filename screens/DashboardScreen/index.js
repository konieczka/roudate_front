import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import dashboardLens from "assets/dashboardLens.png";
import GradientBackground from "components/GradientBackground";
import { ROUDATE_CYAN, ROUDATE_VIOLET } from "consts/colors";
import BottomMenu from "../../components/BottomMenu";

const DashboardScreen = ({ navigation }) => (
  <View
    style={{
      height: "100%"
    }}
  >
  <GradientBackground colors={[ROUDATE_VIOLET, ROUDATE_CYAN]} />
    <View
      style={{
        marginTop: 100,
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
        flex: 2,
        width: "100%",
        height: "100%"
      }}
    >
      <Text style={{ fontSize: 50, color: "white", fontFamily: "Jost", textAlign: "center"}}>
        <Text>Welcome back{"\n"}</Text>
        <Text style={{fontWeight: "bold"}}>insert-name-here</Text>
      </Text>
      
      <TouchableOpacity activeOpacity={1} onPress={() => alert("dupa")}>
        <Image marginTop={150} marginBottom={40} width={10} height={10} source={dashboardLens}/>
      </TouchableOpacity>
      <Text style={{ fontSize: 40, color: "white", fontFamily: "Jost", textAlign: "center"}}>
        New date
      </Text>
    </View>

    <View
      style={{
        justifyContent: "flex-end",
        flex: 1,
        width: "100%"
      }}
    >
      <BottomMenu currentTab="2"/>
    </View>
  </View>
);

export default DashboardScreen;
