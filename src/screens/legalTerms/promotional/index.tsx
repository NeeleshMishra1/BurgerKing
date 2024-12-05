
import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";
import Icon from "../../../assets";
import strings from "../../../utils/strings";

const Promotional = () => {
    const navigation = useNavigation();

    

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main1}>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText}>Promotional T & C</Text>
                </View>
                <ScrollView>
                <View style={styles.detailView}>
                    <Text style={styles.termText}>Promotional T&C</Text>
                    <Text style={styles.termText2}>{strings.terms1}</Text>
                    <Text style={styles.termText2}>{strings.term2}</Text>
                    <Text style={styles.termText2}>{strings.term3}</Text>
                    <Text style={styles.termText2}>{strings.term4}</Text>
                    <Text style={styles.termText2}>{strings.term5}</Text>
                    <Text style={styles.termText2}>{strings.term6}</Text>
                    <Text style={styles.termText2}>{strings.term7}</Text>
                   
                    
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Promotional;
