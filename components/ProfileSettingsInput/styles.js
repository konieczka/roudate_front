import { StyleSheet } from "react-native";
import { ROUDATE_VIOLET } from "consts/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    paddingHorizontal: 16,
    marginTop: 8,
  },
  inputLabel: {
    fontFamily: "Jost",
    fontSize: 18,
    color: ROUDATE_VIOLET,
  },
});

export default styles;
