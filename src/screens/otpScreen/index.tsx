import React, { useState, useEffect } from "react";
import { Image, Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Otp = ({ route, navigation }: any) => {
    const { phoneNumber } = route.params;
    const [otp, setOtp] = useState("");
    const fixedOtp = "123456";
    const [timer, setTimer] = useState(0); 

    const handleVerifyOtp = () => {
        if (otp === fixedOtp) {
            Alert.alert("Success", "OTP Verified Successfully!", [
                { text: "OK", onPress: () => navigation.navigate("detail") }
            ]);
        } else {
            Alert.alert("Invalid OTP", "Please enter the correct OTP.");
        }
    };

    const handleResendOtp = () => {
        setTimer(30); 
    };

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown); 
        }
    }, [timer]); 

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
                <Text style={styles.enterText1}>
                    {`${strings.an_otp} ${phoneNumber}`}
                </Text>
            </View>
            <View style={styles.phoneNumber}>
                <View style={styles.phoneInputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="One time password"
                        keyboardType="phone-pad"
                        maxLength={6}
                        value={otp}
                        onChangeText={setOtp}
                    />
                </View>
            </View>
            <View style={styles.button}>
                <TouchableOpacity style={styles.getOtp} onPress={handleVerifyOtp}>
                    <Text style={styles.getOtpText}>{strings.verify_otp}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.resend}>
                <Text style={styles.resendOtpText1}>
                    {timer > 0 ? `Resend OTP in 00:${timer < 10 ? `0${timer}` : timer}` : ""}
                </Text>
                <TouchableOpacity style={styles.resendOtp} onPress={handleResendOtp}>
                    <Text style={styles.resendOtpText}>
                        {timer === 0 ? strings.resend : ""}
                    </Text>
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

export default Otp;
