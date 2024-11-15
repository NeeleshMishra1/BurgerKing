import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
   main: {
      flex: 1,
   },
   imageContainer: {
      height: vh(200),
   },
   ourText: {
      fontSize: 26,
      fontWeight: "900",
      padding: 20,
      paddingTop: 10,
      color: "#512414",
      fontFamily: 'FlameRegular',
   },

   container: {
      padding: 2,
   },
   menuItem: {
      alignItems: 'center',
      marginHorizontal: 12,
      margin: 10,
   },
   menuImage: {
      width: vw(80),
      height: vh(80),
      resizeMode: 'contain',
   },
   menuText: {
      marginTop: 5,
      fontSize: 14,
      textAlign: 'center',
      fontFamily: 'FlameRegular',
      color: "#512414",
   },
   progressBarContainer: {
      marginVertical: 5,
      alignItems: 'center',
   },
   progressBarBackground: {
      width: '60%',
      height: 6,
      backgroundColor: '#E0E0E0',
      borderRadius: 3,
   },
   progressBarFill: {
      width: '80%',
      height: 6,
      backgroundColor: '#FF7F00',
      borderRadius: 3,
   },

})

export default styles;