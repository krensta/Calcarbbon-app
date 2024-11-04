import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { updateProfile, signOut } from 'firebase/auth';
import colors from '../constants/colors';

const EditProfileScreen = ({ navigation }) => {
  const { user } = useAuth();
  const [newName, setNewName] = useState(user?.displayName || '');

  

  const handleLogout = () => {
    signOut(auth).then(() => {
      // La sesión se cerró exitosamente
      navigation.replace('Login'); // Redirige al usuario a la pantalla de login
    }).catch((error) => {
      // Un error ocurrió
      alert("Error al cerrar sesión: " + error.message);
    });
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.subtitle}>Ajustes</Text>

      
      <Text style={styles.sectionTitle}>Sobre tu cuenta</Text>

      
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Nombre</Text>
          <Text style={styles.infoText}>{newName}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditName')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

     
      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Dirección de correo electrónico</Text>
          <Text style={styles.infoText}>{user?.email}</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditEmail')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Nueva contraseña</Text>
          <Text style={styles.infoText}>Cambiar contraseña</Text>
        </View>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.navigate('EditPassword')}
        >
          <Text style={styles.editText}>Editar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.principal,
    padding: 20,
    justifyContent: 'flex-start',
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#68803f',
    marginTop: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9bb46e',
    padding: 15,
    borderRadius: 30,
    marginBottom: 10,
  },
  info: {
    flexDirection: 'column',
  },
  label: {
    fontSize: 16,
    color: '#FFF',
  },
  infoText: {
    color: '#FFF',
    fontSize: 16,
    marginTop: 5,
  },
  editButton: {
    backgroundColor: '#68803f',
    padding: 8,
    borderRadius: 10,
  },
  editText: {
    color: '#FFF',
    fontSize: 14,
  },
  logoutButton: {
    backgroundColor: '#68803f',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 40,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
