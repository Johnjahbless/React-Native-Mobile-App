import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');


const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding'); // Replace 'Home' with your main component name
    }, 5000); // 3 seconds
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 411,
    height: 900,
  },
});

export default SplashScreen;