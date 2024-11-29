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
        width: vw(250),
        height: vh(180),
    },
    loginText: {
        fontSize: 25,
        fontWeight: "700"
    },
    enterText: {
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    enterText1: {
        fontSize: 20,
        fontWeight: "500"
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
    phoneNumber: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
    textInput: {
        fontSize: 20,
        borderLeftWidth: 1,
        margin: 5,
        paddingLeft: 10,
    },
    phoneInputContainer: {
        flexDirection: "row",
        borderBottomWidth: 1,
        width: "85%",
    }, countryCode: {
        padding: 10,
        paddingLeft: 0,
        fontSize: 20,
        color: "#512414"
    },
    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    getOtp: {
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        height: 60,
        borderRadius: 100,
        backgroundColor: "#512414",
    },
    getOtpText: {
        color: "white",
        fontSize: 25,
        fontWeight: "700"
    }
});

export default styles;