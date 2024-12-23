import { StyleSheet } from "react-native";
import { vh, vw } from "../../utils/dimensions";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512414',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    marginTop: 20,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    paddingVertical: 15,
    borderBottomColor: "#c0c2c4",
  },
  cartImage: {
    width: vw(80),
    height: vh(80),
    borderRadius: 2,
  },
  cartDetails: {
    flex: 1,
    marginLeft: 10,
    marginTop: 10,
  },
  cartName: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'FlameRegular',
    color: '#512414',
  },
  cartName1: {
    fontSize: 12,
    fontFamily: 'FlameRegular',
    color: '#512414',
  },
  cartPrice: {
    fontSize: 22,
    color: '#333',
    padding: 10,
    color: '#512414',
    fontFamily: 'FlameRegular',
  },
  cartActions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: "red",
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  cartQuantity: {
    fontSize: 18,
    marginHorizontal: 10,
    color: "white"
  },
  order: {
    flex: 1,
    backgroundColor: '#F3E8DB',
  },
  drawerImage: {
    width: vw(30),
    height: vh(30),
  },
  headerOrder: {
    flexDirection: "row",
    padding: 10,
    paddingLeft: 20,
    paddingBottom: 15,
    backgroundColor: "#512414"
  },
  orderText: {
    color: "#F3E8DB",
    fontSize: 25,
    paddingLeft: 20,
    fontWeight: "900",
    fontFamily: 'FlameRegular'

  },
  whatText: {
    fontSize: 14,
    fontWeight: "800",
    fontFamily: 'FlameRegular',
    padding: 5,
  },
  switch: {
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: "#c0c2c4",
  },
  nameInputContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 5,
    alignItems: "center"
  },
  notepad: {
    padding: 15,
  },
  textInput: {
    fontSize: 15,
  },
  crown: {
    flexDirection: "row",
    marginTop: 30,
  },
  crownReward: {
    backgroundColor: '#512414',
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,

  },
  tableNo: {
    backgroundColor: "red",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  crownText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "#fa9819"
  },
  crownText2: {
    fontSize: 14,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "white"
  },
  TableText: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "white"
  },
  TableText2: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "#fa9819"
  },
  offer: {
    backgroundColor: "white",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  offerText: {
    fontSize: 25,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: '#512414',
  },
  selectText: {
    fontSize: 15,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: '#512414',
  },
  viewText: {
    position: "absolute",
    bottom: "0",
    right: 10,
    color: "red",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
  },
  Educate: {
    flexDirection: "row",
    paddingVertical: 30,
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#c0c2c4",
  },
  educateText: {
    position: "absolute",
    bottom: "0",
    right: 10,
    fontSize: 18,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
  },
  girlText: {
    fontSize: 16,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: '#512414',
    paddingLeft: 5,
  },
  girlText1: {
    color: '#512414',
    paddingLeft: 5,
  },
  girlText2: {
    color: 'blue',
    textDecorationLine: "underline"
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 3,
    borderColor: '#555',
    borderRadius: 4,
    backgroundColor: "white",
  },
  label: {
    fontSize: 20,
  },
  orderTotal: {
    padding: 20,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  orderlText: {
    fontSize: 17,
    fontFamily: 'FlameRegular',
    color: '#512414',

  },
  orderTota1: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#c0c2c4",
  },
  orderlText1: {
    fontSize: 17,
    fontFamily: 'FlameRegular',
    color: 'green',
  },
  checkOut: {
    backgroundColor: "#512414",
    padding: vw(20),
  },
  checkOutImage: {
    flexDirection: "row"
  },
  dineText: {
    fontSize: vw(20),
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "white",
    paddingHorizontal: vh(10),
  },
  storeImage: {
    width: vw(30),
    height: vh(30),
    marginTop: vh(10),
  },
  chnageText: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: 'FlameRegular',
    color: "#fa9819",
    paddingVertical: vh(20),
    paddingHorizontal: vw(5),
  },
  checKButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    padding: vw(10),
    borderRadius: 5,

  },
  checkOutText: {
    fontSize: vw(23),
    fontFamily: 'FlameRegular',
    fontWeight: "900",
    color: "white",
  },
  review: {
    flexDirection: "row",
    paddingVertical: vh(20),
    padding: vh(10),
  },
  reviewContainer: {
    padding: vw(10),
  },
  noteImage: {
    width: vw(40),
    height: vh(50),
    marginHorizontal: 5,
  },
  reviewText: {
    paddingHorizontal: vh(10),
    fontSize: vw(16),
    fontFamily: 'FlameRegular',
    fontWeight: "900",
    color: "#512414",
  },
  NoteText: {
    paddingHorizontal: 15,
    fontSize: vw(14),
    color: "#512414",
    fontWeight: "600",
  },
  note: {
    fontSize: vw(15),
    fontWeight: "800",
    fontFamily: 'FlameRegular',
    color: "red",
  },
  termText: {
    paddingHorizontal: 20,
    fontSize: vw(15),
    color: "red",
    textDecorationLine: "underline",
    marginBottom: 40,
  },
  ok:{
     justifyContent: "center",
      alignItems: "center",
       paddingHorizontal: 10 ,
  }
});
export default styles;
