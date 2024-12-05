import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import NearStore from "../../api/nearStore";
import { useNavigation } from "@react-navigation/native";

const Nearstore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredStores, setFilteredStores] = useState(NearStore);
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchTerm(text);

    const filteredData = NearStore.filter((store) =>
      store.store.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredStores(filteredData);
  };

  const handleStoreSelect = (storeName) => {
    navigation.navigate("Home", { selectedStore: storeName });
  };

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity style={styles.storeContainer} onPress={() => handleStoreSelect(item.store) }>
      <View style={styles.Call}>
        <View>
          <Text style={styles.storeName}>{item.store}</Text>
          <Text style={styles.storeTime}>{item.time}</Text>
        </View>
        <TouchableOpacity style={styles.callImage}>
          <Image source={Icon.call} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      <Text style={styles.text2}>{item.storeLocation}</Text>
      <Text style={styles.text2}>Open Now</Text>

      <View style={styles.Call1}>
        <View>
          <Text>{item.aWay}</Text>
        </View>
        <TouchableOpacity style={styles.callImage}>
          <Image source={Icon.location} style={styles.searchImage} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.takeAway}>
        <Text>Takeaway</Text>
        <Text>Dine-in</Text>
        <Text>Delivery</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.mainView}>
        <View style={styles.menu}>
          <Text style={styles.menutext}>{strings.find_A_bk}</Text>
        </View>

        <View style={styles.container}>
          <View style={styles.search}>
            <TouchableOpacity>
              <Image source={Icon.search} style={styles.searchImage} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder="Search for your location"
              value={searchTerm}
              onChangeText={handleSearch}
              keyboardType="default"
              maxLength={20}
            />
            <TouchableOpacity onPress={() => handleSearch("")} style={styles.ctext}>
              <Text style={styles.cleartext}>Clear</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredStores}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderStoreItem}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Nearstore;
