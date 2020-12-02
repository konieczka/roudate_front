import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  subsection: {
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 50,
  },

  header: { 
    fontSize: 40, 
    color: "white", 
    fontFamily: "Jost",
    textAlign: "center", 
    marginBottom: 40,
  },
  subheader: { 
    fontSize: 24, 
    color: "white", 
    fontFamily: "Jost",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  body: {
    fontSize: 24, 
    color: "white", 
    fontFamily: "Jost",
    textAlign: "center",
  },
  loginCta: {
    fontSize: 18,
    color: "white",
    fontFamily: "Jost",
    paddingBottom: 45,
  },
});

export default styles;
