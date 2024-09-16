import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function VisitorAddScreen() {
  const [visitorName, setVisitorName] = useState('');
  const [visitorCPF, setVisitorCPF] = useState('');
  const [visitorPhoto, setVisitorPhoto] = useState(null);

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setVisitorPhoto(result.uri);
    }
  };

  const handleTakePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setVisitorPhoto(result.uri);
    }
  };

  const handleAddVisitor = () => {
    // Lógica para adicionar o visitante
    alert(`${visitorName} foi adicionado com sucesso!`);
    setVisitorName('');
    setVisitorCPF('');
    setVisitorPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Visitante</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome Completo"
        value={visitorName}
        onChangeText={setVisitorName}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={visitorCPF}
        onChangeText={setVisitorCPF}
      />
      <View style={styles.photoContainer}>
        {visitorPhoto && <Image source={{ uri: visitorPhoto }} style={styles.photo} />}
        <TouchableOpacity style={styles.photoButton} onPress={handleChoosePhoto}>
          <Text style={styles.buttonText}>Escolher Foto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.photoButton} onPress={handleTakePhoto}>
          <Text style={styles.buttonText}>Tirar Foto</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddVisitor}>
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
  photoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius: 75,
  },
  photoButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});

export default VisitorAddScreen;
