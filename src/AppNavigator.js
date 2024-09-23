import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SplashScreen from "../src/screens/SplashScreen"
import RegisterScreen from "./screens/RegisterScreen"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"

const Tab = createBottomTabNavigator ()
const Stack = createStackNavigator ()

const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen name="Home" component={HomeScreen}/>
  </Tab.Navigator>

)

const AppNavigator = () => (
    <NavigationContainer>
        
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false}}/>
        </Stack.Navigator>
    </NavigationContainer>
)

export default AppNavigator