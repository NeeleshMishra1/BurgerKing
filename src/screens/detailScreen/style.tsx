import { StyleSheet } from "react-native";
import { vw, vh } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#F5EADC",
    },
    arrowContainer: {
        paddingHorizontal: 20,
    },
    arrow: {
        width: 50,
        height: 50,
        padding: 5,
    },
    arrowImage: {
        width: 35,
        height: 35,
        resizeMode: "contain",
    },
    LoginContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    LoginImage: {
        width: vw(250),
        height: vh(190),
    },
    image: {
        // resizeMode: "contain",
        width: vw(250),
        height: vh(180),
    },
    oneText: {
        fontSize: 30,
        fontWeight: "700"
    },
    whatText: {
        fontSize: 18,
        fontWeight: "600",
        paddingTop: 10,
    },

    bottom: {
        backgroundColor: '#512414',
        position: 'absolute',
        bottom: 0, height: 100,
        zIndex: 999,
        borderWidth: 1,
        width: '100%',
        borderTopColor: "orange",
        borderTopWidth: 5,
    },
    redColor: {
        borderTopColor: "red",
        borderTopWidth: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    bottomText: {
        color: "white",
        fontSize: 13,
        fontWeight: "700",
    },
    bottomText1: {
        color: "white",
        fontSize: 13,
        fontWeight: "700",
        textDecorationLine: "underline"
    },
    name: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 50,
    },
    textInput: {
        fontSize: 20,
        margin: 5,
        paddingLeft: 10,
        marginBottom: 20,
    },
    nameInputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "65%",
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    done: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: 60,
        borderRadius: 100,
        backgroundColor: "#512414",
    },
    doneText: {
        color: "white",
        fontSize: 30,
        fontWeight: "700"
    },
    youText: {
        fontSize: 16,
        fontWeight: "600",
    }
});

export default styles;