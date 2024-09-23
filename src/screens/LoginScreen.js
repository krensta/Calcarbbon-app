import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    try {
      const usersData = require('../database/users.json');
      const users = usersData.users; // Access the users property
      if (!Array.isArray(users)) {
        console.error('El contenido del archivo users.json no es un array');
        setError('Error leyendo archivo users.json');
        return;
      }
      const userFound = users.find((user) => user.username === username && user.password === password);
      if (userFound) {
        // Si el usuario existe, redirigir al home
        navigation.navigate('Home', {screen: 'Home'});
      } else {
        // Si el usuario no existe, mostrar error y redirigir a register
        setError('Usuario o contraseña incorrectos');
        navigation.navigate('Register');
      }
    } catch (error) {
      console.error('Error leyendo archivo users.json:', error);
      setError('Error leyendo archivo users.json');
      return;
    }
  };
  
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

      <TouchableOpacity style={styles.boton} onPress={handleLogin}>
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