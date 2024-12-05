import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, } from "react-native";
import { WebView } from "react-native-webview";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const Bkwall = () => {
    const [showVideo, setShowVideo] = useState(false);
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const handleImagePress = () => {
        setShowVideo(true);
    };

    return (
        <SafeAreaView style={styles.main}>

            <View style={{ flex: 1, backgroundColor: "#F5EADC", }}>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText}>{strings.Bk_wall}</Text>
                </View>
                <View style={styles.detailView}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.logoImage}>
                            <Image source={Icon.splace} style={styles.burgerImage} />
                        </View>

                        <TouchableOpacity onPress={handleImagePress} style={styles.videoContainer}>
                            {showVideo ? (
                                <WebView
                                    source={{
                                        uri: "https://www.youtube.com/embed/BF6KVRnZ8c8",
                                    }}
                                    style={styles.videoPlayer}
                                    javaScriptEnabled={true}
                                    allowsFullscreenVideo={true}
                                />
                            ) : (
                                <Image
                                    source={{
                                        uri: "https://d1rgpf387mknul.cloudfront.net/1624622984videotrustintastejpg",
                                    }}
                                    style={styles.haveit}
                                />
                            )}
                        </TouchableOpacity>

                        <Text style={styles.aboutText}>ABOUT Burger King</Text>

                        <Image
                            source={{
                                uri: "https://www.burgerking.in/static/media/home-of-the-whopper.33b5f485.jpg",
                            }}
                            style={styles.haveit}
                        />
                        <Text style={styles.aboutText}>ABOUT Burger King</Text>
                        <Text >{strings.goodFood}</Text>

                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Bkwall;
