import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Cambié la carga de la imagen para usar require */}
      <Image source={require('../../assets/images/logo.png')} style={styles.logo} />

      <Text style={styles.titulo}>Inicia sesión</Text>
      <StatusBar style="auto" />

      <TextInput
        placeholder='Email'
        style={styles.input}
        keyboardType='email-address'
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.boton}>
        <Text style={styles.botonTexto}>Ingresar</Text>
      </TouchableOpacity>
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
  logo: {
    width: 100, // Ajusta según el tamaño de tu imagen
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 35,
    color: '#000', // Arreglado el color
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    fontSize: 15,
    backgroundColor: '#9bb46e',
    paddingStart: 20,
    padding: 10,
    width: "80%",  // Más ancho para mejorar la UI
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },
  boton: {
    backgroundColor: '#6d8821',
    padding: 15,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    marginTop: 30,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
