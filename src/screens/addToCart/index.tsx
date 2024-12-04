import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, decrementProductQty } from '../../redux/myCartSlice';
import styles from './style';
import Icon from '../../assets';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const filteredCart = cart.filter((item) => item.qty > 0);

  const handleIncrement = (item) => {
    dispatch(addProductToMyCart(item));
  };

  const handleDecrement = (item) => {
    if (item.qty > 0) {
      dispatch(decrementProductQty(item.id));
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const getTotal = () => {
    let total = 0;
    cart.map(item => {
      total = total + item.qty * item.price;
    })
    return total;
  }

  const renderCartItem = ({ item }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartName1}>{item.title}</Text>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 10, }}>
        <View style={styles.cartActions}>
          <TouchableOpacity onPress={() => handleDecrement(item)} >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.cartQuantity}>{item.qty}</Text>
          <TouchableOpacity onPress={() => handleIncrement(item)}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.cartPrice}>₹ {item.qty * item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.order}>
        <View style={styles.headerOrder}>
          <TouchableOpacity onPress={() => {
            navigation.goBack()

          }}>
            <Image source={Icon.orangeLeftArrow} style={styles.drawerImage} />
          </TouchableOpacity>
          <Text style={styles.orderText}>Your Order</Text>
        </View>
        <ScrollView>
          <View style={{ flex: 1, padding: 20 }}>
            {filteredCart.length > 0 ? (
              <FlatList
                data={filteredCart}
                renderItem={renderCartItem}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
              />
            ) : (
              <Text style={styles.emptyText}>Your cart is empty.</Text>
            )}


            <View style={styles.nameInputContainer}>
              <Text style={styles.notepad}>🗒️</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Special instructions for your meal(optional)"
                keyboardType="default"
                maxLength={50}
              />
            </View>

          </View>
          <View style={styles.crown}>

            <View style={styles.crownReward}>
              <Text style={styles.crownText}>1,306 Crowns</Text>
              <Text style={styles.crownText2}>with this order!</Text>
            </View>

            <TouchableOpacity style={styles.tableNo}>
              <Text style={styles.TableText}>Table no.</Text>
              <Text style={styles.TableText2}>Add/change</Text>
            </TouchableOpacity>

          </View>

          <TouchableOpacity style={styles.offer}>
            <View >
              <Text style={styles.offerText}>Offers</Text>
              <Text style={styles.selectText}>Select an offer code</Text>
            </View>

            <TouchableOpacity >
              <Text style={styles.viewText}>View offers ►</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.Educate}>

            <View >
              <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
                {isChecked && (
                  <View style={styles.checkmark}>
                    <Text style={styles.label}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>

            </View>
            <View>
              <Text style={styles.girlText}>Educate a Girl child with room to Read</Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.girlText1}>in association with </Text>
                <TouchableOpacity>
                  <Text style={styles.girlText2}>Room to Read</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.educateText}> ₹ 2</Text>
          </View>

          <View>
            <View style={styles.orderTotal}>
              <Text style={styles.orderlText}>Order Total</Text>
              <Text style={styles.orderlText}> ₹{getTotal()}</Text>
            </View>

            <View style={styles.orderTotal}>
              <Text style={styles.orderlText}>Discount</Text>
              <Text style={styles.orderlText1}> -₹67</Text>
            </View>


            <View style={styles.orderTota1}>
              <Text style={styles.orderlText}>Taxes and  charges</Text>
              <Text style={styles.orderlText}> ₹8.46</Text>
            </View>

            <View style={styles.orderTota1}>
              <Text style={styles.orderlText}>Total Payable</Text>
              <Text style={styles.orderlText}> ₹{getTotal() - 67 + 8.46}</Text>
            </View>
          </View>

          <View style={styles.reviewContainer}>
            <View style={styles.review}>
              <Image style={styles.noteImage} source={Icon.document} />
              <Text style={styles.reviewText}>Review Your order and address details to{"\n"} avoid cancellation details to avoid {"\n"}cancellation of your order</Text>
            </View>

            <View style={styles.review}>
              <Text style={styles.note}>Note:</Text>
              <Text style={styles.NoteText}>If you choose to cancel your order,  you can do it only within 60 seconds after patching your order.</Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.termText}>Refer to Terms  & Conditions</Text>
          </TouchableOpacity>


        </ScrollView>

        <View style={styles.checkOut}>
          <View style={styles.checkOutImage}>
            <Image style={styles.storeImage} source={Icon.store_d} />
            <View>
              <Text style={styles.dineText}>Dine -In at Restaurant</Text>
              <Text style={styles.dineText}>DLF City Center Gurgaon</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.chnageText}>Chnage</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.checKButton}
            onPress={() => navigation.navigate('payment', { totalPayable: getTotal() - 67 + 8.46 })}
          >
            <Text style={styles.checkOutText}>CheckOut</Text>
          </TouchableOpacity>
        </View>


      </View>
    </SafeAreaView>

  );
};

export default CartScreen;
