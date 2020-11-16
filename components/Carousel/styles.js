import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 328,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    position: "absolute",
    width: 256,
    padding: 10,
    fontFamily: "Jost",
    bottom: 0,
  },
  header: {
    fontSize: 28,
    color: "white",
    paddingVertical: 2,
  },
  description: {
    fontSize: 16,
    color: "white",
  },
  image: {
    borderRadius: 10,
  },
});

export default styles;
