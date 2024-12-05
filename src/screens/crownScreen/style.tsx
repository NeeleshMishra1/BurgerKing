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
        padding: vw(10),
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
    Earn: {
        justifyContent: "center",
        alignItems: "center",
        padding: vh(20),
    },
    EarnText: {
        fontSize: vh(20),
        fontFamily: 'FlameRegular',
        color: "#512414",
    },
    crownPoint: {
        height: 220,
    },
    crownImage: {
        width: "100%",
        height: vh(220),
        resizeMode: "contain",
    },
    workContainer: {
        margin: vh(20),
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: "#dbdbdb",
    },
    workText: {
        fontSize: vh(20),
        fontFamily: 'FlameRegular',
        color: "#512414",
        paddingVertical: 10,
    },
    earnText: {
        fontSize: vw(13),
        color: "#512414",
        paddingBottom: 10,

    },
    detailView: {
        backgroundColor: "#F5EADC",
        padding: 20,
    },
    aboutText: {
        paddingVertical: 10,
        fontSize: vw(22),
        fontWeight: '800',
        fontFamily: 'FlameRegular',
        color: '#512414',
    },
    question: {
        backgroundColor: '#F5EADC',
        padding: 15,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginVertical: 5,
    },
    questionText: {
        fontSize: vw(17),
        fontWeight: "600",
        color: '#512414',
    },
    arrowText: {
        fontSize: vw(22),
        fontWeight: "800",
        color: '#512414',
    },
    answer: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#F5EADC",
        paddingVertical: 10,
        borderRadius: 5,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
    },
    answerText: {
        fontSize: 16,
        color: "#512414",
    },
    question1: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 10,
    },
    faqView: {
        justifyContent: 'center',
        alignItems: "center"
    }

})

export default styles;