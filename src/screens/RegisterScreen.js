import React, { useState } from "react";
import {StyleSheet, View, Text, TextInput, Button } from "react-native";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    
    alert("Registro exitoso, redirigiendo al login");
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
      />
      <TextInput 
        placeholder="Password" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      <Button title="Registrarse" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddebb8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100, 
    height: 100,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 35,
    color: '#000', 
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

export default RegisterScreen;
