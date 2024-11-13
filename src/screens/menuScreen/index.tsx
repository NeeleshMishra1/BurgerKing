import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";


const Menu = () => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
                <View style={styles.menu}>
                    <Image source={Icon.drawerIcon} style={styles.drawerImage} />
                    <Text style={styles.menutext}>{strings.our_menu}</Text>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image source={Icon.search} style={styles.searchImage} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Menu;