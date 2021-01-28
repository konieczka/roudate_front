import { StyleSheet } from "react-native";
import { ROUDATE_VIOLET, ROUDATE_CYAN } from "consts/colors";

const message = {
  width: 200,
  minHeight: 58,
  padding: 15,
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: 15,
  marginVertical: 5,
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 210,
  },
  messageSelf: {
    ...message,
    backgroundColor: ROUDATE_VIOLET,
    marginLeft: "45%",
    borderBottomRightRadius: 0,
  },
  messageDate: {
    ...message,
    backgroundColor: ROUDATE_CYAN,
    marginRight: "40%",
    borderBottomLeftRadius: 0,
  },
  messageContent: {
    fontFamily: "Jost",
    fontSize: 18,
    color: "white",
  },
  textInputWrapper: {
    width: "100%",
    height: 60,
    backgroundColor: ROUDATE_CYAN,
    display: "flex",
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  textInput: {
    width: "90%",
    height: '80%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontSize: 18
  },
});

export default styles;
