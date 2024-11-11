import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";


const Menu=()=>{
    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
                <Text>Menu</Text>
            </View>
        </SafeAreaView>
    )
}

export default Menu;