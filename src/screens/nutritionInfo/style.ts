import { StyleSheet, Platform } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414",
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
        color: "white",
        fontSize: 22,
        fontWeight: "900",
        paddingHorizontal: 20,
        marginBottom: Platform.OS === "ios" ? 5 : 2,
    },
    detailView:{flex:1,
        backgroundColor:"#F5EADC",
        padding:20,
    }
})

export default styles;