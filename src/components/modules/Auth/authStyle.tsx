import { StyleSheet } from "react-native";
import { colors } from "../../../styles";
import { width } from "../../common";

const authStyle = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
  },
  logincontainer: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20
  },
  description: {
    color: colors.grey,
    fontSize: 12,
    marginVertical: 5
  },
  textInput: {
    height: 40,
    width: '100%',
    margin: 10,
    backgroundColor: 'white',
    borderColor: 'gray',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
  submitButton: {
    color: colors.primary
  },
  text: {
    fontSize: 14,
    color: colors.primary,
    textAlign: "center"
  },
  loginInputs: {
    width: '90%'
  },
  signupButton: {
    marginVertical: 10
  },
  coverContainer: { flex: 1, width: width + (width * 0.35), alignSelf: "center", backgroundColor: colors.primary, borderBottomRightRadius: 300, borderBottomLeftRadius: 300, justifyContent: "flex-end" },
  coverImage: { marginRight: 12, height: "70%", width: "40%", alignSelf: "center" },
  contentContainer: { flex: 0.2, marginHorizontal: 10, marginBottom: 0 },
  digitInput: { flex: 1, margin: 20, minHeight: 50 },
  policy: { fontSize: 12, fontWeight: "bold", color: colors.black },
  languages: { maxHeight: 30, flexDirection: "row", alignSelf: 'center', marginVertical: 15 },
  languageSelect: { flexDirection: "row", alignItems: "center", marginHorizontal: 10 },




  input: {
    // width:width*0.6,
    // borderWidth:1,
    margin: 10
  },

  inputError: {
    fontSize: 12,
    color: 'red',
    paddingHorizontal: 10,
  },

});

export default authStyle;