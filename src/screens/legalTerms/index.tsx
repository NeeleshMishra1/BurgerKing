
import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const LegalTerms = () => {
    const [showDetails, setShowDetails] = useState({});
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main1}>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText}>{strings.Legal}</Text>
                </View>
                <ScrollView>
                <View style={styles.detailView}>
                    <View style={styles.india}>
                    <Image source={Icon.burgerOriginal} style={styles.indiaImage} />
                    <Text style={styles.indiaText}>BURGER KING INDIA</Text>
                    </View>

                    <TouchableOpacity style={styles.condition} onPress={()=>{navigation.navigate("terms")}}>
                        <Text style={styles.conditionText}>Terms & Conditions</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("terms")}}>
                        <Image source={Icon.rightArrow} style={styles.rightImage} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.condition1} onPress={()=>{navigation.navigate("policy")}}>
                        <Text style={styles.conditionText}>Privacy Policy</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("policy")}}>
                        <Image source={Icon.rightArrow} style={styles.rightImage} />
                        </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.condition1} onPress={()=>{navigation.navigate("promotional")}}>
                        <Text style={styles.conditionText}>Promational T & C</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate("promotional")}}>
                        <Image source={Icon.rightArrow} style={styles.rightImage} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default LegalTerms;
