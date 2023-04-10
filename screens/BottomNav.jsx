import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from './HomeScreen';
import { ProfileScreen } from './ProfileScreen';
import { Courses } from './Courses';
import { Wallet } from './Wallet';
import { Result } from './Result';
import MyFloatingButton from './FAB';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
    return (
        <>
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'apps'
                            : 'apps-outline';
                    } else if (route.name === 'Courses') {
                        iconName = focused ? 'book' : 'book-outline';
                    } else if (route.name === 'Wallet') {
                        iconName = focused ? 'wallet' : 'wallet-outline';
                    } else if (route.name === 'Result') {
                        iconName = focused ? 'albums' : 'albums-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#505A8D',
                inactiveTintColor: 'black',
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }}/>
            <Tab.Screen name='Courses' component={Courses} options={{ headerShown: false }}/>
            <Tab.Screen name='Wallet' component={Wallet} options={{ headerShown: false }}/>
            <Tab.Screen name="Result" component={Result} options={{ headerShown: false }}/>
        </Tab.Navigator>
        <MyFloatingButton />
        </>
    );
}
