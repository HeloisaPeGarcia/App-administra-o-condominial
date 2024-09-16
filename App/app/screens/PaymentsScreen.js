import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, AsyncStorage } from 'react-native';

const PaymentsScreen = () => {
  const [payments, setPayments] = useState([]);
  const [nextInvoice, setNextInvoice] = useState('');
  const [overdue, setOverdue] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const paymentsData = await AsyncStorage.getItem('pendingPayments');
        const nextInvoiceData = await AsyncStorage.getItem('nextInvoice');
        const overdueData = await AsyncStorage.getItem('overdue');

        if (paymentsData !== null) setPayments(JSON.parse(paymentsData));
        if (nextInvoiceData !== null) setNextInvoice(nextInvoiceData);
        if (overdueData !== null) setOverdue(JSON.parse(overdueData));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pagamentos Pendentes</Text>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.paymentItem}>
            <Text>Descrição: {item.description}</Text>
            <Text>Valor: R$ {item.amount}</Text>
            <Text>Data de Vencimento: {item.dueDate}</Text>
          </View>
        )}
      />
      <Text style={styles.nextInvoice}>Próxima Fatura: {nextInvoice}</Text>
      {overdue && <Text style={styles.overdue}>Existem débitos em atraso!</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  paymentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  nextInvoice: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  overdue: {
    marginTop: 10,
    color: 'red',
    fontSize: 16,
  },
});

export default PaymentsScreen;
