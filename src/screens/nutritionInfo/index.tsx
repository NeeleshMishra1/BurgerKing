import React from "react";
import { View, Text, SafeAreaView, Platform, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation, } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const Nutrition = () => {

    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    return (
        <View style={{ height: Platform.OS === "ios" ? 50 : 0, flex: 1, }}>
            <SafeAreaView style={styles.main}>
                <View style={styles.header1}>
                <TouchableOpacity onPress={openDrawer}>
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText} >{strings.Nutrition}</Text>
                </View>
                <View style={styles.detailView}>
                    <Text>dsfgsadf</Text>
                </View>
            </SafeAreaView>

        </View>

    )
}

export default Nutrition;