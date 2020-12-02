import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  mainImage: {
    width: 196,
    height: 196,
    borderRadius: 30,
    margin: 8,
  },
  sideImages: {
    height: 90,
    width: 90,
    borderRadius: 15,
    margin: 8,
  },
});

export default styles;
