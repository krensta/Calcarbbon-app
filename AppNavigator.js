import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import QuestionScreen from '../screens/QuestionScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResultsScreen from '../screens/ResultsScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import SplashScreen from '../screens/SplashScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import EditNameScreen from '../screens/EditNameScreen';
import EditEmailScreen from '../screens/EditEmailScreen';
import ChangePasswordScreen from '../screens/ChangePasswordScreen';

import colors from '../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import CustomTheme from '../constants/CustomTheme';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// TabNavigator para las pestañas principales
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home"
    screenOptions={{
      tabBarStyle: { backgroundColor: colors.principal }, // Color de la barra inferior
      tabBarActiveTintColor: colors.luminous, // Íconos activos
      tabBarInactiveTintColor: colors.variante3, // Íconos inactivos
    }}>
    <Tab.Screen name="Inicio" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="home" color={color} size={size} />
        ),
      }} />
    <Tab.Screen name="Cuestionario" component={QuestionScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="assignment" color={color} size={size} />
        ),
      }} />
    <Tab.Screen name="Resultados" component={ResultsScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="analytics" color={color} size={size} />
        ),
      }} />
    <Tab.Screen name="Perfil" component={ProfileScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="person" color={color} size={size} />
        ),
      }} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer theme={CustomTheme}>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
      
      {/* Pantallas de edición de perfil */}
      <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: true }} />
      <Stack.Screen name="EditName" component={EditNameScreen} options={{ headerTitle: 'Editar nombre', headerShown: true }} />
      <Stack.Screen name="EditEmail" component={EditEmailScreen} options={{ headerTitle: 'Editar correo electrónico', headerShown: true }} />
      <Stack.Screen name="EditPassword" component={ChangePasswordScreen} options={{ headerTitle: 'Cambiar contraseña', headerShown: true }} />
      
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
