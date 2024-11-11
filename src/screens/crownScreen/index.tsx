import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";


const crown=()=>{
    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
                <Text>crown</Text>
            </View>
        </SafeAreaView>
    )
}

export default crown;