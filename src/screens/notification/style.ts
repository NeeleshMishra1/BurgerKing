import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../utils/dimensions";


const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#512414",
  },
  main1: {
    flex: 1,
    backgroundColor: "#edf0ee",
  },
  header1: {
    height: Platform.OS === "ios" ? 50 : 70,
    backgroundColor: "#512414",
    paddingHorizontal: 30,
    alignItems: "center",
    flexDirection: "row"
  },
  arrowImage: {
    width: vw(25),
    height: vh(25),
    resizeMode: "contain",
    marginBottom: Platform.OS === "ios" ? 5 : 2,
  },
  recentText: {
    color: "#F3E8DB",
    fontSize: vw(20),
    fontWeight: "900",
    paddingHorizontal: 10,
    marginBottom: Platform.OS === "ios" ? 5 : 2,
    fontFamily: 'FlameRegular',
  },
  detailView: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: 'center'
  },
  logoImage: {
    width: vw(90),
    height: vh(90),
  },
  caughtUp: {
    paddingVertical: vw(20),
    fontWeight: "800",
    fontFamily: 'FlameRegular',
    fontSize: vw(22),
  }


})

export default styles;