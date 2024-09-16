import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

function DashboardScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Button title="Registrar Reclamação" onPress={() => navigation.navigate('Complaint')} />
      <Button title="Receber Avisos" onPress={() => navigation.navigate('Notices')} />
      <Button title="Reservar Salão de Festa" onPress={() => navigation.navigate('Reservation')} />
      <Button title="Controle de Visitantes" onPress={() => navigation.navigate('VisitorControl')} />
    </View>
  );
}
 const { isDarkMode, toggleTheme } = useContext(ThemeContext);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default DashboardScreen;
