import React, { useState } from "react";
import {SafeAreaView,Text, View,Image,TouchableOpacity,ScrollView,Alert,} from "react-native";
import styles from "./style";
import Icon from "../../assets";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RAZORPAY_KEY_ID } from "@env";
import RazorpayCheckout from "react-native-razorpay";

const Payment = () => {
  const route = useRoute();
  const { totalPayable } = route.params;
  const navigation = useNavigation();

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionSelect = (option) => {
    setSelectedOption((prevOption) => (prevOption === option ? "" : option));
  };

  const handlePayment = () => {
    if (!selectedOption) {
      Alert.alert("Error", "Please select a payment method.");
      return;
    }

    const options = {
      description: "Payment for your order",
      image: "https://i.imgur.com/3g7nmJC.jpg",
      currency: "INR",
      key: RAZORPAY_KEY_ID,
      amount: totalPayable * 100, 
      name: "Burger King",
      prefill: {
        email: "xyz@example.com",
        contact: "9191919191",
        name: "Customer",
      },
      theme: { color: "#53a20e" },
    };

    RazorpayCheckout.open(options)
      .then((data) => {
        Alert.alert("Success", `Payment ID: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        Alert.alert("Error", `Code: ${error.code} | Description: ${error.description}`);
      });
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.menu}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
                {selectedOption === "GPay" && <Image source={Icon.check} style={styles.checkIcon} />}
                <Text style={styles.paytmText}>G Pay</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => handleOptionSelect("Paytm")}>
                <Image source={Icon.paytm} style={styles.paytmImage} />
                {selectedOption === "Paytm" && <Image source={Icon.check} style={styles.checkIcon} />}
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
            {selectedOption === "Card" && <Image source={Icon.check} style={styles.checkIcon} />}
            <Text style={styles.cardText}>Credit/ Debit Cards</Text>
            <Image source={Icon.rightArrow} style={styles.arrowImage} />
          </TouchableOpacity>

          <Text style={styles.upitext}>Netbanking</Text>
          <View style={styles.Netbanking}>
            <TouchableOpacity onPress={() => handleOptionSelect("SBI")}>
              <Image source={Icon.sbi} style={styles.gpayImage} />
              {selectedOption === "SBI" && <Image source={Icon.check} style={styles.checkIcon} />}
              <Text style={styles.paytmText}>SBI</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleOptionSelect("HDFC")}>
              <Image source={Icon.hdfc} style={styles.gpayImage} />
              {selectedOption === "HDFC" && <Image source={Icon.check} style={styles.checkIcon} />}
              <Text style={styles.paytmText}>HDFC</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View style={styles.pay}>
          <TouchableOpacity style={styles.proceed} onPress={handlePayment}>
            <Text style={styles.proceedText}>Proceed To Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Payment;
