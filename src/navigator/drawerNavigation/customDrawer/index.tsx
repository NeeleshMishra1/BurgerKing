import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import styles from "./style";
import Icon from "../../../assets";
import strings from "../../../utils/strings";

type DrawerParamList = {
    Home: undefined;
    recentOrder: undefined;
    savedAddress: undefined;
    bkWall: undefined;
    faqSupport: undefined;
    legalTerms: undefined;
    nutrition: undefined;
    notification:undefined;
};

type CustomDrawerProps = {
    navigation: DrawerNavigationProp<DrawerParamList>;
};

type RouteParams = {
    name?: string;
    phoneNumber?: string;
};

function CustomDrawer(props: CustomDrawerProps) {
    const navigation = useNavigation<DrawerNavigationProp<DrawerParamList>>();
    const route = useRoute<RouteProp<{ params: RouteParams }, "params">>();

    const { name } = route.params || {};
    const phoneNumber = route.params?.phoneNumber || "8813091409";

    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <TouchableOpacity
                    onPress={() => {
                        props.navigation.closeDrawer();
                        props.navigation.navigate("Home");
                    }}
                >
                    <Image source={Icon.left_arrow as ImageSourcePropType} style={styles.arrowImage} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("notification")}>
                    <Image source={Icon.notification as ImageSourcePropType} style={styles.arrowImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.avitarContainer}>
                <Image source={Icon.avitar as ImageSourcePropType} style={styles.avitarImage} />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>{name ? name : "Guest"}</Text>
                    <Text style={styles.detailText}>{phoneNumber}</Text>
                </View>
            </View>

            <View style={styles.redeemContainer}>
                <Image source={Icon.star as ImageSourcePropType} style={styles.starImage} />
                <View style={styles.bkCrowns}>
                    <Text style={styles.bkText}>0</Text>
                    <Text style={styles.bkText2}>BK Crowns</Text>
                </View>
                <TouchableOpacity style={styles.redeem}>
                    <Text style={styles.redeemText}>Redeem</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.recentOrder} onPress={() => props.navigation.navigate("recentOrder")}>
                <Image source={Icon.clock as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.recent}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1} onPress={() => props.navigation.navigate("savedAddress")}>
                <Image source={Icon.locaton as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.saved}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
                <Image source={Icon.store_d as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.Saved_King}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder2} onPress={() => props.navigation.navigate("bkWall")}>
                <Image source={Icon.wall as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.Bk_wall}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder} onPress={() => props.navigation.navigate("faqSupport")}>
                <Image source={Icon.faq as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.faq}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1} onPress={() => props.navigation.navigate("legalTerms")}>
                <Image source={Icon.document as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.Legal}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1} onPress={() => props.navigation.navigate("nutrition")}>
                <Image source={Icon.leaf as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.Nutrition}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}   onPress={() => {
                        props.navigation.closeDrawer();
                        props.navigation.navigate("Home");
                    }}>
                <Image source={Icon.logout as ImageSourcePropType} style={styles.arrowImage} />
                <Text style={styles.recentText}>{strings.logout}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default CustomDrawer;
