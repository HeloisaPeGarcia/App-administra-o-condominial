import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker'; // use the community picker

function ComplaintScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [location, setLocation] = useState('');
  const [apartmentOrCommonArea, setApartmentOrCommonArea] = useState('');
  const [cause, setCause] = useState('Barulho excessivo');
  const [description, setDescription] = useState('');

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);
  };

  const handleSubmit = () => {
    if (!location || !apartmentOrCommonArea || !description) {
      Alert.alert('Preencha todos os campos', 'Todos os campos são obrigatórios.');
      return;
    }

    // Mock API call
    setTimeout(() => {
      Alert.alert('Reclamação enviada', 'Sua reclamação foi enviada com sucesso.');
      navigation.navigate('Home');
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.complaintBox}>
        <Text style={styles.title}>Reclamação</Text>
        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
          <Text style={styles.datePickerText}>
            Data do ocorrido: {date.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Aonde foi o ocorrido"
          value={location}
          onChangeText={setLocation}
          placeholderTextColor="#6c757d"
        />
        <TextInput
          style={styles.input}
          placeholder="Apartamento ou área comum"
          value={apartmentOrCommonArea}
          onChangeText={setApartmentOrCommonArea}
          placeholderTextColor="#6c757d"
        />
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={cause}
            style={styles.picker}
            onValueChange={(itemValue) => setCause(itemValue)}
          >
            <Picker.Item label="Barulho excessivo" value="Barulho excessivo" />
            <Picker.Item label="Comportamento inadequado" value="Comportamento inadequado" />
            <Picker.Item label="Outros" value="Outros" />
          </Picker>
        </View>
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Descreva a reclamação"
          value={description}
          onChangeText={setDescription}
          multiline
          numberOfLines={4}
          placeholderTextColor="#6c757d"
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Enviar Reclamação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  complaintBox: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  datePicker: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  datePickerText: {
    color: '#6c757d',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  submitButton: {
    backgroundColor: '#6a11cb',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ComplaintScreen;
