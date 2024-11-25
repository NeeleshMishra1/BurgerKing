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
      fontSize: vh(26),
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
      marginHorizontal:10,
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
      marginBottom: 5,
      alignItems: 'center',
   },
   progressBarBackground: {
      width: '60%',
      height: 6,
      backgroundColor: '#E0E0E0',
      borderRadius: 3,
   },
   progressBarFill: {
      width: '40%',
      height: 6,
      backgroundColor: '#FF7F00',
      borderRadius: 3,
   },

   recommendedItem: {
      margin: vw(5),
  },
  recommendedImage: {
      width: vw(350), 
      height: vh(170), 
      borderRadius: 5,
      resizeMode:"contain",
  },
  recommendedList: {
      paddingHorizontal: vw(5),
  },

  crown:{
   width:"95%",
   height:60,
   backgroundColor:"#512414",
   margin:10,
   marginTop:40,
   borderRadius:50,
   justifyContent:"center",
   alignItems:"center"
  },
  crownText:{
   fontSize:22,
   fontWeight:"800",
   fontFamily: 'FlameRegular',
   color:"white"
  },
  bkWall:{
   margin:10,
   marginTop:20,
  },
  bkWallImage:{
   width:"100%",
   height: vh(200), 
   borderRadius:10,
  }
  

})

export default styles;