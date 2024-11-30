import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414"
    },
    mainView: {
        flex: 1,
        backgroundColor: "#F3E8DB",
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: "#512414",
        alignItems: "center",
        paddingHorizontal: 10,
        padding: 10,
    },
    drawerImage: {
        width: vw(30),
        height: vh(30),
    },
    menutext: {
        color: "#F3E8DB",
        fontSize: vw(25),
        fontWeight: "900",
        padding: 10,
        fontFamily: 'FlameRegular',
    },
    searchImage: {
        width: vw(35),
        height: vh(30),
    },
    searchContainer: {
        width: vw(30),
        height: vh(30),
        alignItems: "center",
        position: "absolute",
        right: 0,
        marginRight: 20,
    },
    Deliver: {
        padding: vw(10),
        paddingHorizontal: vw(15),
        backgroundColor: "white"
    },
    DeliverContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    DeliverContainer1: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 10,
    },
    Delivertext: {
        fontSize: 17,
        fontWeight: "400",
        fontFamily: 'FlameRegular',
        color: "#bfbcbb"
    },
    Hometext: {
        fontSize: 18,
        fontWeight: "700",
    },
    upitext: {
        padding: vw(20),
        fontWeight: "700",
        fontFamily: 'FlameRegular',
        fontSize: vw(20),
        color: "#512414"

    },
    gpay: {
        flexDirection: "row",

    },
    paytmImage: {
        width: vw(45),
        height: vh(45),
        borderWidth: 1,
        borderColor: "#bfbcbb",
        borderRadius: 5,
        margin: 20,
        marginBottom: 10,
    },
    gpayImage: {
        width: vw(45),
        height: vh(45),
        borderWidth: 1,
        borderColor: "#bfbcbb",
        borderRadius: 5,
        margin: 20,
        padding: 3,
        marginBottom: 10,
    },
    paytmText: {
        margin: 20,
        marginVertical: 10,
        fontSize: vw(17),
        color:"#512414",

    },
    other: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
        padding: vh(15),
        borderWidth: 1,
        borderColor: "#bfbcbb",
        borderRadius: 5,
    },
    otherText: {
        color: "red",
        fontSize: vw(17),
        fontWeight: "600"
    },
    card: {
        padding: vw(10),
        paddingHorizontal: vw(15),
        backgroundColor: "white",
        flexDirection:"row",
        alignItems:'center'
    },
    cardImage: {
        width: vw(40),
        height: vh(40),
        borderWidth: 1,
        borderColor: "#bfbcbb",
        borderRadius: 5,
        margin: 10,
        padding:vw(7),
    },
    cardText:{
        margin: 10,
        padding:vw(7),
        color: "#512414",
        fontSize: vw(17),
        fontWeight: "600"
    },
    arrowImage:{
        width: vw(30),
        height: vh(30),
        margin: 10,
        padding:vw(7),
        position:"absolute",
        right:10,
    },
    Netbanking: {
        padding: vw(10),
        paddingHorizontal: vw(15),
        backgroundColor: "white",
        marginBottom:70,
    },
    pay:{
        backgroundColor: "#512414",
        justifyContent:"center",
        padding:20,
    },
    proceed:{
        backgroundColor:"red",
        alignItems:'center',
        padding:vh(15),
        borderRadius:10,
    },
    proceedText:{
        fontSize:vw(22),
        color:"#F3E8DB",
        fontFamily: 'FlameRegular',
    },
    checkIcon: {
        width: vw(20),
        height: vh(20),
        position: "absolute",
        top: vw(10),
        right:vw(10),
        tintColor: "black", 
    },
    
})

export default styles;