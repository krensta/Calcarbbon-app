import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext'; 

const ProfileScreen = ({ navigation }) => {
  const { user } = useAuth(); 
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>{user?.displayName|| 'Usuario'}</Text>      
        <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
          <Text style={styles.editButton}>Editar perfil</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
      <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
      <Text style={styles.sectionTitle}>Mis recomendaciones</Text>
        </TouchableOpacity>
        {/* Coloca aquí tus componentes visuales para los logros */}
      </View>

      <View style={styles.section}>
      <TouchableOpacity onPress={() => navigation.navigate('ResultsScreen')}>
      <Text style={styles.sectionTitle}>Mis resultados</Text>
        </TouchableOpacity>
        
        {/* Coloca aquí tus componentes visuales para los premios */}
      </View>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cde491', // Usando el color principal del tema
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    color: '#000', // Color de texto variante
    fontWeight: 'bold',
    padding: 10,
  },
  editButton: {
    color: '#68803f',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
  },
  expText: {
    fontSize: 16,
    color: '#FFF',
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#68803f',
    marginBottom: 10,
    borderRadius: 30,
  },
  //Revisar
  logoutButton: {
    marginTop: 30,
    backgroundColor: '#E74C3C', // Color para el botón de cerrar sesión
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#68803f',
    fontSize: 16,
  },
});

export default ProfileScreen;
