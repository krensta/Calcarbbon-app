import React, { useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./screens/SplashScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import UserScreen from "./screens/UserScreen";

// Tab Navigator para Home, Ajustes, Perfil
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Profile" component={UserScreen} />
  </Tab.Navigator>
);

// Stack Navigator para Splash, Login, Register
const Stack = createStackNavigator();
const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Simula si el usuario está logueado
  const [isLoading, setIsLoading] = useState(true);  // Para el Splash

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Simula la carga del Splash
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoading ? (
          <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        ) : isLoggedIn ? (
          <Stack.Screen name="MainApp" component={TabNavigator} options={{ headerShown: false }} />
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
