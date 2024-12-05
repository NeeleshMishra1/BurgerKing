import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#512414",
  },
  header1: {
    height: Platform.OS === "ios" ? 50 : 70,
    backgroundColor: "#512414",
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  arrowImage: {
    width: vw(25),
    height: vh(25),
    resizeMode: "contain",
    marginBottom: Platform.OS === "ios" ? 5 : 2,
  },
  recentText: {
    color: "#F3E8DB",
    fontSize: vw(22),
    fontWeight: "900",
    paddingHorizontal: 20,
    marginBottom: Platform.OS === "ios" ? 5 : 2,
    fontFamily: 'FlameRegular',
  },
  detailView: {
    paddingHorizontal: 20,
  },
  logoImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  burgerImage: {
    width: vw(280),
    height: vh(180),
  },
  videoContainer: {
    width: "100%",
    height: vh(180),
    marginTop: 20,
    overflow: "hidden",
  },
  haveit: {
    width: "100%",
    height: vh(200),
    resizeMode: "cover",
  },
  videoPlayer: {
    width: "100%",
    height: "100%",
  },
  aboutText: {
    paddingVertical: 20,
    fontSize: vw(22),
    fontWeight: '800',
    fontFamily: 'FlameRegular',
    color: '#512414',
  },
  ok:{
    flex: 1, 
    backgroundColor: "#F5EADC",
  }
});

export default styles;
