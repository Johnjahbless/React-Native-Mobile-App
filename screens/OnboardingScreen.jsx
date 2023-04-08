import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity,
  useColorScheme } from 'react-native';
  import { Colors } from 'react-native/Libraries/NewAppScreen';


const OnboardingScreen = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

  const [backgroundStyle, setBackGroundStyle] = useState({
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    textColor: isDarkMode ? Colors.black : Colors.white
  });
  
  const [currentPage, setCurrentPage] = useState(0);
  
  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const handleDone = () => {
    navigation.replace("Home")  
  };
    
  
  const pages = [
    {
      title: 'Manage Entry Application',
      subtitle: 'Tespire help sort and simplify easy application process',
      image: require('../assets/1.png'),
    },
    {
      title: 'Manage Finances & Pay Fees',
      subtitle: 'The payment method that Tespire provide is to make it easier for you to pay your fees.',
      image: require('../assets/2.png'),
    },
    {
      title: 'Get Real Time Notifications and Reminders',
      subtitle: 'Recieve instant push notifications.',
      image: require('../assets/3.png'),
    },
  ];
  
  return (

    <View style={styles.container} >
      <View style={styles.pageContainer}>
        <Image source={pages[currentPage].image} style={styles.image} />
        <Text style={{
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: backgroundStyle.textColor}}>{pages[currentPage].title}</Text>
        <Text style={{
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: backgroundStyle.textColor}}>{pages[currentPage].subtitle}</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        {currentPage < pages.length - 1 ? (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
            <Text style={styles.buttonText}>Done</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  nextButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  doneButton: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default OnboardingScreen;
