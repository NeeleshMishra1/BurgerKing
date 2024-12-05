
import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import Icon from "../../assets";

const Notification = () => {
    const navigation = useNavigation();



    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main1}>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText}>NOTIFICATIONS</Text>
                </View>
                <View style={styles.detailView}>
                    <Image source={Icon.notificattionlogo} style={styles.logoImage} />
                    <Text style={styles.caughtUp}>YOU ARE ALL CAUGHT UP!</Text>

                </View>
            </View>
        </SafeAreaView>
    );
};

export default Notification;
