import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles=StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#512414"
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
    menutext: {
        color: "white",
        fontSize: 25,
        fontWeight: "900",
        padding:10
    },
})

export default styles;