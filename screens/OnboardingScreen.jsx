import React from 'react'
import {View, Text, Button, Image} from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
    pages={[
    {
    backgroundColor: '#a6e4d0',
    image: <Image source={require('../assets/ios/T.png')} />,
    title: 'Welcome',
    subtitle: 'Welcome to the first slide of the Onboarding Swiper.',
    },
    ]}
/>
  );
}

export default OnboardingScreen;