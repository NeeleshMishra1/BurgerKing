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
        color: "white",
        fontSize: 22,
        fontWeight: "900",
        padding:10
    },
    searchImage: {
        width: vw(35),
        height: vh(30),
    },
    searchContainer:{
        width: vw(30),
        height: vh(30),
        alignItems: "center",
        position: "absolute",
        right: 0,
        marginRight: 20,
    }
})

export default styles;