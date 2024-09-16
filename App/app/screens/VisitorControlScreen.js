import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function VisitorControlScreen() {
  const [visitorName, setVisitorName] = useState('');
  const [visitorCPF, setVisitorCPF] = useState('');
  const [visitorPhoto, setVisitorPhoto] = useState(null);
  const navigation = useNavigation();

  const handleVisitorPermission = (permission) => {
    // Lógica para permitir ou negar entrada do visitante
    alert(`${visitorName} teve a entrada ${permission ? 'permitida' : 'negada'}`);
    setVisitorName('');
    setVisitorCPF('');
    setVisitorPhoto(null);
  };

  const mockFetchVisitorData = (name) => {
    // Mock: substituir pela lógica real de obtenção de dados
    return {
      name: name,
      cpf: '123.456.789-00',
      photo: 'https://via.placeholder.com/150' // URL de uma imagem de placeholder
    };
  };

  const handleFetchVisitorData = () => {
    const visitorData = mockFetchVisitorData(visitorName);
    setVisitorName(visitorData.name);
    setVisitorCPF(visitorData.cpf);
    setVisitorPhoto(visitorData.photo);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Controle de Visitantes</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do Visitante"
        value={visitorName}
        onChangeText={setVisitorName}
      />
      <TouchableOpacity style={styles.fetchButton} onPress={handleFetchVisitorData}>
        <Text style={styles.buttonText}>Buscar Dados do Visitante</Text>
      </TouchableOpacity>
      {visitorName && (
        <View style={styles.visitorInfo}>
          <Text style={styles.visitorText}>Nome: {visitorName}</Text>
          <Text style={styles.visitorText}>CPF: {visitorCPF}</Text>
          {visitorPhoto && <Image source={{ uri: visitorPhoto }} style={styles.visitorPhoto} />}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.permissionButton, styles.allowButton]} onPress={() => handleVisitorPermission(true)}>
              <Text style={styles.buttonText}>Permitir Entrada</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.permissionButton, styles.denyButton]} onPress={() => handleVisitorPermission(false)}>
              <Text style={styles.buttonText}>Negar Entrada</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('VisitorAdd')}>
        <Text style={styles.buttonText}>Adicionar Visitante</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  fetchButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  visitorInfo: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  visitorText: {
    fontSize: 18,
    marginBottom: 10,
  },
  visitorPhoto: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  permissionButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  allowButton: {
    backgroundColor: '#28a745',
  },
  denyButton: {
    backgroundColor: '#dc3545',
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
});

export default VisitorControlScreen;
