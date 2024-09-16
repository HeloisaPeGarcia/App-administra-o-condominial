import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { ThemeContext } from './ThemeContext';

function UserProfileScreen() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const [userInfo, setUserInfo] = useState({
    name: 'João Silva',
    email: 'joao.silva@example.com',
    phone: '123-456-7890',
    address: 'Rua Exemplo, 123, São Paulo, SP'
  });

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Perfil do Usuário</Text>
      <Text style={[styles.label, isDarkMode && styles.darkText]}>Nome</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        value={userInfo.name}
        editable={false}
      />
      <Text style={[styles.label, isDarkMode && styles.darkText]}>Email</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        value={userInfo.email}
        editable={false}
      />
      <Text style={[styles.label, isDarkMode && styles.darkText]}>Telefone</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        value={userInfo.phone}
        editable={false}
      />
      <Text style={[styles.label, isDarkMode && styles.darkText]}>Endereço</Text>
      <TextInput
        style={[styles.input, isDarkMode && styles.darkInput]}
        value={userInfo.address}
        editable={false}
      />
      <View style={styles.themeSwitchContainer}>
        <Text style={[styles.label, isDarkMode && styles.darkText]}>Modo Escuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  darkContainer: {
    backgroundColor: '#343a40',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  darkText: {
    color: '#f8f9fa',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#343a40',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  darkInput: {
    backgroundColor: '#495057',
    borderColor: '#6c757d',
    color: '#f8f9fa',
  },
  themeSwitchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default UserProfileScreen;
