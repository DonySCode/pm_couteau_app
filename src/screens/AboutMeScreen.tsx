import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutMeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contacto para futuros proyectos:</Text>
      <Text style={styles.contacto}>Correo: donycasto80@gmail.com</Text>
      <Text style={styles.contacto}>Teléfono: +18295772838</Text>
      <Image source={require('../assets/donycastro.jpg')} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#020000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  contacto: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 20,
  },
});

export default AboutMeScreen;
