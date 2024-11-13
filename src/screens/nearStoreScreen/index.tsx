import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";


const Nearstore=()=>{
    return(
        <SafeAreaView style={styles.main}>
             <View style={styles.mainView}>
                <View style={styles.menu}>
                    <Text style={styles.menutext}>{strings.find_A_bk}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Nearstore;