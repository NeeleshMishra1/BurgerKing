import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './style';
import Icon from '../../assets';

type RootStackParamList = {
  drawer: undefined; 
  login: undefined; 
};

const Splace = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const checkLoginStatus = async () => {
    try {
      const isLoggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (isLoggedIn === 'true') {
        navigation.reset({
          index: 0,
          routes: [{ name: 'drawer' }],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{ name: 'login' }],
        });
      }
    } catch (error) {
      console.error('Error checking login status:', error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      checkLoginStatus();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container1}>
      <Image source={Icon.splace} />
    </View>
  );
};

export default Splace;


