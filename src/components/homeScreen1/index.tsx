import React from "react";
import { Text, View, Image, Dimensions, FlatList, ScrollView } from "react-native";
import HomeJson1 from "../../api/json";
import { vh, vw } from "../../utils/dimensions";
import Carousel from 'react-native-reanimated-carousel';
import strings from "../../utils/strings";
import styles from "./style";

const HomeScreen1 = () => {
    const width = Dimensions.get('window').width;


    const renderItem = ({ item }) => {
        const words = item.title.split(" ");

        const lines = [];
        for (let i = 0; i < words.length; i += 2) {
            lines.push(words.slice(i, i + 2).join(" "));
        }

        return (
            <View style={styles.menuItem}>
                <Image source={{ uri: item.image }} style={styles.menuImage} />
                <Text style={styles.menuText}>
                    {lines.join("\n")}
                </Text>
            </View>
        );
    };



    return (
        <ScrollView>
            <View style={styles.main}>

                <View style={styles.imageContainer}>

                    <Carousel
                        loop
                        width={width}
                        height={vh(200)}
                        autoPlay={true}
                        data={HomeJson1.banners}
                        scrollAnimationDuration={1000}
                        onSnapToItem={(index) => console.log('current index:', index)}
                        renderItem={({ index }) => (
                            <Image
                                key={HomeJson1.banners[index].id}
                                source={{ uri: HomeJson1.banners[index].image }}
                                style={{
                                    height: vh(203),
                                    width: vw(380),
                                }}
                                resizeMode="contain"
                            />
                        )}
                    />
                </View>

                <View >
                    <Text style={styles.ourText}>{strings.our_menu}</Text>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={true}>
                    <FlatList
                        data={HomeJson1.menu}
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
                        <View style={styles.progressBarFill} />
                    </View>
                </View>

                <Text style={styles.ourText}>{strings.bk_recommended}</Text>


            </View>
        </ScrollView>
    );
}

export default HomeScreen1;
