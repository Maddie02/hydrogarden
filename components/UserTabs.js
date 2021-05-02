import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IdeasScreen from '../screens/IdeasScreen';
import FeedScreen from '../screens/FeedScreen';
import GardenScreen from '../screens/GardenScreen';
import Notifications from '../screens/Notifications';
import AddPostButton from './AddPostButton';

const Tab = createBottomTabNavigator();

const UserTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Ideas"
            tabBarOptions={{
                style: {
                    height: 60,
                    paddingBottom: 7,
                },
                activeTintColor: '#077F7B',
            }}
            >
            <Tab.Screen
                name="Ideas"
                component={IdeasScreen}
                options={{
                    tabBarLabel: 'Идеи',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="lightbulb" color={color} size={29} />
                    ),
                }}
            />
            <Tab.Screen
                name="Garden"
                component={GardenScreen}
                options={{
                    tabBarLabel: 'Градина',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="flower-tulip-outline" color={color} size={29} />
                    ),
                }}
            />
            <Tab.Screen
                name=" "
                component={AddPostButton}
                options={{
                    tabBarIcon: () => (
                        <AddPostButton />
                    ),
                }}
            />
            <Tab.Screen
                name="Feed"
                component={FeedScreen}
                options={{
                tabBarLabel: 'Стена',
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="fire" color={color} size={29} />
                ),
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                tabBarLabel: 'Известия',
                tabBarIcon: ({ color }) => (
                    <Ionicons name="notifications" color={color} size={29} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default UserTabs;