import React, { useEffect } from 'react';
import { View, ImageBackground, Text, Image ,} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import styles from './style';
import Icon from '../../assets';


type RootStackParamList = {
  bottom: undefined;
  login: undefined;
};

const Splace = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleSplace = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'login' }],
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSplace();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <View style={styles.container1}>
        <Image source={Icon.splace}/>
    </View>
  );
};

export default Splace;

