import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToMyCart, decrementProductQty } from '../../redux/myCartSlice';
import styles from './style';
import Icon from '../../assets';
import { useNavigation, useRoute } from '@react-navigation/native';
import strings from '../../utils/strings';

interface CartItem {
  id: number;
  name: string;
  title: string;
  image: string;
  price: number;
  qty: number;
}

const CartScreen = () => {
  const navigation = useNavigation();
  
  const cart = useSelector((state: any) => state.cart.cart);
  const dispatch = useDispatch();

  const filteredCart = cart.filter((item: CartItem) => item.qty > 0);

  const handleIncrement = (item: CartItem) => {
    dispatch(addProductToMyCart(item));
  };

  const handleDecrement = (item: CartItem) => {
    if (item.qty > 0) {
      dispatch(decrementProductQty(item.id));
    }
  };

  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const getTotal = (): number => {
    let total = 0;
    cart.forEach((item: CartItem) => {
      total += item.qty * item.price;
    });
    return total;
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      <View style={styles.cartDetails}>
        <Text style={styles.cartName}>{item.name}</Text>
        <Text style={styles.cartName1}>{item.title}</Text>
      </View>

      <View style={styles.ok}>
        <View style={styles.cartActions}>
          <TouchableOpacity onPress={() => handleDecrement(item)}>
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={Icon.orangeLeftArrow} style={styles.drawerImage} />
          </TouchableOpacity>
          <Text style={styles.orderText}>{strings.Your_Order}</Text>
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
              <Text style={styles.emptyText}>{strings.Your_cart_is_empty}</Text>
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
              <Text style={styles.crownText}>{strings.Crowns}</Text>
              <Text style={styles.crownText2}>{strings.with_this_order}</Text>
            </View>

            <TouchableOpacity style={styles.tableNo}>
              <Text style={styles.TableText}>{strings.Table_no}</Text>
              <Text style={styles.TableText2}>{strings.Add_change}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.offer}>
            <View>
              <Text style={styles.offerText}>{strings.Offers}</Text>
              <Text style={styles.selectText}>{strings.Select_an_offer_code}</Text>
            </View>

            <TouchableOpacity>
              <Text style={styles.viewText}>{strings.View_offers}</Text>
            </TouchableOpacity>
          </TouchableOpacity>

          <View style={styles.Educate}>
            <View>
              <TouchableOpacity style={styles.checkbox} onPress={toggleCheckbox}>
                {isChecked && (
                  <View >
                    <Text style={styles.label}>✓</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.girlText}>{strings.Educate_a}</Text>
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
              <Text style={styles.reviewText}>
                Review Your order and address details to{"\n"} avoid cancellation details to avoid{"\n"} cancellation of your order
              </Text>
            </View>

            <View style={styles.review}>
              <Text style={styles.note}>Note:</Text>
              <Text style={styles.NoteText}>
                If you choose to cancel your order, you can do it only within 60 seconds after patching your order.
              </Text>
            </View>
          </View>

          <TouchableOpacity>
            <Text style={styles.termText}>Refer to Terms & Conditions</Text>
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
              <Text style={styles.chnageText}>Change</Text>
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
