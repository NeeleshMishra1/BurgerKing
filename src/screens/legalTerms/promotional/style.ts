import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../../utils/dimensions";


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
    flex:1,
    margin:20,
    borderRadius:5,
  },
  india: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  indiaImage: {
    width: vw(60),
    height: vh(60),
  },
  indiaText: {
    color: "#512414",
    fontSize: vw(22),
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    paddingHorizontal: 10,
  },
  condition: {
    backgroundColor: 'white',
    marginTop: 30,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  rightImage: {
    width: vw(15),
    height: vh(15),
  },
  conditionText:{
    fontSize:vw(18),
    fontWeight:"600",
    fontFamily: 'FlameRegular',
    color: "#512414",
  },
  condition1: {
    backgroundColor: 'white',
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  termText:{
    padding:20,
    fontSize:vw(16),
    fontWeight:"900",
  },
  termText2:{
    padding:20,
    fontSize:vw(14),
    fontWeight:"400",
  }

})

export default styles;