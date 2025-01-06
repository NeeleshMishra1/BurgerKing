import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";
import { Product } from "../../api/menu";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCart, decrementProductQty, incrementProductQty } from "../../redux/myCartSlice";

const Menu = () => {
  const [dataInMenu, setDataInMenu] = useState(Product || []);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state?.cart);

  const getTotal = () => {
    let total = 0;
    cart.forEach(item => {
      total = total + item.qty * item.price;
    });
    return total;
  };

  useEffect(()=>{
    setDataInMenu(Product.valueMeal)
  },[])
  const renderMealItem = ({ item }) => {
    const cartItem = cart.find(cartProduct => cartProduct.id === item.id);
    const quantity = cartItem ? cartItem.qty : 0;

    return (
      <View style={styles.mealItem}>
        <Image source={{ uri: item.image }} style={styles.mealImage} />
        <View style={styles.mealDetails}>
          <Text numberOfLines={1} style={styles.mealName}>{item.name}</Text>
          <Text numberOfLines={2} style={styles.mealTitle}>{item.title}</Text>
          <View style={styles.mealData}>
            <View style={styles.mealData2}>
              <Text style={styles.mealPrice}>₹ {item.price}</Text>

              {quantity === 0 ? (
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => {
                    dispatch(addProductToMyCart(item)); 
                  }}
                >
                  <Text style={styles.addButtonText}>Add +</Text>
                </TouchableOpacity>
              ) : (
                <>
                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                      dispatch(decrementProductQty(item.id));
                    }}
                  >
                    <Text style={styles.addButtonText}>-</Text>
                  </TouchableOpacity>

                  <Text style={{ padding: 2, paddingTop: 4 }}>{quantity}</Text>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                      dispatch(incrementProductQty(item.id)); 
                    }}
                  >
                    <Text style={styles.addButtonText}>+</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image source={Icon.drawerIcon} style={styles.drawerImage} />
          </TouchableOpacity>
          <Text style={styles.menutext}>{strings.our_menu}</Text>
          <TouchableOpacity style={styles.searchContainer}>
            {/* <Image source={Icon.search} style={styles.searchImage} /> */}
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row", flex: 1 }}>
          <View style={styles.slidebar}>
            <FlatList
              data={Product.menu}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.productItem} onPress={() => {
                    switch (item.id) {
                        case 0:
                            setDataInMenu(Product.whoppers)
                            break;
                        case 1:
                            setDataInMenu(Product.Bravages)
                            break;
                        case 2:
                            setDataInMenu(Product.whoppers)
                            break;
                        case 3:
                            setDataInMenu(Product.Burger)
                            break;
                        case 4:
                            setDataInMenu(Product["Crazy app"])
                            break;
                        case 5:
                            setDataInMenu(Product.snacks)
                            break;
                        case 6:
                            setDataInMenu(Product.Bravages)
                            break;
                        case 7:
                            setDataInMenu(Product.Desserts)
                            break;
                        case 8:
                            setDataInMenu(Product.valueMeal)
                            break;
                        case 9:
                            setDataInMenu(Product.Burger)
                            break;

                        default:
                            break;
                    
                  }
                }}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productText}>{item.title}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.productList}
            />
          </View>

          <View style={{ flex: 0.75 }}>
            <ScrollView>
              <View style={{ flex: 1 }}>
                <View style={styles.vegNon}>
                  <TouchableOpacity style={styles.veg}>
                    <Text style={styles.vegText}>VEG</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.NonVeg}>
                    <Text style={styles.vegText}>NON-VEG</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  data={dataInMenu}
                  renderItem={renderMealItem}
                  keyExtractor={(item) => item.id.toString()}
                  showsVerticalScrollIndicator={false}
                />
              </View>
            </ScrollView>
          </View>

          {cart.length > 0 && (
            <TouchableOpacity style={styles.bottomCart}  onPress={() => navigation.navigate("addToCart")}>
              <View style={styles.price}>
                <Text style={styles.priceText}>{getTotal()}</Text>
              </View>

              <View style={styles.item}>
                <Text style={styles.priceText}>{cart.length} Item</Text>
              </View>

              <TouchableOpacity style={styles.order} onPress={() => navigation.navigate("addToCart")}>
                <Text style={styles.priceText}>View Order 🛍️</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
  