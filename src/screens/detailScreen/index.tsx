import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "../../assets";
import strings from "../../utils/strings";

const Detail = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const handleDone = () => {

    navigation.navigate('drawer', {
      name: name,
    });
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.arrowContainer}>
        <TouchableOpacity style={styles.arrow}>
          <Image source={Icon.leftArror} style={styles.arrowImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.LoginContainer}>
        <View style={styles.LoginImage}>
          <Image source={Icon.splace} style={styles.image} />
        </View>
        <Text style={styles.oneText}>{strings.one_last}</Text>
        <Text style={styles.whatText}>{strings.what_do}</Text>
      </View>
      <View style={styles.name}>
        <View style={styles.nameInputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            value={name}
            onChangeText={(text) => setName(text)}
            keyboardType="default"
            maxLength={50}
          />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.done} onPress={handleDone}>
          <Text style={styles.doneText}>{strings.done}</Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Text style={styles.youText}>{strings.You_can}</Text>
          <Text style={styles.youText}>{strings.the_name}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.redColor}>
          <Text style={styles.bottomText}>{strings.by}</Text>
          <Text style={styles.bottomText1}>{strings.terms}</Text>
          <Text style={styles.bottomText1}>{strings.Nutrition}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
