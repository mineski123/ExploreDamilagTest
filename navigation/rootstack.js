import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../component/styles';
import ExploreScreen from '../component/explore';
import MyAccountScreen from '../component/profile';
import LoginScreen from '../component/login'; // LoginScreen import is correct
import FavoritesScreen from '../component/favorites';
import Home from '../component/home';
import WelcomeScreen from '../component/welcomenotes';
import SignUpScreen from '../component/signup'; // Import SignUpScreen

const { primary, tertiary } = Colors;

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName="LoginScreen" 
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false, // Hide header for login screen
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false, // Optional: Hide header for a full-screen experience
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false, // Optional: Hide header for a full-screen experience
          }}
        />
        <Stack.Screen
          name="Home"
          component={NavBar}
          options={{
            headerTintColor: primary,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Explore') {
            iconName = 'compass';
          } else if (route.name === 'Favorites') {
            iconName = 'heart';
          } else if (route.name === 'MyAccount') {
            iconName = 'user';
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'lightgray',
        tabBarStyle: {
          backgroundColor: '#4CAF50',
          paddingVertical: 10,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="My Account" component={MyAccountScreen} />
    </Tab.Navigator>
  );
};

export default RootStack;