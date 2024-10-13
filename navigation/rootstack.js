import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { Colors } from '../component/styles';
import ExploreScreen from '../component/explore';
import MyAccountScreen from '../component/profile';
import LoginScreen from '../component/login';
import FavoritesScreen from '../component/favorites';
import WelcomeScreen from '../component/welcomenotes';
import SignUpScreen from '../component/signup';
import SideMenu from '../navigation/sidemenu';
import HomeScreen from '../component/home';

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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="SignUpScreen"
          component={SignUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeStack"
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
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <View style={{ flex: 1 }}>
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
            } else if (route.name === 'My Account') {
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
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
        <Tab.Screen name="My Account" component={MyAccountScreen} />
      </Tab.Navigator>

      {/* Render the SideMenu if the menu is open */}
      {isMenuOpen && (
        <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
          <SideMenu toggleMenu={toggleMenu} />
        </View>
      )}

      {/* Menu Button to Open/Close the Side Menu */}
      <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
        <Text style={styles.menuButtonText}>&#9776;</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 50,
    zIndex: 101, // Ensure the button is above other content
  },
  menuButtonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default RootStack;