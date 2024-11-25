import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";
import HomeScreen1 from "../../components/homeScreen1";
import HomeScreen2 from "../../components/homeScreen2";

const Home = () => {
    const [selectedTap, setSelectedTap] = useState(0); 
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.mainView}>

                <View style={styles.DeliveryContainer}>
                    <View style={styles.Delivery}>
                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image source={Icon.drawerIcon} style={styles.drawerImage} />
                        </TouchableOpacity>

                        <Text
                            style={[
                                styles.deliveryText,
                                { color: selectedTap === 1 ? "#F58539" : "#dbdad7" }
                            ]}
                        >
                            {strings.delivery}
                        </Text>

                        <View style={styles.switchView}>
                            <TouchableOpacity
                                style={[
                                    styles.switch1,
                                    { backgroundColor: selectedTap === 0 ? "#F58539" : "#6F3C2F" }
                                ]}
                                onPress={() => setSelectedTap(0)} 
                            />
                            <TouchableOpacity
                                style={[
                                    styles.switch2,
                                    { backgroundColor: selectedTap === 1 ? "#F58539" : "#6F3C2F" }
                                ]}
                                onPress={() => setSelectedTap(1)} 
                            />
                        </View>

                        <Text
                            style={[
                                styles.dine_in,
                                { color: selectedTap === 0 ? "#F58539" : "#dbdad7" }
                            ]}
                        >
                            {strings.dine_in}
                        </Text>
                    </View>

                    <View style={styles.locationContainer}>
                        {selectedTap === 0 ? (
                            <View style={styles.storeChange}>
                                <Image source={Icon.storelocation} style={styles.storelocation} />
                                <Text style={styles.dine_in_Text}>{strings.dine_in_at}</Text>
                            </View>
                        ) : (
                            <View style={styles.storeChange1}>
                                <Image source={Icon.locaton} style={styles.storelocation} />
                                <Text style={styles.dine_in_Text}>{strings.deliverTo}</Text>
                            </View>
                        )}
                        <TextInput
                            style={styles.textInput}
                            keyboardType="phone-pad"
                            maxLength={10}
                        />
                    </View>
                </View>
                {selectedTap === 0 ? <HomeScreen1 /> : <HomeScreen2 />}
            </View>
        </SafeAreaView>
    );
};

export default Home;
