import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

// Simulação de dados de avisos
const initialNotices = [
  { id: 1, message: 'Aviso 1: Manutenção na piscina amanhã.', date: new Date(2023, 5, 20), importance: 'Alta' },
  { id: 2, message: 'Aviso 2: Reunião de condomínio na sexta-feira.', date: new Date(2023, 5, 22), importance: 'Média' },
];

function NoticesScreen() {
  const [notices, setNotices] = useState(initialNotices);
  const [filterDate, setFilterDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || filterDate;
    setShowDatePicker(false);
    setFilterDate(currentDate);
    // Filtra os avisos pela data selecionada
    const filteredNotices = initialNotices.filter(notice =>
      notice.date.toDateString() === currentDate.toDateString()
    );
    setNotices(filteredNotices);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Avisos</Text>
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.datePicker}>
        <Text style={styles.datePickerText}>
          Filtrar por data: {filterDate.toLocaleDateString()}
        </Text>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          value={filterDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}
      <FlatList
        data={notices}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.notice}>
            <Text style={styles.noticeMessage}>{item.message}</Text>
            <Text style={styles.noticeDetails}>Data: {item.date.toLocaleDateString()}</Text>
            <Text style={styles.noticeDetails}>Importância: {item.importance}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  datePicker: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  datePickerText: {
    color: '#6c757d',
  },
  notice: {
    padding: 15,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  noticeMessage: {
    fontSize: 16,
    color: '#343a40',
  },
  noticeDetails: {
    fontSize: 14,
    color: '#6c757d',
  },
});

export default NoticesScreen;
