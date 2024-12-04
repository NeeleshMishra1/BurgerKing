import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414",
    },
    main1:{
        flex: 1,
        backgroundColor:"#F5EADC",
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
        fontSize: 22,
        fontWeight: "900",
        paddingHorizontal: 20,
        marginBottom: Platform.OS === "ios" ? 5 : 2,
        fontFamily: 'FlameRegular',
    },
    detailView:{
        backgroundColor:"#F5EADC",
        padding:20,
    },
    aboutText:{
        paddingVertical:10,
        fontSize:vw(22),
        fontWeight:'800',
        fontFamily: 'FlameRegular',
        color:'#512414',
      },
      question:{
        backgroundColor:'white',
        padding:15,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:5,
      },
      questionText:{
        fontSize:vw(17),
        fontWeight:"800",
        color:'#512414',
        fontFamily: 'FlameRegular',
      },
      arrowText:{
        fontSize:vw(22),
        fontWeight:"800",
        color:'#512414',
      },
      answer: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#F5F5F5",
        paddingVertical: 10,
        borderRadius: 5,
        borderTopLeftRadius:0,
        borderTopRightRadius:0,
    },
    answerText: {
        fontSize: 16,
        color: "#333",
    },
    question1:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        flexDirection:'row',
        justifyContent:"space-between",
        marginTop:10,
      },
})

export default styles;