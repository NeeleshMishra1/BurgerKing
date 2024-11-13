import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#F3E8DB",
        padding: 20,
    },
    imageContainer: {
        flexDirection: "row",
        marginTop: Platform.OS === 'ios' ? 45 : 0,
        justifyContent: "space-between"
    },
    arrowImage: {
        width: vw(25),
        height: vh(25),
        resizeMode: "contain",
    },
    avitarContainer: {
        flexDirection: "row",
    },
    avitarImage: {
        width: vw(80),
        height: vh(100),
    },
    detailContainer: {
        justifyContent: "center",
    },
    detailText: {
        fontSize: 22,
        fontWeight: "900",
        color: "#512414",
    },
    redeemContainer: {
        backgroundColor: "#512414",
        // height: vh(85),
        borderRadius: 15,
        padding:20,
        flexDirection:"row"
    },
    starImage:{
        width: vw(45),
        height: vh(45),
    },
    bkCrowns:{
        paddingHorizontal:Platform.OS === 'ios' ? 15 :25,
    },
    bkText:{
        color:"white",
        fontSize:20,
        fontWeight:"700"
    },
    bkText2:{
        color:"white",
        fontSize:15,
        fontWeight:"600"
    },
    redeem:{
        justifyContent:"center",
       paddingHorizontal:12,
       backgroundColor:"red",
       borderRadius:50, 
    },
    redeemText:{
        color:"white",
        fontSize:22,
        fontWeight:"700"
    },
    recentOrder:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
    },
    recentText:{
        paddingHorizontal:20,
        fontSize:21,
        fontWeight:"800",
        color:"#512414",
    },
    recentOrder1:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        paddingTop:10,
    },
    recentOrder2:{
        flexDirection:"row",
        alignItems:"center",
        padding:20,
        paddingTop:10,
        borderBottomWidth:1,
        borderBottomColor:"grey"
    }
})

export default styles;