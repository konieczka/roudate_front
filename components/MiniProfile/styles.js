import { StyleSheet } from "react-native";

const font = { fontFamily: "Jost", color: "white" };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    height: 120,
    marginTop: 75,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    paddingHorizontal: 15,
  },
  dataContainer: {
    color: "white",
    marginLeft: 10,
    height: "100%",
    marginBottom: 3,
    justifyContent: "center",
  },

  fieldBox: {
    display: "flex",
    flexDirection: "row",
  },

  interestsRow: {
    display: "flex",
    flexDirection: "row",
    width: 200,
    justifyContent: "space-between",
  },

  fieldLabel: {
    ...font,
    color: "black",
    fontSize: 15,
    marginLeft: 5,
  },

  nameLabel: {
    ...font,
    fontSize: 32,
    textShadowColor: "black",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    marginBottom: -5,
  },
});

export default styles;
