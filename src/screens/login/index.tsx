import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Login = ({ navigation }:any) => {
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleGetOtp = () => {
        if (phoneNumber.length === 10) {
            navigation.navigate("otp", { phoneNumber }); 
        } else {
            Alert.alert("Invalid Phone Number", "Please enter a 10-digit phone number.");
        }
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.arrowContainer}>
                <TouchableOpacity style={styles.arrow}>
                    <Image source={Icon.leftArror} style={styles.arrowImage} />
                </TouchableOpacity>
            </View>
            <View style={styles.LoginContainer}>
                <View style={styles.LoginImage}>
                    <Image source={Icon.splace} style={styles.image} />
                </View>
                <Text style={styles.loginText}>{strings.login}</Text>
            </View>
            <View style={styles.enterText}>
                <Text style={styles.enterText1}>{strings.enter}</Text>
            </View>
            <View style={styles.phoneNumber}>
                <View style={styles.phoneInputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter 10-digit mobile number"
                        keyboardType="phone-pad"
                        maxLength={10}
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.getOtp} onPress={handleGetOtp}>
                    <Text style={styles.getOtpText}>{strings.get_otp}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottom}>
                <View style={styles.redColor}>
                    <Text style={styles.bottomText}>{strings.by}</Text>
                    <Text style={styles.bottomText1}>{strings.terms}</Text>
                    <Text style={styles.bottomText1}>{strings.Nutrition}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;
