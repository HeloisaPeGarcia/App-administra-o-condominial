import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function HomeScreen({ navigation }) {
  // Simulação de dados de avisos
  const notices = [
    { id: 1, message: 'Manutenção na piscina amanhã.' },
    { id: 2, message: 'Reunião de condomínio na sexta-feira.' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Avisos</Text>
        <ScrollView contentContainerStyle={styles.noticesContainer}>
          {notices.map(notice => (
            <View key={notice.id} style={styles.notice}>
              <Text style={styles.noticeText}>{notice.message}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={[styles.button, styles.buttonJournal]} onPress={() => navigation.navigate('Complaint')}>
            <Text style={styles.buttonText}>Reclamação</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonBoosters]} onPress={() => navigation.navigate('Notices')}>
            <Text style={styles.buttonText}>Comunicados</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonActivities]} onPress={() => navigation.navigate('Reservation')}>
            <Text style={styles.buttonText}>Reservar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.buttonPlan]} onPress={() => navigation.navigate('VisitorControl')}>
            <Text style={styles.buttonText}>Visitantes</Text>
          </TouchableOpacity>
          
        </View>
      </View>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Pagamentos')}>
          <Text style={styles.navText}>Pagamentos</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
          <Text style={styles.navText}>Perfil</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  innerContainer: {
    flex: 1,
    margin: 20,
    backgroundColor: '#ffffff',
    borderRadius: 20,
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
    textAlign: 'left',
    color: '#333',
  },
  noticesContainer: {
    flexGrow: 1,
  },
  notice: {
    padding: 15,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  noticeText: {
    color: '#6c757d',
  },
  buttonsContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
  buttonJournal: {
    backgroundColor: '#6a11cb',
  },
  buttonBoosters: {
    backgroundColor: '#ff6f61',
  },
  buttonActivities: {
    backgroundColor: '#4caf50',
  },
  buttonPlan: {
    backgroundColor: '#00bcd4',
  },
  buttonGoal: {
    backgroundColor: '#e0e0e0',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#9e9e9e',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabledSmall: {
    color: '#9e9e9e',
    fontSize: 12,
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopColor: '#ced4da',
    borderTopWidth: 1,
  },
  navText: {
    color: '#6c757d',
    fontSize: 14,
  },
});

export default HomeScreen;
