import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414"
    },
    mainView: {
        flex: 1,
        backgroundColor: "#F5EADC",
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: "#512414",
        alignItems: "center",
        paddingHorizontal: vw(10),
        padding: vw(10),
    },
    drawerImage: {
        width: vw(30),
        height: vh(30),
    },
    menutext: {
        color: "white",
        fontSize: vw(22),
        fontWeight: "900",
        padding: vw(10)
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
    Earn:{
        justifyContent:"center",
        alignItems:"center",
        padding:vh(20),
    },
    EarnText:{
        fontSize:vh(20),
        fontFamily: 'FlameRegular',
        color:"#512414",
    },
 
})

export default styles;