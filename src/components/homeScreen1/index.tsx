import React, { useRef, useState } from "react";
import { Text, View, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import HomeJson1 from "../../api/json";
import { vh, vw } from "../../utils/dimensions";
import Carousel from "react-native-reanimated-carousel";
import strings from "../../utils/strings";
import styles from "./style";
import Icon from "../../assets";
import { useNavigation, NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
    Menu: undefined;
};

type MenuItem = {
    id: number;
    title: string;
    image: string;
};

type BannerItem = {
    id: number;
    image: string;
};

type RecommendedItem = {
    id: number;
    image: string;
};

const HomeScreen1= () => {
    const width = Dimensions.get("window").width;
    const scrollRef = useRef<ScrollView>(null);
    const [scrollProgress, setScrollProgress] = useState<number>(0);
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const renderItem = ({ item }: { item: MenuItem }) => {
        const words = item.title.split(" ");
        const lines: string[] = [];
        for (let i = 0; i < words.length; i += 2) {
            lines.push(words.slice(i, i + 2).join(" "));
        }

        return (
            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate("Menu")}>
                <Image source={{ uri: item.image }} style={styles.menuImage} />
                <Text style={styles.menuText}>{lines.join("\n")}</Text>
            </TouchableOpacity>
        );
    };

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
        const totalWidth = contentSize.width - layoutMeasurement.width;
        const progress = totalWidth > 0 ? contentOffset.x / totalWidth : 0;
        setScrollProgress(progress);
    };

    const renderRecommendedItem = ({ item }: { item: RecommendedItem }) => (
        <View style={styles.recommendedItem}>
            <Image source={{ uri: item.image }} style={styles.recommendedImage} resizeMode="cover" />
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.main}>
                <View>
                    <Carousel
                        loop
                        width={width}
                        height={vh(200)}
                        autoPlay={true}
                        data={HomeJson1.banners as BannerItem[]}
                        scrollAnimationDuration={1000}
                        renderItem={({ index }) => (
                            <Image
                                key={HomeJson1.banners[index].id}
                                source={{ uri: HomeJson1.banners[index].image }}
                                style={{
                                    height: vh(203),
                                    width: "100%",
                                }}
                            />
                        )}
                    />
                </View>

                <View>
                    <Text style={styles.ourText}>{strings.our_menu}</Text>
                </View>
                <View>
                    <ScrollView
                        ref={scrollRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        onScroll={handleScroll}
                        scrollEventThrottle={16}
                    >
                        <FlatList
                            data={HomeJson1.menu as MenuItem[]}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                            numColumns={5}
                            contentContainerStyle={styles.container}
                            bounces={false}
                            alwaysBounceVertical={false}
                        />
                    </ScrollView>

                    <View style={styles.progressBarContainer}>
                        <View style={styles.progressBarBackground}>
                            <View
                                style={[
                                    styles.progressBarFill,
                                    { width: `${scrollProgress * 60}%` },
                                ]}
                            />
                        </View>
                    </View>
                </View>

                <Text style={styles.ourText}>{strings.bk_recommended}</Text>
                <FlatList
                    data={HomeJson1["Bk Recommended"] as RecommendedItem[]}
                    renderItem={renderRecommendedItem}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.recommendedList}
                />

                <TouchableOpacity style={styles.crown}>
                    <Text style={styles.crownText}>EXPLORE FULL MENU</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bkWall}>
                    <Image source={Icon.home_bk_wall} style={styles.bkWallImage} />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default HomeScreen1;
