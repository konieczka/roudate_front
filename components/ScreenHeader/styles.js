import { StyleSheet } from "react-native";
import { ROUDATE_VIOLET } from "consts/colors";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 75,
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: ROUDATE_VIOLET,
    paddingBottom: 16,
  },
  screenName: {
    fontFamily: "Jost",
    fontSize: 24,
    color: "white",
  },
});

export default styles;
