
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import Icon from "../../../assets";
import strings from "../../../utils/strings";
import { useNavigation,useRoute } from "@react-navigation/native";

const CustomDrawer = (props,) => {
    const navigation = useNavigation();
    const route = useRoute();  
    const { name } = route.params || {};
    const phoneNumber = route.params?.phoneNumber || "8813091409";
    return (
        <View style={styles.main}>
            <View style={styles.imageContainer}>
                <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
                    <Image source={Icon.left_arrow} style={styles.arrowImage} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icon.notification} style={styles.arrowImage} />
                </TouchableOpacity>
            </View>

            <View style={styles.avitarContainer}>
                <Image source={Icon.avitar} style={styles.avitarImage} />
                <View style={styles.detailContainer}>
                    <Text style={styles.detailText}>{name ? name : "Guest"}</Text>
                    <Text style={styles.detailText}>{phoneNumber}</Text>
                </View>
            </View>

            <View style={styles.redeemContainer}>
                <Image source={Icon.star} style={styles.starImage} />
                <View style={styles.bkCrowns}>
                    <Text style={styles.bkText}>0</Text>
                    <Text style={styles.bkText2}>BK Crowns</Text>
                </View>
                <TouchableOpacity style={styles.redeem}>
                    <Text style={styles.redeemText}>Redeem</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.recentOrder}>
            <Image source={Icon.clock} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.recent}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
            <Image source={Icon.locaton} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.saved}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
            <Image source={Icon.store_d} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.Saved_King}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder2}>
            <Image source={Icon.wall} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.Bk_wall}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder}>
            <Image source={Icon.faq} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.faq}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
            <Image source={Icon.document} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.Legal}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
            <Image source={Icon.leaf} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.Nutrition}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.recentOrder1}>
            <Image source={Icon.logout} style={styles.arrowImage} />
            <Text style={styles.recentText} >{strings.logout}</Text>
            </TouchableOpacity>
        </View>

    );
};

export default CustomDrawer;
