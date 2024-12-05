import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "./style";
import Icon from "../../assets";
import strings from "../../utils/strings";


const Crown = () => {

    const [showDetails, setShowDetails] = useState({});

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
            <View style={styles.mainView}>
                <View style={styles.menu}>
                    <Image source={Icon.orangeLeftArrow} style={styles.drawerImage} />
                    <Text style={styles.menutext}>{strings.crown}</Text>
                    <TouchableOpacity style={styles.searchContainer}>
                        <Image source={Icon.crown} style={styles.searchImage} />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={styles.Earn}>
                        <Text style={styles.EarnText}>Earn & Burn Crowns</Text>
                    </View>

                    <View style={styles.crownPoint} >
                        <Image source={Icon.crownPoint} style={styles.crownImage} />
                    </View>

                    <View style={styles.workContainer}>
                        <Text style={styles.workText}>How it works: ₹1 = 1 Crown</Text>
                        <Text style={styles.earnText}>{strings.EarnCrown}</Text>
                    </View>

                    <View style={styles.detailView}>
                        <View style={styles.faqView}>
                        <Text style={styles.aboutText}>FAQs</Text>
                        </View>
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
    )
}

export default Crown;