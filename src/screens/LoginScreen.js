import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export default function LoginScreen() {
  //La imagen no aparece en el emulador
  return (
    <View style={styles.container}>
      <Image source={{uri:'../assets/images/logo.png'}}/>
      <Text style={styles.titulo}>Inicia sesión</Text>
      <StatusBar style="auto" />
      <TextInput
      placeholder='Email'
      style={styles.Insput}
      />
       <TextInput
      placeholder='Contraseña'
      style={styles.Insput}
      />
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddebb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 35,
    color: '000',
    fontWeight: 'bold',
  },
  Insput: {
   fontSize: 15,
   backgroundColor: '#9bb46e',
   paddingStart: 20,
   padding: 10,
   width: "65%",
   height: 50,
   marginTop: 20,
   borderRadius: 30,
  }
});
