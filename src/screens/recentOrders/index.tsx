import React from "react";
import { View, Text, SafeAreaView ,Platform,Image, TouchableOpacity} from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation,} from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const RecentOrder = () => {
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };
    return (
        <View style={{ height: Platform.OS === "ios" ? 50 : 0, backgroundColor: "#F5EADC",flex:1 }}>
        <SafeAreaView style={styles.main}>
            <View style={styles.header1}>
                <TouchableOpacity onPress={openDrawer}>
            <Image source={Icon.left_arrow} style={styles.arrowImage} />
            </TouchableOpacity>
                 <Text style={styles.recentText} >{strings.recentPage}</Text>
            </View>

        </SafeAreaView>
    </View>

    )
}

export default RecentOrder;