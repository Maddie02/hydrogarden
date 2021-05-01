import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IdeasScreen from '../screens/IdeasScreen';
import FeedScreen from '../screens/FeedScreen';
import GardenScreen from '../screens/GardenScreen';
import Notifications from '../screens/Notifications';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Ideas"
            tabBarOptions={{
                activeTintColor: '#077F7B',
            }}
            >
            <Tab.Screen
                name="Ideas"
                component={IdeasScreen}
                options={{
                    tabBarLabel: 'Ideas',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="lightbulb" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Garden"
                component={GardenScreen}
                options={{
                    tabBarLabel: 'Garden',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="flower-tulip-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome5 name="fire" color={color} size={size} />
                ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                tabBarLabel: 'Notifications',
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="notifications" color={color} size={size} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default UserTabs;