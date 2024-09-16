import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function SomeComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('UserProfile')}>
        <Text style={styles.navText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default SomeComponent;
