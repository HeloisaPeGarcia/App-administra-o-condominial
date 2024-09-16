import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function ReservationScreen() {
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [people, setPeople] = useState([]);
  const [utensils, setUtensils] = useState('');
  const [rulesAccepted, setRulesAccepted] = useState(false);

  const handleReservation = () => {
    // Lógica para reservar o salão
    alert('Salão reservado para ' + date);
    setDate('');
    setStartTime('');
    setEndTime('');
    setNumberOfPeople('');
    setPeople([]);
    setUtensils('');
    setRulesAccepted(false);
  };

  const handleAddPerson = () => {
    setPeople([...people, { name: '', cpf: '' }]);
  };

  const handlePersonChange = (index, field, value) => {
    const updatedPeople = [...people];
    updatedPeople[index][field] = value;
    setPeople(updatedPeople);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Reservar Salão de Festa</Text>
      <TextInput
        style={styles.input}
        placeholder="Data (DD/MM/AAAA)"
        value={date}
        onChangeText={setDate}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário de Início (HH:MM)"
        value={startTime}
        onChangeText={setStartTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Horário de Fim (HH:MM)"
        value={endTime}
        onChangeText={setEndTime}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade de Pessoas"
        value={numberOfPeople}
        onChangeText={setNumberOfPeople}
        keyboardType="numeric"
      />
      {people.map((person, index) => (
        <View key={index} style={styles.personContainer}>
          <TextInput
            style={styles.input}
            placeholder={`Nome da Pessoa ${index + 1}`}
            value={person.name}
            onChangeText={(value) => handlePersonChange(index, 'name', value)}
          />
          <TextInput
            style={styles.input}
            placeholder={`CPF da Pessoa ${index + 1}`}
            value={person.cpf}
            onChangeText={(value) => handlePersonChange(index, 'cpf', value)}
          />
        </View>
      ))}
      <TouchableOpacity style={styles.addButton} onPress={handleAddPerson}>
        <Text style={styles.buttonText}>Adicionar Pessoa</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Utensílios Eletrodomésticos"
        value={utensils}
        onChangeText={setUtensils}
      />
      <View style={styles.rulesContainer}>
        <Text style={styles.rulesText}>Regras do Espaço:</Text>
        <Text style={styles.rule}>1. Horário de silêncio às 22h.</Text>
        <Text style={styles.rule}>2. Limpeza deve ser feita após o uso.</Text>
        <Text style={styles.rule}>3. Não danificar a propriedade.</Text>
      </View>
      <TouchableOpacity
        style={[styles.checkBox, rulesAccepted && styles.checkBoxSelected]}
        onPress={() => setRulesAccepted(!rulesAccepted)}
      >
        <Text style={styles.checkBoxText}>{rulesAccepted ? '✓' : ''}</Text>
      </TouchableOpacity>
      <Text style={styles.checkBoxLabel}>Aceito as regras do espaço</Text>
      <Button title="Reservar" onPress={handleReservation} disabled={!rulesAccepted} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
  personContainer: {
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  rulesContainer: {
    marginBottom: 20,
  },
  rulesText: {
    fontSize: 16,
    marginBottom: 10,
  },
  rule: {
    fontSize: 14,
    marginBottom: 5,
  },
  checkBox: {
    height: 24,
    width: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBoxSelected: {
    backgroundColor: '#007bff',
  },
  checkBoxText: {
    color: '#fff',
    fontSize: 16,
  },
  checkBoxLabel: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ReservationScreen;
