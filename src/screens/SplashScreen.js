import { useEffect } from "react";
import { View, Text } from "react-native-web"

const SplashScreen =({ navigation })=> {
    useEffect (() => {
        const timer = setTimeout (() => {
            navigation.replace ('Login')
        }, 2000);
        return () => clearTimeout(timer)
    }, [navigation]);
    return(
        <View>
         <Text>Esto es un splash</Text>   
        </View>
    )
} 

export default SplashScreen;