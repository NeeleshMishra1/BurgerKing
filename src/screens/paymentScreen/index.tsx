import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";
import { useNavigation, useRoute } from "@react-navigation/native";

const Payment = () => {
    const route = useRoute();
    const { totalPayable } = route.params;
    const navigation = useNavigation();

    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionSelect = (option) => {
        setSelectedOption((prevOption) => (prevOption === option ? "" : option));
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => {
           navigation.navigate("addToCart" );

          }}>
                        <Image source={Icon.orangeLeftArrow} style={styles.drawerImage} />
                    </TouchableOpacity>
                    <Text style={styles.menutext}>Payment Methods</Text>
                </View>

                <View style={styles.Deliver}>
                    <View style={styles.DeliverContainer}>
                        <Text style={styles.Delivertext}>Deliver to</Text>
                        <Text style={styles.Delivertext}>Amount</Text>
                    </View>
                    <View style={styles.DeliverContainer1}>
                        <Text style={styles.Hometext}>Home</Text>
                        <Text style={styles.Hometext}>₹{totalPayable.toFixed(2)}</Text>
                    </View>
                </View>

                <ScrollView>
                    <Text style={styles.upitext}>UPI</Text>

                    <View style={styles.Deliver}>
                        <View style={styles.gpay}>
                            <TouchableOpacity onPress={() => handleOptionSelect("GPay")}>
                                <Image source={Icon.gPay} style={styles.gpayImage} />
                                {selectedOption === "GPay" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>G Pay</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleOptionSelect("Paytm")}>
                                <Image source={Icon.paytm} style={styles.paytmImage} />
                                {selectedOption === "Paytm" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>Paytm</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.other}>
                            <Text style={styles.otherText}>Other UPI Options</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.upitext}>Cards</Text>

                    <TouchableOpacity style={styles.card} onPress={() => handleOptionSelect("Card")}>
                        <Image source={Icon.card} style={styles.cardImage} />
                        {selectedOption === "Card" && (
                            <Image source={Icon.check} style={styles.checkIcon} />
                        )}
                        <Text style={styles.cardText}> Credit/ Debit Cards</Text>
                        <Image source={Icon.rightArrow} style={styles.arrowImage} />
                    </TouchableOpacity>

                    <Text style={styles.upitext}>Netbanking</Text>

                    <View style={styles.Netbanking}>
                        <View style={styles.gpay}>
                            <TouchableOpacity onPress={() => handleOptionSelect("SBI")}>
                                <Image source={Icon.sbi} style={styles.gpayImage} />
                                {selectedOption === "SBI" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>SBI</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleOptionSelect("HDFC")}>
                                <Image source={Icon.hdfc} style={styles.gpayImage} />
                                {selectedOption === "HDFC" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>HDFC</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleOptionSelect("ICICI")}>
                                <Image source={Icon.icici} style={styles.gpayImage} />
                                {selectedOption === "ICICI" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>ICICI</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => handleOptionSelect("Axis")}>
                                <Image source={Icon.axix} style={styles.gpayImage} />
                                {selectedOption === "Axis" && (
                                    <Image source={Icon.check} style={styles.checkIcon} />
                                )}
                                <Text style={styles.paytmText}>Axis</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.other}>
                            <Text style={styles.otherText}>Other Banks</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>

                <View style={styles.pay}>
                    <TouchableOpacity style={styles.proceed}>
                        <Text style={styles.proceedText}>Proceed To Pay</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Payment;
