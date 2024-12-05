import React, { useState } from "react";
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const FaqSupport = () => {
    const [showDetails, setShowDetails] = useState({});
    const navigation = useNavigation();

    const openDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer());
    };

    const handleArrowPress = (index) => {
        setShowDetails(prevState => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    const questions = [
        { question: "How do I contact Customer Care", answer: strings.youCan },
        { question: strings.doIneed, answer: strings.yesyou },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
        { question: strings.whereIcan, answer: strings.canPlace },
    ];

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.main1}>
                <View style={styles.header1}>
                    <TouchableOpacity onPress={openDrawer}>
                        <Image source={Icon.left_arrow} style={styles.arrowImage} />
                    </TouchableOpacity>
                    <Text style={styles.recentText}>{strings.faq}</Text>
                </View>
                <ScrollView>
                    <View style={styles.detailView}>
                        <Text style={styles.aboutText}>HOW CAN WE HELP ?</Text>
                        {questions.map((item, index) => (
                            <View key={index}>
                                <View style={styles.question}>
                                    <Text style={styles.questionText}>{item.question}</Text>
                                    <TouchableOpacity onPress={() => handleArrowPress(index)}>
                                        <Text style={styles.arrowText}>
                                            {showDetails[index] ? "⌃" : "⌄"}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                {showDetails[index] && (
                                    <View style={styles.answer}>
                                        <Text style={styles.answerText}>{item.answer}</Text>
                                    </View>
                                )}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default FaqSupport;
