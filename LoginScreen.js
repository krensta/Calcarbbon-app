import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebaseConfig'; 


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleLogin = () => {
    
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Inicio de sesión exitoso
        console.log('Usuario logueado:', userCredential.user);
        setError(false);  // Restablecer el error en caso de éxito
        setErrorMessage('');  // Limpiar el mensaje de error
        // Navegar a la pantalla de Home al iniciar sesión correctamente
        navigation.navigate('MainTabs', { screen: 'Home' });
 
      })
      .catch((error) => {
        // Si el inicio de sesión falla, muestra el error
        setError(true);
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/isologo.png')}  
        style={styles.logo}
      />

      <Text style={styles.title}>Inicia sesión</Text>

      <View style={styles.inputContainer}>
        <Icon name="email-outline" size={24} color="#ffffff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="correo electrónico"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock-outline" size={24} color="#ffffff" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Si hay error, mostrar mensaje de error */}
      {error && (
        <Text style={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Mostrar enlace de '¿Olvidaste tu contraseña?' solo si hubo un error */}
      {error && (
          <Text style={styles.forgotPassword}>Ingresa la contraseña correcta</Text>
      )}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>¿Aun no tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.registerLink}>Regístrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddebb8',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    color: '#443E3D',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#b5c18c',
    borderRadius: 30,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#b5c18c',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#ffffff',
  },
  forgotPassword: {
    color: '#E97C71',
    fontSize: 14,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#9bb46e',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 30,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerContainer: {
    flexDirection: 'row',
  },
  registerText: {
    color: '#9A9A9A',
    fontSize: 14,
  },
  registerLink: {
    color: '#9bb46e',
    fontSize: 14,
    fontWeight: 'bold',
  },
  errorMessage: {
    color: '#D9534F',  
    fontSize: 14,
    marginBottom: 10,
  },
});

export default LoginScreen;
