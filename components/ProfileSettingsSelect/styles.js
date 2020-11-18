import { StyleSheet } from "react-native";
import { ROUDATE_VIOLET } from "consts/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  selectLabel: {
    fontFamily: "Jost",
    fontSize: 18,
    color: ROUDATE_VIOLET,
    paddingHorizontal: 16,
  },
});

export default styles;
