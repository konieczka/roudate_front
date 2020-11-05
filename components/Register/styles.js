import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 50,
  },
  header: { fontSize: 40, color: "white", fontFamily: "Jost" },
  subheader: { fontSize: 24, color: "white", fontFamily: "Jost" },
});

export default styles;
