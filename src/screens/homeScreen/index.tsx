import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import styles from "./style";


const Home=()=>{
    return(
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>
               <View style={styles.Delivery}>
                <Text>delivery</Text>
               </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;