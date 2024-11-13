import React from "react";
import { SafeAreaView, Text, View,Image,TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";


const Crown=()=>{
    return(
        <SafeAreaView style={styles.main}>
             <View style={styles.mainView}>
                <View style={styles.menu}>
                    <Image source={Icon.orangeLeftArrow} style={styles.drawerImage} />
                    <Text style={styles.menutext}>{strings.crown}</Text>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image source={Icon.crown} style={styles.searchImage} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Crown;