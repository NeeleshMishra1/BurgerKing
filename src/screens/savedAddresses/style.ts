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
        fontSize: vw(24),
        fontWeight: "900",
        paddingHorizontal: 20,
        marginBottom: Platform.OS === "ios" ? 5 : 2,
        fontFamily: 'FlameRegular',
    },
    detailView: {
        flex: 1,
        backgroundColor: "#F5EADC",
        padding: 20,
    },
    detait1: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    add: {
        padding: 10,
        paddingHorizontal: 15,
        backgroundColor: "red",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: 'center'
    },
    savedText: {
        fontSize: vw(20),
        color: "#512414",
        padding: 10,
        fontWeight: "800",
        fontFamily: 'FlameRegular',
    },
    addText: {
        fontSize: vw(15),
        color: "#F5EADC",
        fontWeight: "800",
        fontFamily: 'FlameRegular',
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },
    modalContent: {
        width: "90%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 15,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 15,
    },
    typeButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        alignItems: "center",
        marginHorizontal: 5,
    },
    submitButton: {
        backgroundColor: "#512414",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
    },
    submitButtonText: {
        color: "#fff",
        fontWeight: "bold",
    },
    cancelButton: {
        backgroundColor: "#ccc",
        padding: 15,
        borderRadius: 5,
        alignItems: "center",
        marginTop: 10,
    },
    cancelButtonText: {
        color: "#333",
    },
    addressContainer: {
        backgroundColor: "#fff",
        marginVertical: 10,
        borderRadius: 8,
    },
    addressType: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#512414",
    },
    addressText: {
        fontSize: 16,
        color: "#333",
        marginTop: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight:'700'
    },
    selectedText: {
        color: "white",
    },
    unselectedText: {
        color: "black",
    },
    selectedButton: {
        backgroundColor: "#512414",
    },
    addressInfo: {
        flex: 1,
        padding: 10,
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      
      menuButton: {
        fontSize: 24,
        color: "#512414",
        paddingHorizontal: 10,
      },
      
      menuContainer: {
        position: "absolute",
        right: 10,
        top: 30,
        backgroundColor: "#FFF",
        padding: 10,
        borderRadius: 8,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      
      menuItem: {
        fontSize: 16,
        paddingVertical: 5,
        color: "#512414",
      },
      
})

export default styles;