import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "#512414"
    },
    mainView: {
        flex: 1,
        backgroundColor: "#edf0ee",
    },
    menu: {
        flexDirection: 'row',
        backgroundColor: "#512414",
        alignItems: "center",
        paddingHorizontal: vw(10),
    },
    menutext: {
        color: "white",
        fontSize: vw(25),
        fontWeight: "900",
        padding: vw(10),
        fontFamily: 'FlameRegular',
    },
    container: {
        padding: 20,
    },
    search: {
        flexDirection: "row",
        padding: 10,
        backgroundColor: 'white',
        borderRadius: vw(20)
    },
    searchImage: {
        width: vw(25),
        height: vh(25),
        padding:vw(5)
    },
    searchIcon: {
        width: vw(25),
        height: vh(25),
    },
    textInput: {
        paddingHorizontal: 10,
    },
    cleartext: {
        color: "orange",
        fontSize: vw(15),
    },
    ctext: {
        position: "absolute",
        right: 10,
        padding: vw(12),
    },
    storeContainer:{
        backgroundColor:"white",
        marginVertical:15,
        borderRadius:vh(5),
        padding:20,
    },
    Call:{
        flexDirection:'row',
        alignItems:'center',

    },
    callImage:{
        backgroundColor:'white',
        padding:vh(5),
        borderRadius:vh(20),
        position: "absolute",
        right: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1, 
    },
    text2:{
        paddingVertical:vh(10),
        color:"#512414",
        fontWeight:"500",
        fontSize:vw(12),
    },
    Call1:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:vh(15)
    },
    takeAway:{
        justifyContent:"space-between",
        flexDirection:'row',
        paddingVertical:10,
        borderTopWidth:1,
        borderColor:"#dbdbdb"
    },
    storeName:{
        fontSize:vw(16),
        fontFamily: 'FlameRegular',
        color:"#512414",
    },
    storeTime:{
        color:"#512414",
        fontWeight:"500",
        fontSize:vw(12),
    },
    text3:{
        color:"green",
        fontWeight:"500",
        fontSize:vw(12),
    },
    textAway:{
        color:"#512414",
        fontWeight:"500",
        fontSize:vw(12),
    }
})

export default styles;