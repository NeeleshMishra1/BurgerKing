import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import HomeJson1 from "../../api/json";
import { vh, vw } from "../../utils/dimensions";
import Carousel from 'react-native-reanimated-carousel';
import strings from "../../utils/strings";
import styles from "./style";

const HomeScreen1 = () => {
    const width = Dimensions.get('window').width;

    return (
        <View style={styles.main}>

            <View style={styles. imageContainer}>

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
                                height: vh(195),
                                width: vw(370),
                            }}
                            resizeMode="contain"
                        />
                    )}
                />
            </View>

            <View >
                <Text style={styles.ourText}>{strings.our_menu}</Text>
            </View>
        </View>
    );
}

export default HomeScreen1;
