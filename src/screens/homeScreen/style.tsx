import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414"
    },
    mainView: {
        flex: 1,
        backgroundColor: "white",
    },
    DeliveryContainer: {
        height: vh(100),
        backgroundColor: "#512414",
        paddingTop:10,
    },
    Delivery: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#512414",
        paddingHorizontal: 10,
    },
    deliveryText: {
        fontSize: 17,
        fontWeight: "900",
        marginLeft:6,
        color: "#dbdad7"
    },
    switchView: {
        width: vw(60),
        height: vh(30),
        backgroundColor: "#6b443a",
        borderRadius: 50,
        justifyContent: "center",
        padding: 3,
        flexDirection: "row",
        marginHorizontal:10,
    },
    switch1: {
        width: vw(26),
        height: vh(24),
        borderRadius: 50
    },
    switch2: {
        width: vw(26),
        height: vh(24),
        borderRadius: 50
    },
    dine_in: {
        fontSize: 17,
        fontWeight: "900",
        color: "#dbdad7",
        fontFamily:""
    },
    drawerImage:{
        width: vw(30),
         height: vh(30), 
    },
    locationContainer:{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor:"#512414",
        paddingHorizontal: 10,
        paddingVertical:5,
    },
    storelocation:{
        width: vw(26),
        height: vh(25),   
    },
    dine_in_Text: {
        fontSize: 20,
        fontWeight: "900",
        marginLeft:6,
        color: "#EE7701"
    },
    storeChange:{
        flexDirection:"row"
    },
    storeChange1:{
        flexDirection:"row"
    },
    textInput: {
        fontSize: 20,
        borderLeftWidth: 1,
        margin: 5,
        paddingLeft: 10,
        backgroundColor:"white",
        paddingHorizontal:10,
        width:"58%",
        height:40,
        borderRadius:6,
    },
})

export default styles;