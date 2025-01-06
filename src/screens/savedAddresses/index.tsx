import React, { useState } from "react";
import {View,Text,SafeAreaView,Platform,Image,TouchableOpacity,Modal,TextInput,ScrollView,FlatList,} from "react-native";
import styles from "./style";
import strings from "../../utils/strings";
import Icon from "../../assets";
import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/native";

const SavedAddress = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(null);
  const [addressList, setAddressList] = useState([]);
  const [address, setAddress] = useState({
    type: "Home",
    houseNo: "",
    fullAddress: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleInputChange = (field, value) => {
    setAddress({ ...address, [field]: value });
  };

  const handleAddAddress = () => {
    if (
      address.houseNo &&
      address.fullAddress &&
      address.pincode &&
      address.city &&
      address.state &&
      address.country
    ) {
      if (isEditMode) {
        const updatedList = [...addressList];
        updatedList[editIndex] = address;
        setAddressList(updatedList);
        setIsEditMode(false);
      } else {
        setAddressList([...addressList, address]);
      }
      setAddress({
        type: "Home",
        houseNo: "",
        fullAddress: "",
        pincode: "",
        city: "",
        state: "",
        country: "",
      });
      setModalVisible(false);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleEditAddress = (index) => {
    setAddress(addressList[index]);
    setEditIndex(index);
    setIsEditMode(true);
    setModalVisible(true);
    setMenuVisible(null);
  };

  const handleDeleteAddress = (index) => {
    const updatedList = addressList.filter((_, i) => i !== index);
    setAddressList(updatedList);
    setMenuVisible(null);
  };

  return (
    <View style={{ height: Platform.OS === "ios" ? 50 : 0, flex: 1 }}>
      <SafeAreaView style={styles.main}>
        <View style={styles.header1}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={Icon.left_arrow} style={styles.arrowImage} />
          </TouchableOpacity>
          <Text style={styles.recentText}>{strings.delivery_location}</Text>
        </View>
        <View style={styles.detailView}>
          <View style={styles.detait1}>
            <Text style={styles.savedText}>Saved Address</Text>
            <TouchableOpacity style={styles.add} onPress={() => setModalVisible(true)}>
              <Text style={styles.addText}> +Add Address</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={addressList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.addressContainer}>
                <View style={styles.addressInfo}>
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={styles.addressType}>{item.type}</Text>

                  <TouchableOpacity onPress={() => setMenuVisible(menuVisible === index ? null : index)}>
                  <Text style={styles.menuButton}>⋮</Text>
                </TouchableOpacity>

                {menuVisible === index && (
                  <View style={styles.menuContainer}>
                    <TouchableOpacity onPress={() => handleEditAddress(index)}>
                      <Text style={styles.menuItem}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDeleteAddress(index)}>
                      <Text style={styles.menuItem}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                )}
                </View>
                  <Text style={styles.addressText}>
                    {item.houseNo}, {item.fullAddress}, {item.city}, {item.state} - {item.pincode}, {item.country}
                  </Text>
                </View>

              </View>
            )}
          />
        </View>
      </SafeAreaView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >

        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{isEditMode ? "Edit Address" : "Add Address"}</Text>
            <ScrollView>
              <Text style={styles.label}>Address Type</Text>
              <View style={styles.buttonGroup}>
                <TouchableOpacity
                  style={[styles.typeButton, address.type === "Home" && styles.selectedButton]}
                  onPress={() => handleInputChange("type", "Home")}
                >
                  <Text style={[styles.buttonText, address.type === "Home" ? styles.selectedText : styles.unselectedText]}>
                    Home
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.typeButton, address.type === "Work" && styles.selectedButton]}
                  onPress={() => handleInputChange("type", "Work")}
                >
                  <Text style={[styles.buttonText, address.type === "Work" ? styles.selectedText : styles.unselectedText]}>
                    Work
                  </Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>House No.</Text>
              <TextInput style={styles.input} placeholder="Enter house no." value={address.houseNo} onChangeText={(value) => handleInputChange("houseNo", value)} />

              <Text style={styles.label}>Full Address</Text>
              <TextInput style={styles.input} placeholder="Enter full address" value={address.fullAddress} onChangeText={(value) => handleInputChange("fullAddress", value)} />

              <Text style={styles.label}>Pincode</Text>
              <TextInput style={styles.input} placeholder="Enter pincode" keyboardType="numeric" value={address.pincode} onChangeText={(value) => handleInputChange("pincode", value)} />

              <Text style={styles.label}>City</Text>
              <TextInput style={styles.input} placeholder="Enter city" value={address.city} onChangeText={(value) => handleInputChange("city", value)} />

              <Text style={styles.label}>State</Text>
              <TextInput style={styles.input} placeholder="Enter state" value={address.state} onChangeText={(value) => handleInputChange("state", value)} />

              <Text style={styles.label}>Country</Text>
              <TextInput style={styles.input} placeholder="Enter country" value={address.country} onChangeText={(value) => handleInputChange("country", value)} />
            </ScrollView>

            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.submitButton} onPress={handleAddAddress}>
                <Text style={styles.submitButtonText}>Save Address</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SavedAddress;
