import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, FlatList, ScrollView, Alert } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";
import { Product } from "../../api/menu";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addProductToMyCart, decrementProductQty } from "../../redux/myCartSlice";
import { decreaseQty, increseQty } from "../../redux/myProductSlice";


const Menu = () => {
    const [dataInMenu, setDataInMenu] = useState(Product || []);
    const navigation = useNavigation();
    const products = useSelector((state) => state.Product);
    const dispatch = useDispatch();

    const { cart } = useSelector((state) => {
        return state?.cart;
    });

    // console.log("Current cart items:", cart.length);

    const getTotal = () => {
        let total = 0;
        cart.map(item => {
            total = total + item.qty * item.price;
        })
        return total;

    }


    const renderMealItem = ({ item }) => {
        return (
            <View style={styles.mealItem}>
                <Image source={{ uri: item.image }} style={styles.mealImage} />
                <View style={styles.mealDetails}>
                    <Text numberOfLines={1} style={{ width: 100 }} style={styles.mealName}>{item.name}</Text>
                    <Text numberOfLines={2} style={{ width: 100 }} style={styles.mealTitle}>{item.title}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, }}>
                        <View style={{ flexDirection: "row", marginTop: 25, justifyContent: "space-between", width: "100%" }}>
                            <Text style={styles.mealPrice}>₹ {item.price}</Text>

                            {item.qty == 0 ? (
                                <TouchableOpacity
                                    style={styles.addButton}
                                    onPress={() => {
                                        dispatch(addProductToMyCart(item));
                                        dispatch(increseQty(item.id));
                                    }}>
                                    <Text style={styles.addButtonText}>Add+</Text>
                                </TouchableOpacity>
                            ) : null}

                            {item.qty == 0 ? null : (
                                <TouchableOpacity style={styles.addButton} onPress={() => {
                                    dispatch(decrementProductQty(item.id));
                                    dispatch(decreaseQty(item.id));
                                }
                                }>
                                    <Text style={styles.addButtonText}>-</Text>
                                </TouchableOpacity>
                            )}
                            {item.qty == 0 ? null : (
                                <Text style={{ padding: 2, paddingTop: 4 }}>{item.qty}</Text>
                            )}
                            {item.qty == 0 ? null : (
                                <TouchableOpacity style={styles.addButton} onPress={() => {
                                    dispatch(addProductToMyCart(item));
                                    dispatch(increseQty(item.id));
                                }
                                }>
                                    <Text style={styles.addButtonText}>+</Text>
                                </TouchableOpacity>
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
                        <Image source={Icon.search} style={styles.searchImage} />
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
                            <View style={{ flex: 1 }} >
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
                    {cart.length > 0 ? (
                        <View style={styles.bottomCart}>
                            <View style={styles.price}>
                                <Text style={styles.priceText}>{getTotal()}</Text>
                            </View>

                            <View style={styles.item}>
                                <Text style={styles.priceText}>{(cart.length + ' Item')}</Text>
                            </View>

                            <TouchableOpacity style={styles.order} onPress={() => navigation.navigate("addToCart")}>
                                <Text style={styles.priceText}>View Order 🛍️</Text>
                            </TouchableOpacity>

                        </View>
                    ) : null}

                </View>
            </View>
        </SafeAreaView>
    );
};
export default Menu;
