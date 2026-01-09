import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
// import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
 
   wettext:{
    fontWeight:"bold",
    position: "absolute",
    top: 60,
    fontSize: 22,
    color: COLORS.text,
    textAlign: "center",
    margin: "auto",
    alignSelf: "center",
   
  },

  welcome: {
    top:0,
    position: "relative",
    alignItems: "center",
    fontSize: 30,
    textAlign:"center",
    paddingHorizontal: 24,
    fontWeight: "bold",
    color: COLORS.text,
  },

 
  description: {
    fontSize: 14,
    color: COLORS.textLight,
    textAlign: "center",
    marginBottom: 20,
    // marginVertical: 52,
  },

  illustration: {
    height: 250,
    width: 280,
    resizeMode: "contain",
    position: "relative",
    alignContent: "center",
    margin: "10%",
    top: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: COLORS.text,
    marginVertical: 10,
    textAlign: "center",
  },
  label:{
    fontSize: 18,
    color: COLORS.text,
    marginBottom: 5,
    marginTop: 8,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
  },
  errorInput: {
    borderColor: COLORS.expense,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    padding: 16,
    alignItems: "center",
    marginTop: 1,
    marginBottom: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "600",
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  footerText: {
    color: COLORS.text,
    fontSize: 16,
  },
  linkText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  verificationContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  verificationTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 20,
    textAlign: "center",
  },
  verificationInput: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: 16,
    color: COLORS.text,
    width: "100%",
    textAlign: "center",
    letterSpacing: 2,
  },

  // 🔴 Error styles
  errorBox: {
    backgroundColor: "#FFE5E5",
    padding: 12,
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.expense,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  errorText: {
    color: COLORS.text,
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
  },
});
