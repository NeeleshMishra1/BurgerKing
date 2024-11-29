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
        padding: 10,
        fontFamily: 'FlameRegular'
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
    slidebar: {
        height: "99.12%",
        width: 120,
        flex: 0.25,
        marginTop: 5,
        borderRightWidth: 2,
        borderColor: "#c3c4c7",
    },
    productItem: {
        alignItems: "center",
        marginHorizontal: 5,
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
    },
    productImage: {
        width: 50,
        height: 50,
        marginBottom: 5,
    },
    productText: {
        textAlign: "center",
        fontSize: 15,
        color: "#333",
        fontWeight: "800",
        fontFamily: 'FlameRegular'
    },
    productList: {
        paddingBottom: 20,
    },
    veg: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "#512414",
        borderRadius: 20,
    },
    NonVeg: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginLeft: 10,
        backgroundColor: "#512414",
        borderRadius: 20,
    },
    vegText: {
        color: "white",
        fontWeight: "900",
        fontFamily: 'FlameRegular',
    },
    vegNon: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    mealItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 5,
        margin: 5,
        backgroundColor: "white",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 2,
    },
    mealImage: {
        width: 80,
        height: 110,
        marginRight: 15,
        resizeMode: "contain",
    },
    mealDetails: {
        flex: 1,
    },
    mealName: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#512414",
        marginBottom: 5,
        fontFamily: 'FlameRegular',
    },
    mealTitle: {
        fontSize: 12,
        marginBottom: 5,
        fontWeight: 400,
        color: "#512414"
    },
    mealPrice: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 10,
    },
    addButton: {
        alignSelf: "flex-start",
        backgroundColor: "red",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 5,
    },
    addButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        fontFamily: 'FlameRegular',
    },
    bottomCart: {
        width: "100%",
        height: vh(55),
        backgroundColor: "green",
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft:20,
    },
    price:{
        padding:10,
        borderRightWidth:1,
        borderRightColor:"grey"
    },
    priceText:{
        fontSize:20,
        fontWeight:"900",
        fontFamily: 'FlameRegular',
        color:'white',

    },
    item:{
        padding:10,
    },
    order:{
        position:"absolute",
        right:0,
        padding:10,
    }
})

export default styles;