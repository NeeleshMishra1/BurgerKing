import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";


const Nearstore=()=>{
    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
                <Text>Store</Text>
            </View>
        </SafeAreaView>
    )
}

export default Nearstore;