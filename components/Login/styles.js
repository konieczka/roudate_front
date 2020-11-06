import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  fbButton: {
    paddingVertical: 10,
  },
  subsection: {
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 50,
  },
  header: { fontSize: 40, color: "white", fontFamily: "Jost" },
  subheader: { fontSize: 24, color: "white", fontFamily: "Jost" },
  passwordCta: {
    fontSize: 18,
    color: "white",
    fontFamily: "Jost",
    paddingBottom: 45,
  },
});

export default styles;
